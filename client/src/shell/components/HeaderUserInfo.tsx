import { Stack } from '@mui/material';
import { useState } from 'react';

import { Paths } from '../paths';

import { HeaderAvatar } from './HeaderAvatar';
import { HeaderMenu } from './HeaderMenu';

interface Props {
  name?: string;
  imgSrc?: string;
}

export const HeaderUserInfo = ({ name, imgSrc }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen((state) => !state);

  return (
    <Stack>
      <HeaderAvatar
        title={name}
        buttonProps={{ onClick: handleToggle }}
        avatarProps={{
          src: imgSrc,
        }}
      />

      <HeaderMenu
        items={[
          { title: 'Profile', path: Paths.USER_PROFILE },
          { title: 'Logout', path: Paths.LOGIN },
        ]}
        open={open}
        onClose={handleToggle}
      />
    </Stack>
  );
};
