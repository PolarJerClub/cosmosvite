// External Imports
import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'; 
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography } from '@mui/material'; 

// Internal Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CosmoForm } from '../CosmoForm';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90},
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true
    },
    {
        field: 'mass',
        headerName: 'mass',
        width: 150
    }, 
    {
        field: 'radius',
        headerName: 'radius',
        width: 110,
        type: 'number'
    },
    {
        field: 'period',
        headerName: 'period',
        width: 150
    },
    {
        field: 'semi_major_axis',
        headerName: 'semi major axis',
        width: 150
    },
    {
        field: 'temperature',
        headerName: 'temperature',
        width: 150
    },
    {
        field: 'distance_light_year',
        headerName: 'distance light year',
        width: 150
    },
    {
        field: 'host_star_mass',
        headerName: 'host star mass',
        width: 150
    },
    {
        field: 'host_star_temperature',
        headerName: 'host star temperature',
        width: 150
    },
];



  export const DataTable = () => {
    const { cosmoData, getData } = useGetData()
    const [ open, setOpen ] = useState(false)
    const [ gridData, setData ] = useState<GridRowSelectionModel>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    const myAuth = localStorage.getItem('myAuth')

    if(myAuth === 'true'){


    return (
        <Box sx={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={cosmoData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>
            {/* Dialog Popup for Updating a Drone */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update A Planet</DialogTitle>
                <DialogContent>
                    <DialogContentText>Planet id: {gridData[0]}</DialogContentText>
                    <CosmoForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )} else {
        return (
            <Box>
                <Typography variant='h4'>Please Sign in to view your Planets!</Typography>
            </Box>
        )
    }

            
  }