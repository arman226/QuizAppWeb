import React, { useState } from "react";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const QuestionInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Typography className={classes.headerText}>
            Question Info{" "}
            <Button variant="outlined" size="small">
              ✏
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off">
        <TextField
          disabled
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          id="standard-basic"
          label="Question Code"
        />
        <br />
        <TextField
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          id="standard-basic"
          label="Title"
        />
        <br />
        <TextField
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          multiline
          id="standard-basic"
          label="Question"
        />
        <br />
      </form>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    width: window.innerWidth,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
  },
}));

export default QuestionInfo;
