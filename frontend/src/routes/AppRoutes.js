import { Route, Routes } from "react-router-dom";
import Home from "../pages/publicPages/Home/Home";
import About from "../pages/publicPages/WashAndScan/WashAndScan";
import WashAndScan from "../pages/publicPages/WashAndScan/WashAndScan";
import BuyFilm from "../pages/publicPages/BuyFilm/BuyFilm";
import ShipFilmToLab from "../pages/publicPages/ShipFilmToLab/ShipFilmToLab";
import PrintPhotos from "../pages/publicPages/PrintPhotos/PrintPhotos";
import Contact from "../pages/publicPages/Contact/Contact";
import AddressFixCameras from "../pages/publicPages/AddressFixCameras/AddressFixCameras";
import Login from "../pages/publicPages/Login/Login";
import PageNotFound from "../pages/publicPages/PageNotFound/PageNotFound";
import Register from "../pages/publicPages/Register/Register";

const AppRoutes = () => {
    return (
        <Routes>
            {/* public route */}
            <Route path="/" element={<Home />} />
            <Route path="/washandscan" element={<WashAndScan />} />
            <Route path="/printphotos" element={<PrintPhotos />} />
            <Route path="/buyfilm" element={<BuyFilm />} />
            <Route path="/shipfilmtolab" element={<ShipFilmToLab />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quesandans" element={<About />} />
            <Route path="/addressfixcameras" element={<AddressFixCameras />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* private route */}

            {/* page not found */}
            <Route path="/login" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoutes;
