import { IChargingState } from "../interfaces/IChargingState"
import { IChargingStateDTO } from "../interfaces/IChargingStateDTO"

const FormatChargeDatetoDateType = (chargingStates: IChargingStateDTO[]): IChargingState[] => {
  return chargingStates.map((chargingState) => {
    return {...chargingState, date: new Date(chargingState.date)}
  })
}

export default FormatChargeDatetoDateType
