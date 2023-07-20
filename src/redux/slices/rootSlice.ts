import { createSlice } from '@reduxjs/toolkit';


export interface CosmoState {
    name: string;
    mass: number;
    radius: number;
    period: number;
    semi_major_axis: number;
    temperature: number;
    distance_light_year: number;
    host_star_mass: number;
    host_star_temperature: number;
}

const initialState: CosmoState = {
    name: 'Big Boy',
    mass: 0,
    radius: 0,
    period: 0,
    semi_major_axis: 0,
    temperature: 0,
    distance_light_year: 0,
    host_star_mass: 0,
    host_star_temperature: 0,
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseMass: (state, action) => { state.mass = action.payload }, 
        chooseRadius: (state, action ) => {state.radius = action.payload }, 
        choosePeriod: (state, action) => { state.period = action.payload },
        chooseSemiMajorAxis: (state, action) => { state.semi_major_axis = action.payload },
        chooseTemperature: (state, action) => { state.temperature = action.payload },
        chooseDistance: (state, action) => { state.distance_light_year = action.payload },
        chooseHostMass: (state, action) => { state.host_star_mass = action.payload },
        chooseHostTemp: (state, action) => { state.host_star_temperature = action.payload },
    }
})

// EXPORT OUR REDUCERS
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    chooseName,
    chooseMass,
    chooseRadius,
    choosePeriod,
    chooseSemiMajorAxis,
    chooseTemperature,
    chooseDistance,
    chooseHostMass,
    chooseHostTemp,
} = rootSlice.actions