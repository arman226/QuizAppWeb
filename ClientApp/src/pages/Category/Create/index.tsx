import React, { useState } from "react";
import {
  Typography,
  Modal,
  Card,
  TextField,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { createCategory } from "../../../modules/category/api";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  subjectId: number;
}
const CreateCategory: React.FC<Props> = ({ isOpen, onClose, subjectId }) => {
  const classes = useStyles();
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleCategoryChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setCategory(value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setDescription(value);
  };

  const onSubmit = async () => {
    if (!category || !description) {
      alert("Please fill the required fields out.");
    } else {
      const { status } = await createCategory(
        subjectId,
        category,
        description,
        0
      );
      if (status === 200) {
        window.location.reload();
      } else {
        alert("Something went wrong. Please Try Again");
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
            Create Category
          </Typography>
          <Divider />
          <form noValidate autoComplete="off">
            <TextField
              className={classes.textField}
              inputProps={{ maxLength: 40 }}
              id="category"
              label="Category"
              value={category}
              onChange={handleCategoryChange}
            />
            <br />
            <TextField
              className={classes.textField}
              multiline
              inputProps={{ maxLength: 180 }}
              id="description"
              label="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <br />
          </form>

          <div>
            <Button
              color="primary"
              className={classes.button}
              onClick={onSubmit}
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
  },
  textField: {
    marginBottom: 10,
    width: window.innerWidth * 0.3,
  },
  button: {
    margin: 10,
  },
}));

export default CreateCategory;
