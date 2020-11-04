import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import Item from "./Item";
import { PRIMARY } from "../../../../Theme/colors";
import { getQuestionsByCategory } from "../../../../modules/question/api";
import { Question } from "../../../../modules/question/types";

interface Props {
  categoryId: number;
}
const CategoriesList: React.FC<Props> = ({ categoryId }) => {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const onClose = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const getQuestions = async () => {
    const { data, status } = await getQuestionsByCategory(categoryId);
    if (status === 200) {
      setQuestions(data);
    }
  };

  const navigateToQuestionCreation = () => {
    history.push({
      pathname: "/createQuestion",
      state: { categoryId },
    });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Questions</Typography>
        <IconButton size="small" onClick={navigateToQuestionCreation}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <Grid container className={classes.list}>
        {questions.map(({ questionId, questionCode, question, title }) => (
          <Item
            questionId={questionId}
            questionCode={questionCode}
            question={question}
            title={title}
          />
        ))}
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 3,
  },
  icon: {
    fontSize: 18,
    color: PRIMARY,
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },
  list: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
}));

export default CategoriesList;
