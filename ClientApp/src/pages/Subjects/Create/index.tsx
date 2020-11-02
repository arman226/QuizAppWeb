import React from "react";
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SubjectCategory: React.FC<Props> = ({ isOpen, onClose }) => {
  const classes = useStyles();

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
              className={classes.textField}
              inputProps={{ maxLength: 40 }}
              id="standard-basic"
              label="Subject"
            />
            <br />
            <TextField
              className={classes.textField}
              multiline
              inputProps={{ maxLength: 180 }}
              id="standard-basic"
              label="Description"
            />
            <br />
          </form>

          <div>
            <Button color="primary" className={classes.button}>
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
