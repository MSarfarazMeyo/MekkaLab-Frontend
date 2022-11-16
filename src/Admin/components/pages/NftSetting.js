import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
const styles={
  color: "#edf0fc",
    fontFamily: "ClashDisplay,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "28px",
}
const NftSetting = () => {
  return (
    <div>
        <Grid container width={"100%"}>
         <Grid  item xs={12}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
          <Typography   sx={styles} padding={4}>  NFT Settings  </Typography>
           </Grid>
           <Grid item sx={12}>  
           
           <Box pt={5} pl={5}   sx={{
            
           }}>    
           <Box  sx={{  boxSizing:"border-box" ,border: "1px solid #4add85"}}>
              <Box padding={5}>
              <p> Verified NFTS</p>
              <p> 2211</p>
              </Box>
           </Box>


           </Box>
           
           
                 </Grid>
        </Grid>
    </div>
  )
}

export default NftSetting