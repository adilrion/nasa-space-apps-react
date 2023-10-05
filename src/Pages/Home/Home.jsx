
import {Banner} from '../../components/Banner/Banner'
import {EarthquakeInformation} from '../EarthqakeInformation/EarthquakeInformation'
import { TimingAndAlerts } from '../TimingAndAlerts/TimingAndAlerts'
import {DataChart} from '../Visualization/DataChart/DataChart'
import './Home.css'


export const Home = () => {
    return (
        <>
         
       
            <div className='min-h-screen h-[700px] relative'>
                <div className="banner"></div>
                <Banner />

                <div className="absolute top-[50%] left-2/4 flex justify-center flex-col -translate-y-2/4 -translate-x-2/4  text-center">

                    <h1 className="text-2xl md:text-3xl text-gray-300 lg:text-5xl font-bold lg:leading-[1.3]">
                        Unlock the Secrets of <span className="underline decoration-wavy underline-offset-4 decoration-[#673ee5]">DSCOVR</span> Building the Oracle

                        
                    </h1>

                    <p className=" hidden md:block mt-4">
                        DSCOVR's Oracle: Discovering Real-time Space Insights for a Better World. Explore the Cosmos with Cutting-Edge Technology and Unearth Hidden Wonders Beyond Earth's Atmosphere.
                    </p>
                </div>
          </div>

            <EarthquakeInformation />
            <DataChart />
            
            <TimingAndAlerts/>

        </>
    )
}

