import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const SubjectInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Typography className={classes.headerText}>Subject Info</Typography>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off">
        <TextField
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          id="standard-basic"
          label="Subject Name"
        />
        <br />
        <TextField
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          multiline
          id="standard-basic"
          label="Description"
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

export default SubjectInfo;
