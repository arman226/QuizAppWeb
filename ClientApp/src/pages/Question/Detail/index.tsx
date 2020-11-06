import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  deactivateQuestion,
  getQuestionInfoById,
  updateQuestion,
} from "../../../modules/question/api";
import QuestionInfo from "./QuestionInfo";
import Options from "../CreateQuestion/Options";
import { ApiParams, Question } from "../../../modules/question/types";
import { Option } from "../../../modules/option/types";
import { getOptionsBySubjectCode } from "../../../modules/option/api";
import { arrayEquals } from "../../../helpers/array.helper";

interface Params {
  questionId: number;
  categoryId: number;
}
const Detail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { questionId, categoryId } = history.location.state as Params;
  const [questionInfo, setQuestionInfo] = useState<ApiParams>({
    questionCode: "",
    title: "",
    question: "",
    userId: 0,
    categoryId,
    options: [],
  });
  const [questionCode, setQuestionCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetchQuestionInfo();
  }, [questionId]);

  const fetchQuestionInfo = async () => {
    const { status, data } = await getQuestionInfoById(questionId);
    if (status === 200) {
      const tempQuestionInfo = questionInfo;
      tempQuestionInfo.title = data.title;
      tempQuestionInfo.question = data.question;
      tempQuestionInfo.questionCode = data.questionCode;

      setQuestionInfo(tempQuestionInfo);
      setQuestionCode(data.questionCode);
      setQuestion(data.question);
      setTitle(data.title);
      fetchOptions(data.questionCode);
    }
  };

  const fetchOptions = async (subjectCode: string) => {
    const { status, data } = await getOptionsBySubjectCode(subjectCode);
    if (status === 200) {
      const tempQuestionInfo = questionInfo;
      tempQuestionInfo.options = data;
      setQuestionInfo(tempQuestionInfo);
      setOptions(data);
    } else {
    }
  };

  const handleSubmit = async () => {
    if (question != "" && title != "" && options.length > 0) {
      const param = {
        question,
        questionCode,
        title,
        categoryId,
        userId: 0,
        options,
      } as ApiParams;

      alert(
        JSON.stringify(param.options) +
          "?" +
          JSON.stringify(questionInfo.options)
      );
      const areOptionsEqual = arrayEquals(param.options, questionInfo.options);

      if (
        areOptionsEqual &&
        question === questionInfo.question &&
        title === questionInfo.title
      ) {
        alert("You did not change anything");
        // history.goBack();
      } else {
        const { status } = await updateQuestion(param);
        if (status === 200) {
          history.goBack();
        }
      }
    } else {
      alert(
        "Please fill out all required fields and make it sure that you added options to choose from"
      );
    }
  };

  const deleteQuestion = async () => {
    const { status } = await deactivateQuestion(questionCode);
    if (status === 200) {
      history.goBack();
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
          <Button size="small" color="primary" onClick={handleSubmit}>
            Save
          </Button>

          <Button size="small" color="secondary" onClick={deleteQuestion}>
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
      <Options
        questionCode={questionCode}
        option={options}
        setOptions={setOptions}
      />
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
