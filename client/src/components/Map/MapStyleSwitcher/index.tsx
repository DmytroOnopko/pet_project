import {
  Box,
  Button as MuiButton,
  Stack,
  Fade,
  alpha,
  darken,
  ButtonProps,
  Typography,
} from '@mui/material';
import { TFunction } from 'i18next';
import { useState } from 'react';
import { useTypedTranslation } from '../../hooks/useTypedTranslation';

import darkImg from './img/dark.png';
import lightImg from './img/light.png';
import satelliteImg from './img/satellite.png';
import streetsImg from './img/streets.png';

interface Pros {
  styleConfig: MapStyleConfig;
  onStyleConfig: (styleConfig: MapStyleConfig) => void;
}

export const MapStyleSwitcher = ({ styleConfig, onStyleConfig }: Pros) => {
  const { t } = useTypedTranslation();
  const [fadeIn, setFadeIn] = useState(false);

  const toggleFadeIn = () => {
    setFadeIn((prev) => !prev);
  };

  const handleStyleConfig = (styleConfig: MapStyleConfig) => () => {
    onStyleConfig(styleConfig);
    toggleFadeIn();
  };

  return (
    <Stack
      sx={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        gap: '10px',
        flexDirection: 'row-reverse',
      }}
    >
      <Button onClick={toggleFadeIn} styleConfig={styleConfig} />

      <Styles
        styles={getMapStyles(t)}
        onStyleConfig={handleStyleConfig}
        styleConfig={styleConfig}
        fadeIn={fadeIn}
      />
    </Stack>
  );
};

const Button = ({
  styleConfig,
  selected = false,
  item = false,
  ...props
}: ButtonProps & {
  styleConfig: MapStyleConfig;
  selected?: boolean;
  item?: boolean;
}) => (
  <MuiButton
    {...props}
    variant="text"
    sx={{
      height: 50,
      width: 50,
      background: ({ palette }) => palette.background.default,
      padding: 0.25,
      minWidth: 'auto',
      borderRadius: ({ shape }) => `${shape.borderRadius}px`,
      boxShadow: `0 0 0 2px ${alpha('#000000', 0.1)}`,

      '&:hover': {
        background: ({ palette }) => darken(palette.background.default, 0.1),

        ...((selected || item) && {
          '& .MuiTypography-root': {
            marginBottom: 0,
          },
        }),
      },

      ...props.sx,
    }}
  >
    <Box
      sx={{
        height: 43,
        width: 43,
        borderRadius: 0.2,
        overflow: 'hidden',
        boxShadow: ({ palette }) =>
          `0 0 0 1px ${selected ? palette.primary.main : palette.divider}`,
        position: 'relative',

        ...(item && {
          border: ({ palette }) => `1px solid ${palette.background.default}`,
          boxSizing: 'border-box',
        }),
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${styleConfig.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
          borderRadius: '1px',
        }}
      />
      <Typography
        sx={{
          width: '100%',
          background: ({ palette }) => alpha(palette.divider, 0.3),
          color: ({ palette }) => palette.primary.contrastText,
          position: 'absolute',
          fontSize: '8px',
          textTransform: 'capitalize',
          bottom: 0,
          marginBottom: selected ? 0 : '-13px',
          transition: 'margin-bottom 250ms',
        }}
      >
        {styleConfig.label}
      </Typography>
    </Box>
  </MuiButton>
);

interface MapStylesProps {
  styles: Record<MapStylesKey, MapStyleConfig>;
  styleConfig: MapStyleConfig;
  onStyleConfig: (styleConfig: MapStyleConfig) => () => void;
  fadeIn: boolean;
}

const Styles = ({
  styles,
  styleConfig,
  onStyleConfig,
  fadeIn,
}: MapStylesProps) => {
  return (
    <Fade in={fadeIn}>
      <Stack
        sx={{
          background: ({ palette }) => palette.background.default,
          p: ({ spacing }) => spacing(0.25, 0.4),
          boxShadow: `0 0 0 2px ${alpha('#000000', 0.1)}`,
          borderRadius: ({ shape }) => `${shape.borderRadius}px`,
          height: 50,
          width: 'auto',
          boxSizing: 'border-box',
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {(Object.keys(styles) as MapStylesKey[]).map((key) => (
          <Button
            item
            sx={{
              height: 43,
              width: 43,
              minWidth: 'auto',
              padding: 0,
              borderRadius: 0.25,
              boxShadow: 'none',
            }}
            onClick={onStyleConfig(styles[key])}
            styleConfig={styles[key]}
            selected={styleConfig.img === styles[key].img}
          />
        ))}
      </Stack>
    </Fade>
  );
};

enum MapStylesKey {
  STREETS = 'streets',
  SATELLITE = 'satellite',
  DARK = 'dark',
  LIGHT = 'light',
}

enum MapStyles {
  STREETS = 'mapbox://styles/mapbox/streets-v12',
  SATELLITE = 'mapbox://styles/mapbox/satellite-streets-v12',
  DARK = 'mapbox://styles/mapbox/dark-v11',
  LIGHT = 'mapbox://styles/mapbox/light-v11',
}

export interface MapStyleConfig {
  label: string;
  style: MapStyles;
  img: string;
}

export const getMapStyles = (
  t: TFunction,
): Record<MapStylesKey, MapStyleConfig> => ({
  [MapStylesKey.STREETS]: {
    label: t(MapStylesKey.STREETS),
    style: MapStyles.STREETS,
    img: streetsImg,
  },
  [MapStylesKey.SATELLITE]: {
    label: t(MapStylesKey.SATELLITE),
    style: MapStyles.SATELLITE,
    img: satelliteImg,
  },
  [MapStylesKey.DARK]: {
    label: t(MapStylesKey.DARK),
    style: MapStyles.DARK,
    img: darkImg,
  },
  [MapStylesKey.LIGHT]: {
    label: t(MapStylesKey.LIGHT),
    style: MapStyles.LIGHT,
    img: lightImg,
  },
});
