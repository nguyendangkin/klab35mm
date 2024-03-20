import classNames from "classnames/bind";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./Register.module.scss";
import Image from "react-bootstrap/Image";
import photo from "./../../../assets/images/loginPage/lensmcrokkor55mmf1.7.webp";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const Register = () => {
    return (
        <div>
            <div className={cx("wrapper pt-4 row")}>
                <div className={cx("col-6")}>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder="Email hoặc số điện thoại"
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            placeholder="Email hoặc số điện thoại"
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            placeholder="Email hoặc số điện thoại"
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Button
                        variant="success"
                        className={cx("col-12 rounded-0 custom-size")}
                    >
                        Đăng ký
                    </Button>
                </div>
                <div className={cx("col-6")}>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Địa chỉ nơi sinh sống</Form.Label>
                        <Form.Control
                            placeholder="Email hoặc số điện thoại"
                            className="rounded-0"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            placeholder="Mật khẩu"
                            type="password"
                            className="rounded-0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 ">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control
                            placeholder="Mật khẩu"
                            type="password"
                            className="rounded-0"
                        />
                    </Form.Group>
                </div>
            </div>
        </div>
    );
};

export default Register;
