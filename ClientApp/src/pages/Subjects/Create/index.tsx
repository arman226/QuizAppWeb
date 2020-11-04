import React, { useState } from "react";
import {
  Typography,
  Modal,
  Card,
  TextField,
  Button,
  Divider,
  Box,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import useFetch from "../../../hooks/useFetch";
import { Subject } from "../../../modules/subject/types";
import { createSubject } from "../../../modules/subject/api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SubjectCategory: React.FC<Props> = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubjectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setSubject(value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setDescription(value);
  };

  const handleSubmit = async () => {
    //validate
    if (!subject || !description) {
      alert("Please fill the required fields out");
    } else {
      const { status } = await createSubject(subject, description, 0);
      if (status === 200) {
        window.location.reload();
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Box boxShadow={3}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={isOpen}
        onClose={onClose}
      >
        <Card className={classes.modal}>
          <Typography align="center" className={classes.header}>
            Create Subject
          </Typography>
          <Divider />
          <form noValidate autoComplete="off">
            <TextField
              required
              onChange={handleSubjectChange}
              className={classes.textField}
              inputProps={{ maxLength: 40 }}
              id="subject"
              label="Subject"
              value={subject}
            />
            <br />
            <TextField
              required
              onChange={handleDescriptionChange}
              className={classes.textField}
              multiline
              inputProps={{ maxLength: 180 }}
              id="description"
              label="Description"
              value={description}
            />
            <br />
          </form>

          <div>
            <Button
              color="primary"
              onClick={handleSubmit}
              className={classes.button}
            >
              Create
            </Button>
            <Button className={classes.button} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </Card>
      </Modal>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "absolute",
    top: window.innerHeight * 0.2,
    left: window.innerWidth * 0.33,
    width: window.innerWidth * 0.35,
    alignItems: "center",
    display: "flex",
    padding: 20,
    flexDirection: "column",
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 20,
  },
  textField: {
    marginBottom: 15,
    width: window.innerWidth * 0.3,
  },
  button: {
    margin: 10,
  },
}));

export default SubjectCategory;
