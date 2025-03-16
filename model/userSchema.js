const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const TransactionSchema = new mongoose.Schema({
  name: String,
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  wallet: {
    balance: {
      type: Number,
      default: 1000
    }
  },
  income: {
    type: Number,
    default: 52
  },
  expenses: {
    type: Number,
    default: 56
  },
  transactions: [TransactionSchema]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model('User', UserSchema);
