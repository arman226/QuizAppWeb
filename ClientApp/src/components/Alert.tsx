import React from "react";
import { Typography, Modal, Card, Button, Divider } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  title: string;
  message: string;
  onOkay: () => void;
  onCancel: () => void;
  isOpen: boolean;
}
const Alert: React.FC<Props> = ({
  title,
  message,
  onOkay,
  onCancel,
  isOpen,
}) => {
  const classes = useStyles();

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={isOpen}
      onClose={onCancel}
    >
      <Card className={classes.modal}>
        <Typography align="center" className={classes.header}>
          {title}
        </Typography>
        <Divider />

        <Typography align="center">{message}</Typography>

        <div>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => {
              onOkay();
            }}
          >
            Okay
          </Button>

          <Button
            className={classes.button}
            onClick={() => {
              onCancel();
            }}
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
    padding: 20,
    flexDirection: "column",
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
  },
  button: {
    margin: 10,
  },
}));

export default Alert;
