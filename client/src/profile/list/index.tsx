import { Sort } from '../../components/Sort';
import { useProfile } from '../../profile/list/useProfile';
import { AdvancedProfileSearch } from '../../profile/list/components/AdvancedProfileSearch';
import { Paths } from '../../shell/paths';
import { TableCreateAction } from '../../components/TableCreateAction';
import { TableLayout } from '../../profile/list/components/TableLayout';
import { ListPageLayout } from '../../components/ListPageLayout';

export const List = () => {
  const { form, sort } = useProfile();

  return (
    <ListPageLayout
      breadcrumbs={breadcrumbs}
      title={'Profiles'}
      list={<TableLayout />}
      sort={<Sort {...sort} />}
      actions={<TableCreateAction title="Add Profile" onClick={() => null} />}
      search={<AdvancedProfileSearch {...form} />}
    />
  );
};

const breadcrumbs = [
  { title: 'Profile', to: Paths.PROFILE },
  { title: 'List' },
];
