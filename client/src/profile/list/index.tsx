import { useTypedTranslation } from '../../components/hooks/useTypedTranslation';
import { Sort } from '../../components/Sort';
import { useProfile } from '../../profile/list/useProfile';
import { AdvancedProfileSearch } from '../../profile/list/components/AdvancedProfileSearch';
import { Paths } from '../../shell/paths';
import { TableCreateAction } from '../../components/TableCreateAction';
import { TableLayout } from '../../profile/list/components/TableLayout';
import { ListPageLayout } from '../../components/ListPageLayout';

export const List = () => {
  const { form, sort } = useProfile();
  const { t } = useTypedTranslation();

  const breadcrumbs = [
    { title: t('profiles'), to: Paths.PROFILE },
    { title: t('list') },
  ];

  return (
    <ListPageLayout
      breadcrumbs={breadcrumbs}
      title={t('profiles')}
      list={<TableLayout />}
      sort={<Sort {...sort} />}
      actions={
        <TableCreateAction title={t('addProfile')} onClick={() => null} />
      }
      search={<AdvancedProfileSearch {...form} />}
    />
  );
};
