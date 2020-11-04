import React, { useState, useEffect } from "react";
import { Typography, TextField, IconButton, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Edit, Save } from "@material-ui/icons";
import { PRIMARY } from "../../../../Theme/colors";
import { Category } from "../../../../modules/category/types";
import {
  getCategoryById,
  updateCategory,
} from "../../../../modules/category/api";

interface Props {
  categoryId: number;
}
const CategoryInfo: React.FC<Props> = ({ categoryId }) => {
  const classes = useStyles();
  const [disabledSave, setDisabledSave] = useState<boolean>(true);
  const [canEdit, setCanEdit] = useState<boolean>(true);
  const [categoryModel, setCategoryModel] = useState<Category>({
    categoryId,
    category: "",
    description: "",
  });
  const [tempCategory, setTempCategory] = useState<string>("");
  const [tempDescription, setTempDescription] = useState<string>("");

  const handleEditButton = () => {
    setCanEdit(!canEdit);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setTempCategory(value);
    if (
      categoryModel.description != tempDescription ||
      categoryModel.category != value
    ) {
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
    if (
      categoryModel.description != value ||
      categoryModel.category != tempCategory
    ) {
      setDisabledSave(false);
    } else {
      setDisabledSave(true);
    }
  };

  const fetchInfo = async () => {
    const { status, data } = await getCategoryById(categoryId);
    if (status === 200) {
      setCategoryModel(data);
      setTempCategory(data.category);
      setTempDescription(data.description);
    } else {
      console.log(status);
    }
  };

  const handleSubmit = async () => {
    const { status } = await updateCategory(
      categoryId,
      tempCategory,
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
        <Typography className={classes.headerText}>Category Info</Typography>
        <IconButton size="small" onClick={handleEditButton}>
          <Edit
            className={classes.icon}
            style={{ color: !disabledSave && PRIMARY }}
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
          className={classes.category}
          variant="outlined"
          id="standard-basic"
          label="Category"
          value={tempCategory}
          onChange={handleCategoryChange}
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

export default CategoryInfo;
