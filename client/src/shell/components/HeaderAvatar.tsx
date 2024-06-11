import {
  Avatar,
  AvatarProps,
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from '@mui/material';

interface Props extends Omit<TooltipProps, 'children'> {
  avatarProps?: AvatarProps;
  buttonProps?: IconButtonProps;
}

export const HeaderAvatar = ({
  avatarProps,
  buttonProps,
  ...tootlipProps
}: Props) => {
  return (
    <Tooltip {...tootlipProps}>
      <IconButton sx={{ p: 0 }} {...buttonProps}>
        <Avatar {...avatarProps} />
      </IconButton>
    </Tooltip>
  );
};
