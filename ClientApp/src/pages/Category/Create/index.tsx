import React from "react";
import { Typography, Modal, Card, TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const CreateCategory: React.FC<Props> = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={isOpen}
      onClose={onClose}
    >
      <Card className={classes.modal}>
        <Typography align="center" className={classes.header}>
          Create Category
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            id="standard-basic"
            label="Subject Name"
          />
          <br />
          <TextField
            className={classes.textField}
            multiline
            id="standard-basic"
            label="Description"
          />
          <br />
        </form>
      </Card>
    </Modal>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "absolute",
    top: window.innerHeight * 0.1,
    left: window.innerWidth * 0.25,
    width: window.innerWidth * 0.5,
    justifyItems: "center",
    padding: 10,
  },
  header: {
    fontWeight: "bold",
  },
  textField: {
    marginBottom: 10,
    width: window.innerWidth * 0.3,
  },
}));

export default CreateCategory;
