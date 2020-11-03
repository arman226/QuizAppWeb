import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CategoryInfo from "./CategoryInfo";
import QuestionList from "./QuestionList";

const Detail: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={9}>
          <Typography className={classes.titleText}>
            Category Details
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Button size="small" color="primary">
            Save
          </Button>

          <Button size="small" color="secondary">
            Delete
          </Button>

          <Button size="small">Cancel</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <QuestionList />
        </Grid>
        <Grid item xs={3}>
          <CategoryInfo />
        </Grid>
      </Grid>
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
