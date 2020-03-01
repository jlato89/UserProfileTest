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

  }
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state, userProfile:
          [...state.userProfile, action.userInfo]
      }
    default:
      return state
  }
  // return state;
}

export default rootReducer