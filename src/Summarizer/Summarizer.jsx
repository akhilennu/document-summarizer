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
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import * as Constants from '../utils/Constants';
import axios from 'axios';

export default function Summarizer(props) {
  let [document, setDocument] = useState('');

  let setFromInput = (e) => {
    setDocument(e.target.value);
  };

  let [summary, setSummary] = useState(Constants.PROJECT_SUMMARY);
  let [size, setSize] = useState(Constants.DEFAULT_SIZE);

  let summarizeDocument = async () => {
    setSummary('');
    let body = {
      text: document,
      size: size,
    };
    const res = await axios.post(Constants.BACKEND_API, body);
    if (res.data) {
      setSummary(res.data);
    } else {
      setSummary(Constants.ERROR_MESSAGE);
    }
  };

  let changeSize = (e) => {
    let val = e.target.value;
    if (val >= Constants.MINSIZE && val <= Constants.MAXSIZE) {
      setSize(val);
    }
  };

  return (
    <Container>
      <br></br>
      <Box display="flex">
        <Card className="full-height card">
          <Box className="box" overflow="scroll">
            <TextField
              className="text-width"
              id="outlined-basic"
              label="Copy Paste a document here"
              variant="outlined"
              onChange={setFromInput}
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
            value={size}
            onChange={changeSize}
            variant="filled"
            helperText={Constants.SIZE_HELPER_MESSAGE}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            className="btn"
            onClick={summarizeDocument}
          >
            Summarize
          </Button>
        </Box>
        <Card className="full-height card">
          <Box className="box" overflow="scroll">
            <Typography varient="body" gutterBottom paragraph>
              {summary}
            </Typography>
          </Box>
        </Card>
      </Box>
      {/* </Card> */}
    </Container>
  );
}
