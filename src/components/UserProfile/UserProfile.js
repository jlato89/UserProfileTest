import React from 'react';
import UserFields from './InputFields/UserFields';
import PhysicianFields from './InputFields/PhysicianFields';
import SpouseFields from './InputFields/SpouseFields';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import styles from './UserProfile.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  }
}));

const UserProfile = (props) => {
  console.log('From Redux Store', props);
  const { userProfile } = props;
  const classes = useStyles();
  return (
    <div>
      <h2> Hello User</h2>
      <Formik
        initialValues={userProfile}
        onSubmit={data => {
          console.log(data);
          props.updateUserInfo(data);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className={classes.root} onSubmit={handleSubmit}>
            {/* //? Fields including User, Physician, & Spouse */}
            <div className={styles.container}>
              <UserFields values={values} handleChange={handleChange} className={styles.user} />
              <PhysicianFields values={values} handleChange={handleChange} className={styles.physician} />
              <SpouseFields values={values} handleChange={handleChange} className={styles.spouse} />
            </div>
            {/* //? Submit Button */}
            <Button variant='contained' color='primary' type='submit'>Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre> {/* //! Used for testing purposes */}
          </form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (userInfo) => { dispatch({ type: 'UPDATE_USER', userInfo }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)