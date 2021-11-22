const loginRepositories = require("./../repositories/login");

exports.getInfo = async (user) => {
  try {
    const result = await loginRepositories.getInfo(user);
    return result;
  } catch (e) {
    throw e;
  }
};
