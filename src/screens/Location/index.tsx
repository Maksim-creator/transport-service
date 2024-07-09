import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {Image, Text, View} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import styles from './styles.ts';

export const Location = () => {
  const [location, setLocation] = React.useState<GeolocationResponse>();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocation(info));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.routeInfoContainer}>
          <Text style={styles.busNameText}>EX 1-2</Text>
          <Text style={styles.destinationText}>Kaduwela - Matara</Text>
        </View>
        <View style={styles.speedContainer}>
          <Image
            style={styles.speedIcon}
            source={require('../../assets/icons/Speed.png')}
          />
          <Text style={styles.speedText}>200kmph</Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        ) : null}
      </View>
    </View>
  );
};
