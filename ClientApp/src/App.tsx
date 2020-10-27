import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects/Index";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

import "./custom.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/subject" component={Subjects} />
    <Route path="/counter" component={Counter} />
    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
