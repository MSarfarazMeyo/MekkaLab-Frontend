import { AppBar, Container, Toolbar, Typography, Box, Button,  } from "@mui/material";
import React from "react";
import "./style.css"
import LanguageIcon from "@mui/icons-material/Language";
import logo1 from "../../../assets/logo0.png";

const Appbar = () => {
    const styles = {
        "&.MuiButton-outlined": {
          border: "1px solid #6D6DFC ",
          color: "#6D6DFC ",
          fontFamily: "Poppins",
          fontSize:"0.7rem",
      
        },
        "&.MuiButton-outlined:hover": {
          color: "White",
        }
      }
  return (
   <>
    <AppBar position="sticky" elevation={0} sx={{ borderBottom:"5px solid #C615A9" }}>
      {/* <Toolbar disableGutters={true}> */}
      <Container maxWidth="xl"  sx={{width:"100%"}}>
      <Toolbar disableGutters>
      
       <Box  sx={{display:"flex" , justifyContent:"space-between",alignItems:"center",width:"100%"}}>

       <Box  className='main-l' sx={{width:"100%"}}>
        
        
           <img src={logo1} className="img1"   alt="Mekka Stack" />
        
        </Box>
      
        

      
         
            <Box  className='main-b' >
           

               <Box className='num1'> <LanguageIcon ></LanguageIcon></Box>
            
              <Typography className='salona' sx={{ fontFamily: "Poppins",paddingRight:"3px" }}>SOLANA NETWORK: </Typography>
              <Typography className='num' mr={2} sx={{ color: "#C615A9" }}> <span>  968554</span> </Typography>
              
                <Button wid  variant="outlined" sx={styles} className='btn'>
                  Connect Wallete
                </Button>
             
         
              
              </Box>
             
         
              </Box>
        
       
      </Toolbar>
    </Container>



    </AppBar>
   
   </>
  )
}

export default Appbar