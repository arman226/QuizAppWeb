import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { getQuestionCode } from "../../../modules/question/api";
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
  const [options, setOptions] = useState([]);
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
        questionCode={questionCode}
        question={question}
        setQuestion={setQuestion}
        title={title}
        setTitle={setTitle}
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
