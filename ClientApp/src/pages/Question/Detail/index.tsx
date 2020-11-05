import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getQuestionInfoById } from "../../../modules/question/api";
import QuestionInfo from "./QuestionInfo";
import Options from "./Options";
import { Question } from "../../../modules/question/types";

interface Params {
  questionId: number;
}
const Detail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { questionId } = history.location.state as Params;
  const [questionInfo, setQuestionInfo] = useState<Question>({
    questionId,
    questionCode: "",
    title: "",
    question: "",
  } as Question);
  const [questionCode, setQuestionCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    fetchQuestionInfo();
  }, [questionId]);

  const fetchQuestionInfo = async () => {
    const { status, data } = await getQuestionInfoById(questionId);
    if (status === 200) {
      setQuestionInfo(data);
      setQuestionCode(data.questionCode);
      setQuestion(data.question);
      setTitle(data.title);
    }
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={9}>
          <Typography className={classes.titleText}>
            Question Details
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

      <QuestionInfo
        question={question}
        questionCode={questionCode}
        title={title}
        setTitle={setTitle}
        setQuestion={setQuestion}
      />
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
