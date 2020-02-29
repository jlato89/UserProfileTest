import React from 'react'
import { TextField, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

const PhysicianFields = (props) => {
  return (
    <div>
      <h4>Physician Info</h4>
      <FormControl>
        <TextField
          type='number'
          name='physicianInfo.id'
          label='Physician Id'
          value={props.values.physicianInfo.id}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='physicianInfo.firstName'
          label='First Name'
          value={props.values.physicianInfo.firstName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='physicianInfo.middleName'
          label='Middle Name'
          value={props.values.physicianInfo.middleName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='physicianInfo.surName'
          label='Sur Name'
          value={props.values.physicianInfo.surName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <FormControl variant='outlined'>
          <InputLabel>Gender</InputLabel>
          <Select
            name='physicianInfo.gender'
            label='Gender'
            value={props.values.physicianInfo.gender}
            onChange={props.handleChange}
            variant='outlined'
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type='number'
          name='physicianInfo.phoneNo'
          label='Phone'
          value={props.values.physicianInfo.phoneNo}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          type='email'
          name='physicianInfo.email'
          label='E-mail'
          value={props.values.physicianInfo.email}
          onChange={props.handleChange}
          variant='outlined'
        />
      </FormControl>
    </div>
  )
}

export default PhysicianFields