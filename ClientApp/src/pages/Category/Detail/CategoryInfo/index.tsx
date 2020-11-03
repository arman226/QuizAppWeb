import React, { useState } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Edit } from "@material-ui/icons";
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
        <Typography className={classes.headerText}>Category Info</Typography>
        <IconButton size="small" onClick={handleEditButton}>
          <Edit className={classes.icon} />
        </IconButton>
      </div>

      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          disabled={canEdit}
          required
          className={classes.category}
          variant="outlined"
          id="standard-basic"
          label="Category"
        />

        <TextField
          disabled={canEdit}
          required
          variant="outlined"
          rows={4}
          className={classes.description}
          multiline
          id="standard-basic"
          label="Description"
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
  category: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 18,
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default SubjectInfo;
