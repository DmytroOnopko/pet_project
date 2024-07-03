import {
  BodyRow,
  HeaderTableCellText,
  HeaderTableRow,
  TableBodyRender,
  TableDataCell,
} from '../../../../components/Table/Table';
import { TableList } from '../../../../components/Table/TableList';
import { TableListProps } from '../../../../core/types';
import { Profile } from '../../../../profile/list/domain';

export const Desktop = (props: TableListProps<Profile>) => {
  return (
    <TableList
      head={<Header />}
      body={<Body {...props} />}
      paginationProps={{
        rowsPerPageOptions: [5, 10, 25],
        component: 'div',
        count: 0,
        rowsPerPage: 0,
        page: 0,
        onPageChange: () => null,
        onRowsPerPageChange: () => null,
      }}
      isLoading={props.isLoading}
      isEmpty={!props.data?.length}
    />
  );
};

const Header = () => (
  <HeaderTableRow>
    <HeaderTableCellText>Name</HeaderTableCellText>
    <HeaderTableCellText>Email</HeaderTableCellText>
    <HeaderTableCellText>Birthday</HeaderTableCellText>
    <HeaderTableCellText>Status </HeaderTableCellText>
    <HeaderTableCellText>Location</HeaderTableCellText>
    <HeaderTableCellText sx={{ width: '40px' }}>Actions</HeaderTableCellText>
  </HeaderTableRow>
);

const Body = ({ data = [], isLoading, onRemove }: TableListProps<Profile>) => {
  return (
    <TableBodyRender loading={isLoading}>
      {data.map((item) => (
        <BodyRow key={item.id}>
          <TableDataCell>
            {item.secondName} {item.firstName}
          </TableDataCell>
          <TableDataCell>{item.email}</TableDataCell>
          <TableDataCell>{item.birthday}</TableDataCell>
          <TableDataCell>{item.status}</TableDataCell>
          <TableDataCell>
            {item.location?.lat} {item.location?.lon}
          </TableDataCell>
          <TableDataCell>
            <div style={{ width: '40px' }}>actions</div>
          </TableDataCell>
        </BodyRow>
      ))}
    </TableBodyRender>
  );
};

// const mockData: Profile[] = [
//   {
//     id: '1',
//     email: 'email',
//     password: '0993932',
//     firstName: 'Dima',
//     secondName: 'Onopko',
//     location: { lat: 1, lon: 2 },
//     description: 'tetststs cxc',
//     registrationTime: 0,
//     expiredTime: 0,
//     birthday: 0,
//     country: 'Ukraine',
//     city: 'Kyiv',
//     status: ProfileStatus.ACTIVE,
//   },
//   {
//     id: '2',
//     email: 'email',
//     password: '0993932',
//     firstName: 'Dima',
//     secondName: 'Onopko',
//     location: { lat: 1, lon: 2 },
//     description: 'tetststs cxc',
//     registrationTime: 0,
//     expiredTime: 0,
//     birthday: 0,
//     country: 'Ukraine',
//     city: 'Kyiv',
//     status: ProfileStatus.NOT_ACTIVE,
//   },
// ];
