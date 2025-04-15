import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import CardRoutes from "./routes/CardRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CardRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

