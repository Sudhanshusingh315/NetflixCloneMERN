const User = require("../model/userModel");
const generatingToken = require("../auth/authWithJwt");

// @decs: Login the user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists && (await userExists.matchPasswords(password))) {
      // can login and send jwt
      const token = await generatingToken(userExists);
      res.status(201).json(token);
    } else {
      // user does not exits
      throw new Error("Email or Password is invalid");
      // needs to login again
    }
  } catch (err) {
    res.status(401).json({
      [err.name]: err.message,
    });
  }
};

// @decs: Registering the user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Enter all the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("user already exists with same name");
    } else {
      const newUser = await User.create({
        name,
        email,
        password,
      });
      if (newUser) {
        // send json web token
        const token = await generatingToken(newUser);
        res.status(201).json(token);
      }
    }
  } catch (err) {
    res.status(401).json({
      [err.name]: err.message,
    });
  }
};
