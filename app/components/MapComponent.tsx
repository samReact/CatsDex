import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {featureCollection} from '../constants/datas.constants';
import colorsConstants from '../constants/colors.constants';
import {MAP_API_KEY} from 'react-native-dotenv';

const exampleIcon = require('../assets/img/pawprint.png');

MapboxGL.setAccessToken(MAP_API_KEY);

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);
  const map = useRef(null);

  return (
    <View style={styles.page}>
      {loading && (
        <ActivityIndicator size="large" color={colorsConstants.primary} />
      )}
      <View style={[styles.container, {opacity: loading ? 0 : 1}]}>
        <MapboxGL.MapView
          style={styles.map}
          zoomEnabled
          ref={map}
          onDidFinishLoadingMap={() => setLoading(false)}>
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
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
