import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomeHandler';
import LoginPage from './LoginPage/LoginPageHandler';
import StudentPage from './StudentDashboard/StudentDashboardHandler';
import AdminPage from './AdminDashboard/AdminDashboardHandler';
import AddAssignment from './LecturerDashboard/AddAssignment';
import AddQuestion from './LecturerDashboard/AddQuestion';
import onlineExam from './LecturerDashboard/OnlineExam';
import onlineExamStudent from './StudentDashboard/OnlineExam';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/StudentPage" component={StudentPage} />
        <Route path="/AdminPage" component={AdminPage} />
        <Route path="/AddAssignment" component={AddAssignment} />
        <Route path="/AddQuestion" component={AddQuestion} />
        <Route path="/onlineExam" component={onlineExam} />
        <Route path="/onlineExamStudent" component={onlineExamStudent} />

    </Switch>
);

export default Main;