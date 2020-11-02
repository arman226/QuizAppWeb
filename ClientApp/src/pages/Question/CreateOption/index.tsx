import React from "react";
import {
  Typography,
  Modal,
  Card,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const CreateOption: React.FC<Props> = ({ isOpen, onClose }) => {
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
          Create Option
        </Typography>
        <Divider />
        <form noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            inputProps={{ maxLength: 40 }}
            id="standard-basic"
            label="Option"
          />
          <br />
        </form>

        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </Card>
    </Modal>
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
    padding: 10,
    flexDirection: "column",
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
  },
  textField: {
    marginBottom: 10,
    width: window.innerWidth * 0.3,
  },
  button: {
    margin: 10,
  },
}));

export default CreateOption;
