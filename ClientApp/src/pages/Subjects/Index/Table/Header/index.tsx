import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4}>
        <Typography className={classes.headerText}>Subject Id</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.headerText}>Subject</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.headerText}>Description</Typography>
      </Grid>
      {/* <Grid item xs={3}>
        <Typography className={classes.headerText}>Actions</Typography>
      </Grid> */}
    </Grid>
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

export default Header;
