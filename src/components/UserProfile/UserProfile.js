import React from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import userInputs from './inputs';
import styles from './UserProfile.module.css';

const UserProfile = (props) => {
  return (
    <div>
      <h2> Hello User</h2>

      <Formik
        initialValues={{}}
        onSubmit={data => {
          console.log(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {userInputs.map(input =>
              <div key={input.name} className={styles[input.name]}>
                <TextField
                  type={input.type}
                  name={input.name}
                  // label={input.placeholder}
                  placeholder={input.placeholder}
                  value={values[input.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant='outlined'
                />
              </div>
            )}
            <br /> {/* Usage Temporary */}
            <Button variant='contained' color='primary'>Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UserProfile