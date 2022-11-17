import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import logo1 from "../assets/logo0.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import WalletModel from "./WalletModel";
import Mycontext from "../Context/Mycontext";
import svgimg from "../assets/svgimg.svg";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Appbar = () => {
  const context = useContext(Mycontext);
  const { open, walletmodel, wconnected, handlewallet } = context;

  const handlemodel = () => {
    walletmodel(true);
  };

  const handledisconnect = () => {
    handlewallet(false);
    walletmodel(false);
  };

  const styles = {
    "&.MuiButton-outlined": {
      border: "1px solid #6D6DFC ",
      color: "#6D6DFC ",
      fontFamily: "Poppins",
      fontSize: "0.7rem",
    },
    "&.MuiButton-outlined:hover": {
      color: "White",
    },
  };
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        {/* <Toolbar disableGutters={true}> */}
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            backgroundColor: "#14121F",
          }}
        >
          <Toolbar disableGutters={true}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box className="main-l" sx={{ width: "100%" }}>
                <img src={logo1} className="img1" alt="Mekka Stack" />
              </Box>

              <Box className="main-b">
                <Box className="num1">
                  {" "}
                  <LanguageIcon></LanguageIcon>
                </Box>

                <Typography
                  className="salona"
                  sx={{ fontFamily: "Poppins", paddingRight: "3px" }}
                >
                  SOLANA NETWORK:{" "}
                </Typography>
                <Typography className="num" mr={2} sx={{ color: "#C615A9" }}>
                  {" "}
                  <span> 968554</span>{" "}
                </Typography>
                <WalletMultiButton />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {open ? <WalletModel /> : null}
    </>
  );
};

export default Appbar;
