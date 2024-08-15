import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import {
  NavigationControl,
  GeolocateControl,
  ScaleControl,
} from 'react-map-gl';
import { Box } from '@mui/material';
import { useTypedTranslation } from '../hooks/useTypedTranslation';
import { BaseMap } from './BaseMap';
import {
  getMapStyles,
  MapStyleConfig,
  MapStyleSwitcher,
} from '../Map/MapStyleSwitcher';

export const Map = () => {
  const { t } = useTypedTranslation();
  const [styleConfig, setStyleConfig] = useState(getMapStyles(t).streets);

  const handleStyleConfig = (config: MapStyleConfig) => setStyleConfig(config);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
      }}
    >
      <BaseMap mapStyle={styleConfig.style}>
        <GeolocateControl
          position="bottom-right"
          trackUserLocation
          style={{ marginBottom: '74px' }}
        />
        <NavigationControl
          position="bottom-right"
          showCompass={false}
          style={{ marginBottom: '14px' }}
        />
        <ScaleControl />
      </BaseMap>
      <MapStyleSwitcher
        styleConfig={styleConfig}
        onStyleConfig={handleStyleConfig}
      />
    </Box>
  );
};
