import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects/Index";
import SubjectDetail from "./pages/Subjects/Detail";
import CategoryDetail from "./pages/Category/Detail";
import QuestionDetail from "./pages/Question/Detail";
import CreateQuestion from "./pages/Question/CreateQuestion";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import "./custom.css";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/subject" component={Subjects} />
    <Route path="/subjectDetail" component={SubjectDetail} />
    <Route path="/categoryDetail" component={CategoryDetail} />
    <Route path="/questionDetail" component={QuestionDetail} />
    <Route path="/createQuestion" component={CreateQuestion} />
    <Route path="/counter" component={Counter} />
    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
