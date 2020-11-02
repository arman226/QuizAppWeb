import React from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PRIMARY } from "../../../../Theme/colors";

const SubjectInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Subject Info</Typography>
        <IconButton size="small">
          <Edit className={classes.icon} />
        </IconButton>
      </div>

      <form noValidate autoComplete="off" className={classes.form}>
        <Typography>Subject</Typography>
        <TextField
          required
          className={classes.subject}
          id="subjectName"
          placeholder="Subject Name"
          variant="outlined"
        />
        {/* <br /> */}
        <Typography>Description</Typography>
        <TextField
          className={classes.description}
          multiline
          id="description"
          placeholder="Description"
          variant="outlined"
          rows={4}
        />

        {/* <br /> */}
      </form>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 5,
  },
  icon: {
    fontSize: 18,
    color: PRIMARY,
  },
  description: {
    marginBottom: 10,
    fontSize: 18,
    width: "80%",
  },
  subject: {
    marginBottom: 10,
    fontSize: 18,
    width: "80%",
  },
  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default SubjectInfo;
