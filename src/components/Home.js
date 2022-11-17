<<<<<<< HEAD
import React from 'react'

import NavbarComponent from '../Admin/components/Header/NavbarComponent'
=======
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";
>>>>>>> 5bd063f07f40998ee350791d2c38e9de47bf4029

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
