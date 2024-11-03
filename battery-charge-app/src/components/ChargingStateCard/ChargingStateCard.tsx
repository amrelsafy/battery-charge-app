import { IChargingState } from "../../interfaces/IChargingState";
import "./ChargingStateCard.css";

const ChargingStateCard = ({ item }: { item: IChargingState }) => {
  return (
    <div className="charging-state-card">
      Charging State: {item.chargingLevel}%
      <p>Date of Charge: {item.date.toDateString()}</p>
    </div>
  );
};

export default ChargingStateCard;
