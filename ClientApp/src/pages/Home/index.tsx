import * as React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
}));

export default connect()(Home);
