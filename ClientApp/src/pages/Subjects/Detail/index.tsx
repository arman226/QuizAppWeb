import React from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SubjectInfo from "./SubjectInfo";
import CategoriesList from "./CategoriesList";
import { Subject } from "../../../modules/subject/types";
import { deactivateSubject } from "../../../modules/subject/api";

const Detail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { subjectId, subject, description } = history.location.state as Subject;

  const deactivate = async () => {
    const { status } = await deactivateSubject(subjectId, 0);
    if (status === 200) {
      history.push("/subject");
    } else {
      alert("Something went wrong. Please try again");
    }
  };

  return (
    <React.Fragment>
      <div className={classes.head}>
        <Typography className={classes.titleText}>Subject Details</Typography>
        <IconButton
          size="small"
          className={classes.iconButton}
          onClick={deactivate}
        >
          <Delete className={classes.icon} />
        </IconButton>
      </div>

      <Grid container>
        <Grid item xs={8} spacing={1}>
          <CategoriesList subjectId={subjectId} />
        </Grid>

        <Grid item xs={3} spacing={1}>
          <SubjectInfo
            subject={subject}
            subjectId={subjectId}
            description={description}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    fontSize: 20,
    color: "#BA000D",
  },
  head: {
    flexDirection: "row",
    display: "flex",
  },
  iconButton: {
    marginLeft: 10,
    padding: 0,
  },
}));

export default Detail;
