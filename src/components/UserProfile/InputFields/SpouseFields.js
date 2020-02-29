import React from 'react'
import { TextField, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

const SpouseFields = (props) => {
  return (
    <div>
      <h4>Spouse Info</h4>
      <FormControl>
        <TextField
          type='number'
          name='spouseInfo.id'
          label='Physician Id'
          value={props.values.spouseInfo.id}
          onChange={props.handleChange}
          variant='outlined'
        />

        <TextField
          name='spouseInfo.firstName'
          label='First Name'
          value={props.values.spouseInfo.firstName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='spouseInfo.middleName'
          label='Middle Name'
          value={props.values.spouseInfo.middleName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='spouseInfo.surName'
          label='Sur Name'
          value={props.values.spouseInfo.surName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <FormControl variant='outlined'>
          <InputLabel>Gender</InputLabel>
          <Select
            name='spouseInfo.gender'
            label='Gender'
            value={props.values.spouseInfo.gender}
            onChange={props.handleChange}
            variant='outlined'
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type='date'
          name='spouseInfo.dob'
          label='Birthdate'
          value={props.values.spouseInfo.dob}
          onChange={props.handleChange}
          variant='outlined'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </div>
  )
}

export default SpouseFields