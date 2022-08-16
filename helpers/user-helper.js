const bcrypt = require("bcrypt");
const verifyPassword = (req, res, next) => {
  bcrypt.compare(body.password, user.password, (data, error) => {
    if (err) {
      console.log("problem in verification", err);
    } else {
      console.log("verified", data);
    }
  });
};
