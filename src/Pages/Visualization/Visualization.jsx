import {EarthquakeInformation} from "../EarthqakeInformation/EarthquakeInformation"
import { TimingAndAlerts } from "../TimingAndAlerts/TimingAndAlerts"
import {DataChart} from "./DataChart/DataChart"

export const Visualization = () => {
  return (
    <>
  {/*     <header>
        <h1>DataChart</h1>
      </header> */}
      
      <section>
        <EarthquakeInformation />
        <DataChart />
        <TimingAndAlerts/>
      </section>
    
    </>
  )
}

