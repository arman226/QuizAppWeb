import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PRIMARY } from "../../../../Theme/colors";

interface Props {
  questionCode: string;
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const QuestionInfo: React.FC<Props> = ({
  questionCode,
  question,
  title,
  setQuestion,
  setTitle,
}) => {
  const classes = useStyles();

  const handleTitleChange = (
    event: React.ChangeEvent<{ name?: string; value?: unknown }>
  ) => {
    const value = event.target.value as string;
    setTitle(value);
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<{ name?: string; value?: unknown }>
  ) => {
    const value = event.target.value as string;
    setQuestion(value);
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Question Info</Typography>
      </div>

      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          disabled
          style={{
            marginBottom: 10,
            width: window.innerWidth * 0.3,
          }}
          id="standard-basic"
          label="Question Code"
          value={questionCode}
        />
        <br />
        <TextField
          required
          className={classes.title}
          id="standard-basic"
          label="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <TextField
          required
          className={classes.question}
          multiline
          id="standard-basic"
          label="Question"
          value={question}
          onChange={handleQuestionChange}
        />
        <br />
      </form>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
    width: "100%",
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  icon: {
    fontSize: 18,
    color: PRIMARY,
  },
  question: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    width: "100%",
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 18,
    width: "100%",
  },
  form: {
    // alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default QuestionInfo;
