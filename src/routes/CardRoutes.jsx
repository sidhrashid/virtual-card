import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page02 from "../pages/Page02";
import Page03 from "../pages/Page03";
import Page04 from "../pages/Page04";
import ConfirmCard from "../pages/ConfirmCard";

const CardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03" element={<Page03 />} /> 
        <Route path="/page04" element={<Page04 />} /> 
        <Route path="/page05" element={<ConfirmCard/>} /> 
      </Routes>
    </div>
  );
};

export default CardRoutes;

