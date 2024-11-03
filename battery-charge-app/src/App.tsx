import "./App.css";
import ChargingStateCard from "./components/ChargingStateCard/ChargingStateCard";

import data from "./data/backend-response.json";
import { orderChargingByDate } from "./utils/OrderChargingByDate";

import logo from "./assets/sonnen-logo.svg";
import FormatChargeDatetoDateType from "./utils/FormatChargeDatetoDateType";

function App() {
  const { chargingStates } = data;

  const dateFormattedChargingStates =
    FormatChargeDatetoDateType(chargingStates);
  const orderedChargingStatesByDate = orderChargingByDate(
    dateFormattedChargingStates
  );

  return (
    <>
      <header>
        <img src={logo} alt="sonnen logo" id="sonnen-logo" />
        <h1>Charging App State</h1>
      </header>

      <main>
        <section className="charge-state-container">
          {orderedChargingStatesByDate.map((chargingState) => (
            <ChargingStateCard
              item={chargingState}
              key={chargingState.internalEventId}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
