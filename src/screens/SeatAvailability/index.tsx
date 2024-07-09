import React, {useCallback} from 'react';
import {FlatList, Text, View, ListRenderItem} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useBusRouteById} from '../../hooks/useBusRouteById.ts';
import {SeatItem} from './components/SeatItem';
import {groupSeats} from './utils.ts';
import styles from './styles.ts';

type ParamList = {
  SeatAvailability: {
    id: string;
  };
};

export const SeatAvailability = () => {
  const route = useRoute<RouteProp<ParamList, 'SeatAvailability'>>();

  const busRoute = useBusRouteById(route.params.id);

  const groupedSeats = groupSeats(busRoute?.seats);

  const renderItem: ListRenderItem<{seatNumber: number; available: boolean}[]> =
    useCallback(({item}) => <SeatItem seats={item} />, []);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.routeContainer}>
          <Text style={styles.busNameText}>{busRoute?.busName}</Text>
          <Text style={styles.destinationText}>
            {busRoute?.from} - {busRoute?.to}
          </Text>
        </View>
        <View style={styles.availabilityHintContainer}>
          <View style={styles.availabilityHint}>
            <Text style={styles.availabilityHintText}>Reserved</Text>
            <View style={styles.availableMarker} />
          </View>
          <View style={styles.availabilityHint}>
            <Text style={styles.availabilityHintText}>Available</Text>
            <View style={styles.freeMarker} />
          </View>
        </View>
      </View>
      <FlatList
        data={groupedSeats}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};
