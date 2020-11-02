import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Card, ButtonBase } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Category } from "../../../../../modules/category/types";

const Item: React.FC<Category> = ({ categoryId, category, description }) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToDetail = () => {
    history.push({
      pathname: "/questionDetail",
      state: { categoryId },
    });
  };

  return (
    <Grid item xs={4}>
      <Card style={{ marginTop: 10, marginRight: 20 }}>
        <ButtonBase
          className={classes.container}
          focusRipple={false}
          disableRipple
          onClick={navigateToDetail}
        >
          <Typography>{category}</Typography>
          <Typography>{description}</Typography>
        </ButtonBase>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
}));

export default Item;
