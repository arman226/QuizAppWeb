import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Card, ButtonBase, Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Question } from "../../../../../modules/question/types";
import { PRIMARY } from "../../../../../Theme/colors";

interface Props {
  questionId: number;
  categoryId: number;
  title: string;
  question: string;
  questionCode: string;
}

const Item: React.FC<Props> = ({
  questionId,
  questionCode,
  title,
  question,
  categoryId,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToDetail = () => {
    history.push({
      pathname: "/questionDetail",
      state: { questionId, categoryId },
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
            <Typography className={classes.title}>{title}</Typography>

            <Typography className={classes.description}>{question}</Typography>
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
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
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
  title: {
    fontWeight: "bold",
  },
  description: {
    color: "#C6C6C6",
  },
}));

export default Item;
