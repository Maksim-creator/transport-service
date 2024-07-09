import busRoutes from '../api/busRoutes.json'

export const useBusRouteById = (id: string) => busRoutes.buses.find(bus => bus.id === id)
