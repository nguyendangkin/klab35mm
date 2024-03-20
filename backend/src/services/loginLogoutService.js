import db from "./../models/index";

const handleLogin = async () => {
    const data = await db.User.findAll({
        raw: true,
    });

    return {
        EC: 1,
        EM: "Đăng nhập thành công!",
        DT: [],
    };
};

module.exports = { handleLogin };
