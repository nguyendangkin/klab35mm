import loginLogoutService from "./../services/loginLogoutService";

const handleLogin = async (req, res) => {
    const data = await loginLogoutService.handleLogin();
    return res.status(200).json({
        EC: data.EC,
        EM: data.EM,
        DT: data.DT,
    });
};

module.exports = { handleLogin };
