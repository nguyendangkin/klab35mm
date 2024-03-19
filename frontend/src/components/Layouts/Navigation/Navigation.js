import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    NavLink,
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
                <Container fluid>
                    <Navbar.Brand className="px-5 ">
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
                                <Nav.Link to="/about" as={Link}>
                                    NavLink 2 content
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>NavLink 3 content</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">
                                    Something else here
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Loại mã TF, MF, GF"
                                className="me-2 rounded-0"
                                aria-label=""
                            />
                            <Button variant="outline-light rounded-0 text-nowrap">
                                Kiểm tra tình trạng
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
