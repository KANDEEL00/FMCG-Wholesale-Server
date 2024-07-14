const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Organization_ID: {
    type: String,
    required: true,
    description: 'Organization ID - Required, Foreign Key.'
  },
  Organization_Name: {
    type: [String],
    description: 'Organization Name - Array.'
  },
  Org_Admin_ID: {
    type: String,
    required: true,
    unique: true,
    description: 'Org Admin ID - Required, Unique.'
  },
  Permission_ID: {
    type: String,
    required: true,
    description: 'Permission ID - Required, Foreign Key.'
  },
  User_Status: {
    type: Boolean,
    required: true,
    description: 'User Status - Required, Boolean.'
  },
  Business_User_ID: {
    type: Number,
    description: 'Business User ID - Integer.'
  },
  Username: {
    type: String,
    required: true,
    description: 'Username - Required, Text.'
  },
  User_Password: {
    type: String,
    required: true,
    description: 'User Password - Required, String.'
  },
  User_Mobile_Number: {
    type: String,
    required: true,
    description: 'User Mobile Number - Required, ID.'
  },
  User_Email: {
    type: String,
    required: true,
    description: 'User Email - Required, String.'
  },
  User_attachment: {
    type: String,
    description: 'User Attachment - String.'
  }
});

const User = mongoose.model('Users', userSchema,'Users');

module.exports = User;
