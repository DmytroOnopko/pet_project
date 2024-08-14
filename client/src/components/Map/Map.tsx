import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {
  Map as MapBox,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  ViewState,
  GeolocateControlProps,
  NavigationControlProps,
  ScaleControlProps,
} from 'react-map-gl';
import { Box, BoxProps } from '@mui/material';
import { StyleSwitcher } from './MapStyleSwitcher';

mapboxgl.workerClass = require('mapbox-gl/dist/mapbox-gl-csp-worker').default;

interface Props extends BoxProps {
  GeolocateControlProps?: GeolocateControlProps;
  NavigationControlProps?: NavigationControlProps;
  ScaleControlProps?: ScaleControlProps;
}

export const Map = ({
  GeolocateControlProps,
  NavigationControlProps,
  ScaleControlProps,
  ...boxProps
}: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        ...boxProps.sx,
      }}
      {...boxProps}
    >
      <MapBox
        initialViewState={initialViewState}
        mapStyle={defaultStyles}
        mapboxAccessToken={token}
        style={{ width: '100%', height: '100%' }}
        attributionControl={false}
      >
        <GeolocateControl
          position="bottom-right"
          trackUserLocation
          {...GeolocateControlProps}
        />
        <NavigationControl
          position="bottom-right"
          showCompass={false}
          {...NavigationControlProps}
        />
        <ScaleControl {...ScaleControlProps} />
      </MapBox>
      <StyleSwitcher />
    </Box>
  );
};

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
