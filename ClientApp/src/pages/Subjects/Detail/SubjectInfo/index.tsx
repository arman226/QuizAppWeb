import React, { useState } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PRIMARY } from "../../../../Theme/colors";

const SubjectInfo: React.FC = () => {
  const classes = useStyles();
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const handleEditButton = () => {
    setCanEdit(!canEdit);
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Subject Info</Typography>
        <IconButton size="small" onClick={handleEditButton}>
          <Edit className={classes.icon} />
        </IconButton>
      </div>

      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          disabled={canEdit}
          required
          className={classes.subject}
          id="subjectName"
          label="Subject Name"
          variant="outlined"
          size="small"
        />

        <TextField
          disabled={canEdit}
          required
          className={classes.description}
          multiline
          id="description"
          label="Description"
          variant="outlined"
          rows={4}
          size="small"
        />
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
    marginLeft: 15,
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
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    width: "100%",
  },
  subject: {
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

export default SubjectInfo;
