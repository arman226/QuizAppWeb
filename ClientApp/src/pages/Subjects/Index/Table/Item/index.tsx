import React from "react";
import { Button, Typography, Grid, GridSpacing } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Subject } from "../../../../../modules/subject/types";
import { deactivateSubject } from "../../../../../modules/subject/api";

const Item: React.FC<Subject> = ({ subjectId, subject, description }) => {
  const classes = useStyles();

  const deleteSubject = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this item?")) {
        const response = await deactivateSubject(subjectId, 0);
        if (response.status === 200) {
          window.location.reload(false);
        } else {
          alert("Something went wrong. Please try Again");
        }
      }
    } catch (e) {
      alert(e.error);
    }
  };
  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography className={classes.headerText}>{subjectId}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.headerText}>{subject}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.headerText}>{description}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button size="small" variant="contained" color="primary">
          Edit
        </Button>
        <Button
          onClick={deleteSubject}
          size="small"
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

export default Item;
