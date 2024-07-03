import { useSearchParams } from 'react-router-dom';

export function useSearchParamsState<Params extends object>(
  state: Persistable<Extract<keyof Params, string>, unknown>[],
) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSave = (params: { [Key in keyof Params]: Params[Key] }) => {
    setSearchParams((currentParams) => {
      const serializedParams = state.reduce(
        (acc, item) => {
          const value = params[item.name];
          acc[item.name] = value ? item.serialize(value) : value;

          return acc;
        },
        {} as Record<Extract<keyof Params, string>, unknown>,
      );

      const allParams = {
        ...Object.fromEntries(currentParams.entries()),
        ...serializedParams,
      };

      return Object.keys(allParams).reduce(
        (acc, key) => ({
          ...acc,
          ...(!!allParams[key] && { [key]: allParams[key] }),
        }),
        {},
      );
    });
  };

  const getParams = (params: URLSearchParams) =>
    state.reduce(
      (acc, item) => {
        const value = params.get(item.name);
        acc[item.name] = item.deserialize(value) as Params[Extract<
          keyof Params,
          string
        >];

        return acc;
      },
      {} as { [Key in keyof Params]: Params[Key] },
    );

  return {
    params: getParams(searchParams),
    saveParams: handleSave,
  };
}

export interface Persistable<Name extends string, Value> {
  name: Name;
  serialize(value: Value): string;
  deserialize(value: string | null): Value;
}

export const ArrayParams = <Name extends string>(
  name: Name,
  defaultValue: string[],
): Persistable<Name, string[]> => ({
  name,
  serialize: (value) => JSON.stringify(value),
  deserialize: (value) => (value ? JSON.parse(value) : defaultValue),
});

export const NumberParam = <Name extends string>(
  name: Name,
  defaultValue: number,
): Persistable<Name, number> => ({
  name,
  serialize: (value) => value.toString(),
  deserialize: (value) => (value ? parseInt(value, 10) : defaultValue),
});

export const StringParam = <Name extends string>(
  name: Name,
  defaultValue: string,
): Persistable<Name, string> => ({
  name,
  serialize: (value) => value,
  deserialize: (serializedValue) => serializedValue ?? defaultValue,
});
