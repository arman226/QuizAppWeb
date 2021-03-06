import React, { useState, Dispatch, ChangeEvent, SetStateAction } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PRIMARY } from "../../../../Theme/colors";

interface Props {
  questionCode: string;
  question: string;
  title: string;
  setQuestion: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
}
const QuestionInfo: React.FC<Props> = ({
  questionCode,
  title,
  question,
  setQuestion,
  setTitle,
}) => {
  const classes = useStyles();
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const handleEditButton = () => {
    setCanEdit(!canEdit);
  };

  const handleChangeQuestion = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setQuestion(value);
  };

  const handleChangeTitle = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setTitle(value);
  };
  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Question Info</Typography>
        <IconButton size="small" onClick={handleEditButton}>
          <Edit className={classes.icon} />
        </IconButton>
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
          disabled={canEdit}
          required
          className={classes.title}
          id="standard-basic"
          label="Title"
          value={title}
          onChange={handleChangeTitle}
        />
        <br />
        <TextField
          disabled={canEdit}
          required
          className={classes.question}
          multiline
          id="standard-basic"
          label="Question"
          value={question}
          onChange={handleChangeQuestion}
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
