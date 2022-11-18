import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { useWallet } from "@solana/wallet-adapter-react";

function App() {
  const { publicKey } = useWallet();

  var key = publicKey?.toBase58();

  console.log("my key", key);

  return (
    <Router>
      <ContextStore>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              index
              element={key ? <StackingDashboard /> : <StackingHome />}
            />
            {/* <Route path="connect" element={} /> */}
          </Route>

          <Route path="/admin" element={<AdminHome />}>
            <Route index element={<Dashboard />} />
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
