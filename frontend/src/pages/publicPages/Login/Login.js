import classNames from "classnames/bind";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./Login.module.scss";
import Image from "react-bootstrap/Image";
import photo from "./../../../assets/images/loginPage/lensmcrokkor55mmf1.7.webp";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const Login = () => {
    return (
        <div className={cx("wrapper pt-4 row")}>
            <div className={cx("col-6")}>
                <Form.Group className="mb-3 ">
                    <Form.Label>Tài khoản</Form.Label>
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
                <Button variant="success" className="col-12 rounded-0">
                    Đăng nhập
                </Button>
                <div className="fw-medium pt-3 float-end">
                    <Link to="/register">Chưa có tài khoản? Đi Đăng kí!</Link>
                </div>
            </div>
            <div className={cx("col-6")}>
                <Image src={photo} thumbnail />
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>
                            Using film photographs to honor the beauty of
                            nature.
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        mologophi{" - "}
                        <cite title="Source Title">
                            photo from: r/minolta u/Live-Plant-7400
                        </cite>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Login;
