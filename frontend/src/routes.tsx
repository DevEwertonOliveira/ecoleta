import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint"

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/create-point" element={<CreatePoint />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
