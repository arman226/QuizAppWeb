import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Box, Card, ButtonBase } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Category } from "../../../../../modules/category/types";
import { PRIMARY } from "../../../../../Theme/colors";

const Item: React.FC<Category> = ({ categoryId, category, description }) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToDetail = () => {
    history.push({
      pathname: "/categoryDetail",
      state: { categoryId },
    });
  };

  return (
    <Grid item xs={4}>
      <Box borderLeft={2} borderRadius={4} borderColor={PRIMARY}>
        <Card className={classes.card}>
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
      </Box>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  card: {
    marginTop: 10,
    marginRight: 20,
    borderLeft: 3,
    borderColor: "red",
    borderWidth: 2,
    display: "flex",
    height: "100%",
  },
}));

export default Item;
