const LoginService = require("../services/LoginService");

exports.renderLogin = async (req, res) => {
  try {
    let user = req.session.user ? req.session.user : null;

    res.render("pages/admin/login", { 
      user, 
    
    });
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
exports.getInfo = async (req, res) => {
  try {
    var data = req.body;
    var user = {
      userid: data.userid,
      userpassword: data.userpassword,
    };
    //console.log(user);
    
    let result = await LoginService.getInfo(user);
    //console.log("User.userpassword = ",user.userpassword);
    //console.log("Result[0].userpassword = ",result[0]);
    /* Cau lenh dung - SQL Injection*/ /* if (user.userpassword == result[0].userpassword) */ 
    /*Cau lenh sai - SQL Injection*/ if (result.length > 0)  {
      req.session.user = data.userid;
      let csrfToken = Math.floor(Math.random()*1000000000000000);
      req.session.csrfToken = csrfToken.toString();
      console.log("session token: ", req.session.csrfToken);
      // console.log("true");
      res.cookie('username', data.userid);
      res.cookie('password', data.userpassword);
      res.redirect("/");
    } else {
      console.log("error-login");
      res.render("pages/error-page");
    }
    // console.log(data.userpassword);
    // console.log(result);
  } catch (e) {}
};
exports.Logout = async (req, res) => {
  try {
    req.session.destroy();
    console.log("Session: ", req.session);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
