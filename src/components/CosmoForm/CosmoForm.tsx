// EXTERNAL IMPORTS
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// ITERNAL IMPORTS
import {
    chooseName,
    chooseMass,
    chooseRadius,
    choosePeriod,
    chooseSemiMajorAxis,
    chooseTemperature,
    chooseDistance,
    chooseHostMass,
    chooseHostTemp,
} from '../../redux/slices/rootSlice';
import { CosmoState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks/FetchData';

interface CosmoFormProps {
    id?: string;
    data?: CosmoState
}


export const CosmoForm = (props: CosmoFormProps)=>{
    const dispatch = useDispatch();
    // const { droneData , getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm<CosmoState>({})


    const onSubmit: SubmitHandler<CosmoState> = async(data, event)=>{
        if (event) event.preventDefault()
        
        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data)
            console.log(`Updated planet: ${data.name}`)
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseMass(data.mass))
            dispatch(chooseRadius(data.radius))
            dispatch(choosePeriod(data.period))
            dispatch(chooseSemiMajorAxis(data.semi_major_axis))
            dispatch(chooseTemperature(data.temperature))
            dispatch(chooseDistance(data.distance_light_year))
            dispatch(chooseHostMass(data.host_star_mass))
            dispatch(chooseHostTemp(data.host_star_temperature))

            console.log(store.getState())

            await serverCalls.create(store.getState() as CosmoState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <label htmlFor='name'>Planet Name</label>
                    <Input {...register('name')} name='name' placeholder='Name Here' />
                </div>
                <div>
                    <label htmlFor='mass'>Mass</label>
                    <Input {...register('mass')} name='mass' placeholder='Mass Here' />
                </div>
                <div>
                    <label htmlFor='radius'>Radius</label>
                    <Input {...register('radius')} name='radius' placeholder='Radius' />
                </div>
                <div>
                    <label htmlFor='period'>Period</label>
                    <Input {...register('period')} name='period' placeholder='Period Here' />
                </div>
                <div>
                    <label htmlFor='semi_major_axis'>semi_major_axis </label>
                    <Input {...register('semi_major_axis')} name='semi_major_axis' placeholder='semi_major_axis Here' />
                </div>
                <div>
                    <label htmlFor='temperature'>temperature</label>
                    <Input {...register('temperature')} name='temperature' placeholder='temperature Here' />
                </div>
                <div>
                    <label htmlFor='distance_light_year'>distance_light_year</label>
                    <Input {...register('distance_light_year')} name='distance_light_year' placeholder='distance_light_year Here' />
                </div>
                <div>
                    <label htmlFor='host_star_mass'>host_star_mass</label>
                    <Input {...register('host_star_mass')} name='host_star_mass' placeholder='host_star_mass Here' />
                </div>
                <div>
                    <label htmlFor='host_star_temperature'>host_star_temperature</label>
                    <Input {...register('host_star_temperature')} name='host_star_temperature' placeholder='host_star_temperature Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}