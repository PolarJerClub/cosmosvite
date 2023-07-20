let token = '0e3240f86394e6992c72d71da393ead1ea78dabbd8bd985a';
import { CosmoState } from "../redux/slices/rootSlice";
// IMPORT DRONE INTERFACE



export const serverCalls = {
    get: async ()=>{
        const response = await fetch(`https://cosmosapi2.glitch.me/api/cosmos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: CosmoState) => {
        const response = await fetch(`https://cosmosapi2.glitch.me/api/cosmos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    update: async(id: string, data: CosmoState)=>{
        const response = await fetch(`https://cosmosapi2.glitch.me/api/cosmos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    delete: async(id: string)=>{
        const response = await fetch(`https://cosmosapi2.glitch.me/api/cosmos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data'), response.status
        }
    }
}