import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BusRoute} from './entities.ts';
import {RootStackParamList} from '../../navigation/entities.ts';
import {screenNames} from '../../navigation/screenNames.ts';
import styles from './styles.ts';

interface Props {
  busRoute: BusRoute;
}

export const RouteCard: React.FC<Props> = ({busRoute}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToSeats = () =>
    navigation.navigate(screenNames.SEATS_AVAILABILITY, {id: busRoute.id});

  return (
    <TouchableOpacity onPress={navigateToSeats} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.busNameText}>{busRoute.busName}</Text>
        <Text style={styles.destinationText}>
          {busRoute.from} - {busRoute.to}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Bus.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};
