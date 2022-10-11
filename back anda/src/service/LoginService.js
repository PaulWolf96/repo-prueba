const User = require("../model/Users");

module.exports = class LoginService {
    static async login(req, res) {
        const { username, password } = req.body;
        try {
          const user = await User.login({ username }).select("-_id").select("-__v");
          if(user){
            if(user.password === password){
                res.json({ data: "logged" });
                res.status(200);
            }else{
                res.json({ data: "Not logged" });
                res.status(400);
            }
          }
        } catch (error) {
          res.status(400);
          res.json({ error : error });
        }
      }

}


