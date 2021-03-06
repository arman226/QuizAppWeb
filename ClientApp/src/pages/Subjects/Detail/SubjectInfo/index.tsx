import React, { useState, useEffect } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { Edit, Save } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { PRIMARY } from "../../../../Theme/colors";
import { Subject } from "../../../../modules/subject/types";
import { getSubjectById, updateSubject } from "../../../../modules/subject/api";

const SubjectInfo: React.FC<Subject> = ({
  subject,
  subjectId,
  description,
}) => {
  const classes = useStyles();
  const [disabledSave, setDisabledSave] = useState<boolean>(true);
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const [sub, setSub] = useState<Subject>({
    subjectId,
    subject: "",
    description: "",
  });
  const [tempSubject, setTempSubject] = useState<string>("");
  const [tempDescription, setTempDescription] = useState<string>("");

  const handleEditButton = () => {
    setCanEdit(!canEdit);
  };

  const handleSubjectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setTempSubject(value);
    if (sub.description != tempDescription || sub.subject != value) {
      setDisabledSave(false);
    } else {
      setDisabledSave(true);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setTempDescription(value);
    if (sub.description != value || sub.subject != tempSubject) {
      setDisabledSave(false);
    } else {
      setDisabledSave(true);
    }
  };

  const fetchInfo = async () => {
    const { status, data } = await getSubjectById(subjectId);
    if (status === 200) {
      setSub(data);
      setTempSubject(data.subject);
      setTempDescription(data.description);
    }
  };

  const handleSubmit = async () => {
    const { status } = await updateSubject(
      subjectId,
      tempSubject,
      tempDescription,
      0
    );
    if (status === 200) {
      setCanEdit(true);
      setDisabledSave(true);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Subject Info</Typography>

        <IconButton size="small" onClick={handleEditButton}>
          <Edit
            className={classes.icon}
            style={{ color: canEdit && PRIMARY }}
          />
        </IconButton>

        <IconButton size="small" disabled={disabledSave} onClick={handleSubmit}>
          <Save
            className={classes.icon}
            style={{ color: !disabledSave && PRIMARY }}
          />
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
          value={tempSubject}
          onChange={handleSubjectChange}
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
          value={tempDescription}
          onChange={handleDescriptionChange}
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
