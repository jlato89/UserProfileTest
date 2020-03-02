const initState = {
  userProfile: {
    userInfo: {
      firstName: 'testing', middleName: '', surName: '', dob: '', gender: '', phoneNo: '', email: '', local: '',
      mailingAddress: {
        street: '', zip: '', country: ''
      }
    },
    physicianInfo: {
      id: '', firstName: '', middleName: '', surName: '', gender: '', phoneNo: '', email: ''
    },
    spouseInfo: {
      id: '', firstName: '', middleName: '', surName: '', gender: '', dob: ''
    }
  }   //* will need to restructure if wanting to store more than one userProfile
}

const rootReducer = (state = initState, action) => {
  console.log('previous state', state);
  console.log('current payload', action.payload);
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, userProfile: action.payload }

    default:
      return state
  }
}

export default rootReducer