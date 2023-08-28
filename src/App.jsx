import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Consent from "./pages/Consents/Consent";
import Login from "./pages/LogInPages/Login";
import NotFound from "./pages/NotFound";
import HealthData from "./pages/Consents/HealthData";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Consent />} />
        <Route path="health_data" element={<HealthData />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
