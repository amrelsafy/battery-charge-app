import { IChargingState } from "../../interfaces/IChargingState";
import "./ChargingStateCard.css";

const ChargingStateCard = ({ item }: { item: IChargingState }) => {
  const progressBarColor =
    item.chargingLevel > 66
      ? "#49c938"
      : item.chargingLevel > 33
      ? "#dbcc46"
      : "#e3645b";

  return (
    <div role="card" className="charging-state-card">
      <div className="progress-bar">
        <div
          className="progress-bar-child"
          style={{
            width: `${item.chargingLevel}%`,
            backgroundColor: `${progressBarColor}`,
          }}
        ></div>
        <span className="progress-bar-text">{item.chargingLevel}%</span>
      </div>
      <p className="charging-state-date">{item.date.toDateString()}</p>
      <p>{item.date.toLocaleTimeString()}</p>
    </div>
  );
};

export default ChargingStateCard;
