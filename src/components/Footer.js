import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      bgcolor="#14121F"
      justifyContent="space-between"
      height="100%"
      alignItems="center"
    >
      <Typography marginLeft={2} variant="body" color="white">
        {" "}
        MekkaStack
      </Typography>
      <Typography marginRight={2} variant="caption" color="white">
        {" "}
        Powered By MekkaStack
      </Typography>
    </Box>
  );
};

export default Footer;
