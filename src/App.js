import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import AdminHome from "./Admin/adminHome";
import Dashboard from "./Admin/components/pages/Dashboard";
import NftSetting from "./Admin/components/pages/NftSetting";
import TokenDistribution from "./Admin/components/TokenDistribution";
import Seo from "./Admin/components/pages/sub-pages/Seo";
import "./App.css";
import Home from "./components/Home";
import Theme from "./Admin/components/pages/sub-pages/Theme";
import Admin from "./Admin/components/pages/sub-pages/Admin";
import Others from "./Admin/components/pages/sub-pages/Other";
import StackingHome from "./Pages/StackingHome";
import StackingDashboard from "./Pages/StackingDashboard";
import ContextStore from "./Context/ContextStore";

function App() {
  return (
    <Router>
      <ContextStore>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<StackingHome />} />
            <Route path="connect" element={<StackingDashboard />} />
          </Route>

          <Route path="/admin" element={<AdminHome />}>
            <Route path="" element={<AdminHome />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="nft-settings" element={<NftSetting />} />
            <Route path="token-distribution" element={<TokenDistribution />} />
            <Route path="seo" element={<Seo />} />
            <Route path="theme" element={<Theme />} />
            <Route path="admin" element={<Admin />} />
            <Route path="others" element={<Others />} />
          </Route>
        </Routes>
      </ContextStore>
    </Router>
  );
}

export default App;
