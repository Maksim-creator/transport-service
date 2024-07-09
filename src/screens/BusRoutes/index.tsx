import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {RouteCard} from '../../components';
import busRoutes from '../../api/busRoutes.json';
import {BusRoute} from '../../components/RouteCard/entities.ts';
import styles from './styles.ts';

export const BusRoutes = () => {
  const [buses, setBuses] = useState<BusRoute[]>([]);

  useEffect(() => {
    setBuses(busRoutes.buses);
  }, []);

  const renderItem: ListRenderItem<BusRoute> = useCallback(
    ({item}) => <RouteCard busRoute={item} />,
    [],
  );

  const keyExtractor = (item: BusRoute) => item.id.toString();

  return (
    <FlatList
      data={buses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
