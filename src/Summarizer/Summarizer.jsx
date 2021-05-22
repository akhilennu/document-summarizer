import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import './Summarizer.css';
import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Summarizer(props) {
  const sampleText =
    "Copy and paste contents from any wikipedia page or any site to get it's summary in {size} sentences. You can also experiment by changing the size in the input field for size.";
  return (
    <Container>
      {/* <Card className="full-height padding"> */}
      <br></br>
      <Box display="flex">
        <Card className="full-height card-left">
          <Box className="box-left" overflow="scroll">
            <TextField
              className="text-width"
              id="outlined-basic"
              label="Copy Paste a document here"
              variant="outlined"
              fullWidth
              multiline
            />
          </Box>
        </Card>
        <Box display="grid">
          <TextField
            id="outlined-number"
            label="Size"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            className="btn"
          >
            Summarize
          </Button>
        </Box>
        <Card className="box-right">
          <Box overflow="scroll">
            <Typography varient="body" gutterBottom>
              {sampleText}
            </Typography>
          </Box>
        </Card>
      </Box>
      {/* </Card> */}
    </Container>
  );
}
