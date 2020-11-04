import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { deactivateCategory } from "../../../modules/category/api";
import CategoryInfo from "./CategoryInfo";
import QuestionList from "./QuestionList";

interface Param {
  categoryId: number;
}
const Detail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { categoryId } = history.location.state as Param;

  const deactivate = async () => {
    const { status, statusText } = await deactivateCategory(categoryId, 0);
    if (status === 200) {
      history.goBack();
    } else {
      alert("Something went wrong. Please try again");
    }
    console.log(statusText);
  };
  return (
    <React.Fragment>
      <div className={classes.head}>
        <Typography className={classes.titleText}>Category Details</Typography>
        <IconButton
          size="small"
          className={classes.iconButton}
          onClick={deactivate}
        >
          <Delete className={classes.icon} />
        </IconButton>
      </div>

      <Grid container>
        <Grid item xs={8}>
          <QuestionList categoryId={categoryId} />
        </Grid>
        <Grid item xs={3}>
          <CategoryInfo categoryId={categoryId} />
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
  icon: {
    fontSize: 20,
    color: "#BA000D",
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  iconButton: {
    marginLeft: 10,
    padding: 0,
  },
}));

export default Detail;
