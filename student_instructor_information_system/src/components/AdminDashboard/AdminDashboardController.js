import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddStudent from './AddStudent';
import AddLecturer from './AddLecturer';
import EditStudent from './EditStudent';
import ViewStudents from './ViewStudents';

const AdminDashboardController = () => (
        <Switch>
            <Route exact path='/' component={ AddStudent } />
            <Route path="/AddStudent" component={ AddStudent } />
            <Route path="/AddLecturer" component={ AddLecturer } />
            <Route path="/ViewStudents" component={ ViewStudents } />
            <Route path="/EditStudent/:id" component={ EditStudent } />
        </Switch>
)

export default AdminDashboardController;
