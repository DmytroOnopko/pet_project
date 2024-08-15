import { Projection } from 'mapbox-gl';
import { Map, ViewState, MapProps } from 'react-map-gl';

const token =
  'pk.eyJ1Ijoib2Rpb21pbyIsImEiOiJjbHpzZ3dscDkwMGJyMm1zOHV1bzV2NHRlIn0.8XrYMChSyHTb1ltOpUD15w';

const defaultStyles = 'mapbox://styles/mapbox/streets-v11';

const initialViewState: Partial<ViewState> = {
  latitude: 48.3794,
  longitude: 31.1656,
  zoom: 5,
  bearing: 0,
  pitch: 0,
};

export const BaseMap = ({
  children,
  projection,
  terrain,
  ...rest
}: MapProps) => {
  return (
    <Map
      initialViewState={initialViewState}
      mapStyle={defaultStyles}
      mapboxAccessToken={token}
      style={{ width: '100%', height: '100%' }}
      attributionControl={false}
      terrain={terrain ?? undefined}
      projection={projection as Projection}
      {...rest}
    >
      {children}
    </Map>
  );
};
