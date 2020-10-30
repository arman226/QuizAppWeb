import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Item from "./Item";
import CreateCategory from "../../../Category/Create";

const CategoriesList: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <CreateCategory isOpen={isOpen} onClose={onClose} />
      <div>
        <Typography className={classes.headerText}>
          Categories{" "}
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            +
          </Button>
        </Typography>
      </div>
      <Grid container>
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
        <Item categoryId={0} category={"test"} description="none" />
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 3,
  },
}));

export default CategoriesList;
