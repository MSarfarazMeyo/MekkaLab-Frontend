import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box height="100vh" flexDirection="column">
      <Box>
        <Appbar />
      </Box>
      <Box
        height="80%"
        bgcolor="#14121F"
        sx={{
          borderTop: 2,
          borderColor: "#ADD8E6",
        }}
      >
        <Outlet />
      </Box>
      <Box
        height="10%"
        sx={{
          borderTop: 2,
          borderColor: "#ADD8E6",
        }}
      >
        {" "}
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
