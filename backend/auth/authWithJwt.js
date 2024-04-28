const jwt = require("jsonwebtoken");

generatingToken = (userCredentials) => {
  const { _id, name, email } = userCredentials;
  return new Promise((resolve, reject) => {
    if (_id) {
     const token = jwt.sign(
        {
          id: _id,
          name,
          email,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      resolve(token)
    } else {
        reject("Could not Create a token");
    }
  });
};

module.exports = generatingToken;