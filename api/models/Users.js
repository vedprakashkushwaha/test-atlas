
module.exports = {

  attributes: {
    
    password: {
      type: 'string',
      required: true,
      maxLength: 15,
      minLength: 6,
    },

    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    }
  }

};