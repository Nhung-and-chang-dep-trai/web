const LoginService = require("../services/LoginService");

exports.renderLogin = async (req, res) => {
  try {
    let user = req.session.user ? req.session.user : null;

    res.render("pages/admin/login", { user });
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
    // console.log(user);

    let result = await LoginService.getInfo(user);
    if (data.userpassword == result[0].userpassword) {
      req.session.user = data.userid;
      // console.log("true");
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
    req.session.user = null;
    // console.log(req.session);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};