import React from 'react'
import { TextField, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

const UserFields = (props) => {
  return (
    <div>
      <h4>User Info</h4>
      <FormControl>
        <TextField
          name='userInfo.firstName'
          label='First Name'
          value={props.values.userInfo.firstName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='userInfo.middleName'
          label='Middle Name'
          value={props.values.userInfo.middleName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='userInfo.surName'
          label='Sur Name'
          value={props.values.userInfo.surName}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          type='date'
          name='userInfo.dob'
          label='Birthdate'
          value={props.values.userInfo.dob}
          onChange={props.handleChange}
          variant='outlined'
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl variant='outlined'>
          <InputLabel>Gender</InputLabel>
          <Select
            name='userInfo.gender'
            label='Gender'
            value={props.values.userInfo.gender}
            onChange={props.handleChange}
            variant='outlined'
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type='number'
          name='userInfo.phoneNo'
          label='Phone'
          value={props.values.userInfo.phoneNo}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          type='email'
          name='userInfo.email'
          label='E-mail'
          value={props.values.userInfo.email}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='userInfo.local'
          label='Preferred Language'
          value={props.values.userInfo.local}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='userInfo.mailingAddress.street'
          label='Street Address'
          value={props.values.userInfo.mailingAddress.street}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          type='number'
          name='userInfo.mailingAddress.zip'
          label='Zip Code'
          value={props.values.userInfo.mailingAddress.zip}
          onChange={props.handleChange}
          variant='outlined'
        />
        <TextField
          name='userInfo.mailingAddress.country'
          label='Country'
          value={props.values.userInfo.mailingAddress.country}
          onChange={props.handleChange}
          variant='outlined'
        />

      </FormControl>
    </div>
  )
}

export default UserFields