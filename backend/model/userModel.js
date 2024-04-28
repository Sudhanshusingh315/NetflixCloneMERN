const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// hasing the password
userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    console.log(err);
  }
});

// matching password
userSchema.methods.matchPasswords = async function (userPassword) {
  return await bcrypt.compare(userPassword,this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
