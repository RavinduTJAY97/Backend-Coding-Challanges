// material
import { useState } from "react";
import { Box, Typography, Grid, TextField, Button,Snackbar } from "@mui/material";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import AttendanceDetailTable from "../../components/Table";

// components
// import Header from "../layouts/Header";

// ----------------------------------------------------------------------

export default function ChallengeOne() {
  const [file, setFile] = useState<string>("");
 
  const handleInputChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    let data = new FormData();
    data.append("file", file);
    console.log("data", data);
    console.log("document", document);

    axios
      .post("http://127.0.0.1:8000/api/upload-csv-file", data)
      .then((res) => {
        setOpen(true);
        console.log("CSV file uploaded successfully", res);

      })
      .catch((err) => {
        console.log("an error occurred in catch", err);
        
      });
  };

  return (
    <>
      <Box>
      <Snackbar
        anchorOrigin={{vertical:'top',horizontal:'center'}}
      
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="CSV file uploaded successfully"
        // action={action}
      />
        {/* <Header /> */}
        <Grid container sx={{ px: { md: "20em", sm: "3em", xs: "2em" } }}>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="h6"
              sx={{
                pt: "40px",
              }}
            >
              Upload CSV File:
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="receiptFile"
              type="file"
              onChange={handleInputChange}
              sx={{ pt: 1.5 }}
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 3, width: "100%" }}
            color="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
      <Box>
      <AttendanceDetailTable/>
      </Box>
    </>
  );
}
