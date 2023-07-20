import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';
import { CosmoState } from '../redux/slices/rootSlice';


export const useGetData =()=>{
    const [cosmoData, setData] = useState<CosmoState[]>([]);

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( ()=>{
        handleDataFetch()
    }, [])

    return {cosmoData, getData: handleDataFetch}

}