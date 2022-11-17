import React ,{useState} from 'react'
import { Box, Grid, Input, Typography,Button ,TextField} from '@mui/material'
import { SketchPicker } from "react-color";
import CloseIcon from "@mui/icons-material/Close";
const styles={
    color: "#edf0fc",
      fontFamily: "ClashDisplay,sans-serif",
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "28px",
      "&.MuiButton-contained": {
        background:
          " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
        color: "White",
      },
  }
const styles3={
   
      "&.MuiButton-contained": {
        background:
          " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
        color: "White",
      },
  }
  const styles2 = {
    width: "100%",
    "&.MuiButton-outlined": {
      border: "2px solid #44327E ",
      color: "white ",
      fontFamily: "Poppins",
      "&.Mui-disabled":{
        background:"#242531 !important",
        color:"#a1a8b0",
        borderColor:"#242531"
  
      }
    },
  };
const Theme = () => {
    const [display,setDisplay]=useState(true)
    const [image, setImage] = useState(null);
    const [appheadline, setappheadline] = useState("");
    const [currentcolor, setcurrentcolor] = useState("#ff6");
  
    const [appcaption, setappcaption] = useState("");
    const [picker, setpicker] = useState(false);
    const [imageurl, setImageurl] = useState(null);
  
    const handlelogo = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImageurl(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };
    const handlesketchpicker = () => {
        setpicker(true);
      };
      const handlechange = (color) => {
        setcurrentcolor(color.hex);
       
      };
      const handleChange2 = (event) => {
        setappheadline(event.target.value);
       
      };

      
  const handleChange3 = (event) => {
    setappcaption(event.target.value);
 
  };
    

  return (
    <Grid container width={"100%"}>
    <Grid  item xs={9}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
      
     <Typography   sx={styles} padding={4}>  Theme </Typography>
      </Grid>
    <Grid  item xs={3}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7 ",display:"flex",alignItems:"center"}} >
      {display?(<Button variant='contained' sx={styles3} onClick={(e)=>{setDisplay(!display)
       }}> Edit</Button>):(<Box p={2} sx={{display:"flex",justifyContent:"space-evenly",width:"100%"}}>
        <Button variant='contained' sx={styles3}   > Save</Button>
        <Button variant='contained' sx={styles3}   onClick={(e)=>{setDisplay(!display)}}> Cancel</Button>
       </Box>)}
       
       
      </Grid>
       <Grid item sx={12} width={"100%"}>
       <Box
      paddingTop={2} 
        paddingBottom={4}
        paddingRight={4}
        paddingLeft={4}
        sx={{
          width:"50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
       

                <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "500",
              fontSize: "15px",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            LOGO <span style={{ color: "green" }}>*</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              lineHeight: "150%",
              marginBottom: "10px",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            Jpg. Jpeg. PNG only 5mb limit{" "}
            <span style={{ color: "#6D6DFC" }}>
              {" "}
              <u>A Few Tips</u>
            </span>
          </Typography>

          <Button variant="outlined" disabled={display} component="label" sx={styles2}>
            Upload
            <input
              hidden
             
              accept="image/*"
              multiple
              type="file"
              onChange={handlelogo}
              disabled={display}
            />
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: 2,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,

              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Theme Color
          </Typography>
          <Box
            sx={{
              mt: 1,
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {picker ? (
              <Box sx={{ display: "flex" }}>
                <SketchPicker
                  color={currentcolor}
                  onChangeComplete={handlechange}
                ></SketchPicker>
                <CloseIcon color="info" onClick={() => setpicker(false)} />
              </Box>
            ) : null}
          </Box>
          <Button onClick={handlesketchpicker} sx={styles2} variant="outlined" disabled={display}>
            {" "}
            Pick Color
          </Button>
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            WEBSITE HEADLINE <span style={{ color: "green" }}>*</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
            50 Latters Max
          </Typography>

          <TextField
            multiline
            rows={3}
            maxRows={4}
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
              fontSize: "1px",
              fontFamily: "Poppins",
            }}
            id="outlined-name"
            label="input website headline  here"
            variant="outlined"
            name="appheadline"
            value={appheadline}
            onChange={handleChange2}
            disabled={display}
          />
        </Box>
        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Website Headline Caption (optional)
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
            50 Latters Max
          </Typography>

          <TextField
            multiline
            rows={3}
            maxRows={4}
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
            }}
            id="outlined-name"
          
            variant="outlined"
            name="appcaption"
            value={"yourCaption"}
            onChange={handleChange3}
            disabled={display}
          />
        </Box>




      </Box>
       </Grid>



      </Grid>
  )
}

export default Theme