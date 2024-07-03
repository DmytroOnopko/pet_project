import {
  BreadcrumbsProps,
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  styled,
} from '@mui/material';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { Paths } from '../shell/paths';

interface Props {
  items: { title: string; to?: Paths }[];
  BreadcrumbsProps?: BreadcrumbsProps;
}

export const Breadcrumbs = ({ items, BreadcrumbsProps }: Props) => (
  <MuiBreadcrumbs {...BreadcrumbsProps} separator={<Typography>/</Typography>}>
    {items.map((item) =>
      item.to ? (
        <NavLink color="primary.main" key={item.to} to={item.to}>
          {item.title}
        </NavLink>
      ) : (
        <Typography
          sx={{
            wordBreak: 'break-word',
            fontSize: 14,
          }}
          key={item.title}
        >
          {item.title}
        </Typography>
      ),
    )}
  </MuiBreadcrumbs>
);

const NavLink = styled(RouteNavLink)`
  color: inherit;
  wordbreak: break-word;
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
