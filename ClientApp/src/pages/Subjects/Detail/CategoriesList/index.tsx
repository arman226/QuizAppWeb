import React, { useEffect, useState } from "react";
import { Typography, Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import Item from "./Item";
import CreateCategory from "../../../Category/Create";
import { PRIMARY } from "../../../../Theme/colors";
import { getCategoriesBySubject } from "../../../../modules/category/api";
import { Category } from "../../../../modules/category/types";

interface Props {
  subjectId: number;
}

const CategoriesList: React.FC<Props> = ({ subjectId }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const { status, data } = await getCategoriesBySubject(subjectId);
    if (status === 200) {
      setCategories(data);
    }
  };

  return (
    <Paper className={classes.container}>
      <CreateCategory isOpen={isOpen} onClose={onClose} subjectId={subjectId} />
      <div className={classes.head}>
        <Typography className={classes.headerText}>Categories</Typography>
        <IconButton size="small" onClick={openModal}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <Grid container className={classes.list}>
        {categories.map(({ category, categoryId, description }, idx) => (
          <Item
            key={idx}
            categoryId={categoryId}
            category={category}
            description={description}
          />
        ))}
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 3,
    marginRight: 5,
  },
  icon: {
    fontSize: 18,
    color: PRIMARY,
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },
  list: {
    width: "100%",
    flex: 1,
  },
}));

export default CategoriesList;
