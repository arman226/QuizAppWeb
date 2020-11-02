import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import QuestionInfo from "./QuestionInfo";
import Option from "./Options";
import Options from "./Options";

const Detail: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={9}>
          <Typography className={classes.titleText}>
            Question Details
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" size="small" color="primary">
            Save
          </Button>

          <Button variant="contained" size="small" color="secondary">
            Delete
          </Button>

          <Button variant="contained" size="small">
            Cancel
          </Button>
        </Grid>
      </Grid>

      <QuestionInfo />
      <Options />
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

export default Detail;
