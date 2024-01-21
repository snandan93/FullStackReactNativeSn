const bcrypt = require("bcrypt");

//Hash

exports.hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};
// decrypet

exports.comparePassword=(password, hashpassword)=>{
return bcrypt.compare(password, hashpassword)
}