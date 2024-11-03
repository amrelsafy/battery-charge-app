import { IChargingState } from "../interfaces/IChargingState";

export const orderChargingByDate = (chargingStates: IChargingState[]): IChargingState[] => {
  return chargingStates.sort((a,b) => b.date.getTime() - a.date.getTime());
}