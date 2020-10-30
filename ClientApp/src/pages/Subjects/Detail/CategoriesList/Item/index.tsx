import React from "react";
import { Typography, Grid, Card } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Category } from "../../../../../modules/category/types";

const Item: React.FC<Category> = ({ categoryId, category, description }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card className={classes.container}>
        <Typography>{category}</Typography>
        <Typography>{description}</Typography>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    marginRight: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
}));

export default Item;
