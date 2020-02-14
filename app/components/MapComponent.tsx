import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {featureCollection} from '../constants/datas.constants';

const exampleIcon = require('../assets/img/pawprint.png');

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FtcmVhY3QiLCJhIjoiY2s2bTk4cDJ4MGxvMjNscDY1NWR5ZTdjYiJ9.KWABLXyzEbUY0tYEwnzekA',
);

const defaultCamera = {
  centerCoordinate: [6.211513, 46.384264],
  zoomLevel: 14,
};

const stylesIcon = {
  icon: {
    iconImage: exampleIcon,
    iconAllowOverlap: true,
    iconColor: '#fff',
    iconSize: 0.9,
  },
};

const MapComponent = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);
  const map = useRef(null);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} zoomEnabled ref={map}>
          <MapboxGL.Camera defaultSettings={defaultCamera} />
          <MapboxGL.ShapeSource
            id="symbolLocationSource"
            shape={featureCollection}>
            <MapboxGL.SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={1}
              style={stylesIcon.icon}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
