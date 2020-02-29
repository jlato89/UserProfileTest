const userInputs = [
  {
    name: 'firstName',
    placeholder: 'First Name'
  },
  {
    name: 'middleName',
    placeholder: 'Middle Name'
  },
  {
    name: 'surName',
    placeholder: 'Sur Name'
  },
  {
    type: 'date',
    name: 'dob',
    placeholder: 'Birthdate'
  },
  {
    name: 'gender',
    placeholder: 'Gender',
    options: ['Male', 'Female']
  },
  {
    name: 'phoneNo',
    placeholder: 'Phone'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'E-mail'
  },
  {
    name: 'local',
    placeholder: 'Language'
  },
  {
    name: 'mailingAddressStreet',
    placeholder: 'Street Address'
  },
  {
    name: 'mailingAddressZip',
    placeholder: 'Zipcode'
  },
  {
    name: 'mailingAddressCountry',
    placeholder: 'Country'
  },
  // User Treating Physician
  {
    name: 'userTreatingPhysician.id',
    placeholder: 'Physician\'s Id'
  },
  {
    name: 'userTreatingPhysician.firstName',
    placeholder: 'Physician\'s firstName'
  },
  {
    name: 'userTreatingPhysician.middleName',
    placeholder: 'Physician\'s Middle Name'
  },
  {
    name: 'userTreatingPhysician.surName',
    placeholder: 'Physician\'s Sur Name'
  },
  {
    name: 'userTreatingPhysician.gender',
    placeholder: 'Physician\'s Gender'
  },
  {
    name: 'userTreatingPhysician.phoneNo',
    placeholder: 'Physician\'s Phone'
  },
  {
    name: 'userTreatingPhysician.email',
    placeholder: 'Physician\'s E-mail'
  },
  // User Spouse
  {
    name: 'userSpouse.id',
    placeholder: 'Spouse\'s Id'
  },
  {
    name: 'userSpouse.firstName',
    placeholder: 'Spouse\'s First Name'
  },
  {
    name: 'userSpouse.middleName',
    placeholder: 'Spouse\'s Middle Name'
  },
  {
    name: 'userSpouse.surName',
    placeholder: 'Spouse\'s Sur Name'
  },
  {
    name: 'userSpouse.gender',
    placeholder: 'Spouse\'s Gender'
  },
  {
    name: 'userSpouse.dob',
    placeholder: 'Spouse\'s Birthdate'
  },
]

export default userInputs