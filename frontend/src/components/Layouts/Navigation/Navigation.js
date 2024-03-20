import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown,
} from "react-bootstrap";
import classNames from "classnames/bind";
import style from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const Navigation = () => {
    return (
        <div className={cx("wrapper")}>
            <Navbar expand="lg" bg="body-tertiary">
                <Container>
                    <Navbar.Brand className="">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="border-bottom pb-0 border-5 border-danger"
                        >
                            <span className="p-1 border border-bottom-0  me-1 border-danger">
                                K
                            </span>
                            Lab35mm
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ "--bs-scroll-height": "100px" }}
                        >
                            <Nav.Item>
                                <Nav.Link to="/" as={Link}>
                                    Trang chủ
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/washandscan" as={Link}>
                                    Trán & Scan Film
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/printphotos" as={Link}>
                                    In Ảnh
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/buyfilm" as={Link}>
                                    Mua Film
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to="/shipfilmtolab" as={Link}>
                                    Gửi Film Đến Lab
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Xem Thêm" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/contact">
                                    Liên Hệ
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/quesandans">
                                    Hỏi Đáp
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/addressfixcameras"
                                >
                                    Các Địa Chỉ Sửa Máy Film
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/login">
                                    Đăng Nhập
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Nhập Mã TF, MF, GF"
                                className="me-2 rounded-0 border-success"
                                aria-label=""
                            />
                            <Button variant="outline-success rounded-0 text-nowrap">
                                Kiểm Tra Tình Trạng Đơn
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
