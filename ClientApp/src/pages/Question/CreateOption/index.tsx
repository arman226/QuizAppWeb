import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Typography,
  Modal,
  Card,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Option } from "../../../modules/option/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  options: Option[];
  setOptions: Dispatch<SetStateAction<Option[]>>;
  questionCode: string;
}
const CreateOption: React.FC<Props> = ({
  isOpen,
  onClose,
  setOptions,
  options,
  questionCode,
}) => {
  const classes = useStyles();
  const [optionName, setOptionName] = useState<string>("");
  const handleOptionChange = (
    event: React.ChangeEvent<{ name?: string; value?: unknown }>
  ) => {
    const value = event.target.value as string;
    setOptionName(value);
  };

  const create = () => {
    let option = {
      questionCode,
      optionName,
      isCorrectAnswer: 0,
    };

    let tempOptions = options;
    tempOptions.push(option);
    setOptions(tempOptions);

    onClose();
    setOptionName("");
  };

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
            value={optionName}
            onChange={handleOptionChange}
          />
          <br />
        </form>

        <div>
          <Button color="primary" className={classes.button} onClick={create}>
            Create
          </Button>
          <Button className={classes.button} onClick={onClose}>
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
  textField: {
    marginBottom: 10,
    width: window.innerWidth * 0.3,
  },
  button: {
    margin: 10,
  },
}));

export default CreateOption;
