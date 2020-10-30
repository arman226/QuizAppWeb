import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Item from "./Item";

const CategoriesList: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <div>
        <Typography className={classes.headerText}>
          Questions{" "}
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
