import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const CategoriesList: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.headerText}>Categories</Typography>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    // width: window.innerWidth,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
}));

export default CategoriesList;
