import React, { useState } from "react";
import { Typography, Grid, Button, Paper, IconButton } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import Item from "./Item";
import { PRIMARY } from "../../../../Theme/colors";

const CategoriesList: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.headerText}>Questions</Typography>
        <IconButton size="small" onClick={openModal}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <Grid container className={classes.list}>
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
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
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
}));

export default CategoriesList;
