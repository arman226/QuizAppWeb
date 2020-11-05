import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getQuestionCode, createQuestion } from "../../../modules/question/api";
import { ApiParams } from "../../../modules/question/types";
import { Option } from "../../../modules/option/types";
import QuestionInfo from "./QuestionInfo";
import Options from "./Options";

interface Params {
  categoryId: number;
}
const Detail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [questionCode, setQuestionCode] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);
  const { categoryId } = history.location.state as Params;

  useEffect(() => {
    fetchQuestionCode();
  }, []);

  const fetchQuestionCode = async () => {
    const { status, data } = await getQuestionCode(categoryId);
    if (status === 200) {
      setQuestionCode(data);
    }
  };

  const handleCancel = () => {
    history.goBack();
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
      console.log(param);
      const { status, statusText, request } = await createQuestion(param);
      if (status === 200) {
        history.goBack();
      }
      console.log(request + "" + statusText);
    } else {
      alert(
        "Please fill out all required fields and make it sure that you added options to choose from"
      );
    }
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={10}>
          <Typography className={classes.titleText}>
            Question Details
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Button size="small" color="primary" onClick={handleSubmit}>
            Save
          </Button>

          <Button size="small" onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>

      <QuestionInfo
        questionCode={questionCode}
        question={question}
        setQuestion={setQuestion}
        title={title}
        setTitle={setTitle}
      />
      <Options
        option={options}
        setOptions={setOptions}
        questionCode={questionCode}
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
