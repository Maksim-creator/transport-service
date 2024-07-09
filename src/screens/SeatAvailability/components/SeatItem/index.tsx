import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {screenNames} from '../../../../navigation/screenNames.ts';
import {RootStackParamList} from '../../../../navigation/entities.ts';
import styles from './styles.ts';

interface Props {
  seats: {
    available: boolean;
    seatNumber: number;
  }[];
}

export const SeatItem: React.FC<Props> = ({seats}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToMap = () => navigation.navigate(screenNames.LOCATION);

  return (
    <View style={styles.container}>
      {seats.map(seat => (
        <TouchableOpacity
          key={seat.seatNumber}
          onPress={navigateToMap}
          style={[styles.item, seat.available ? null : styles.unavailableItem]}>
          <Text style={styles.itemText}>{seat.seatNumber}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
