import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import Admin from '../admin'
import AuthRouter from '../component/authRouter'

import Login from '../pages/login'
import Register from '../pages/register'
import Index from '../pages/index'
import User from '../pages/user'

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthRouter></AuthRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/admin" render={()=>
                                <Admin>
                                    <Route path='/admin/index' component={Index}></Route>
                                    <Route path='/admin/user' component={User}></Route>
                                </Admin>
                            }></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}