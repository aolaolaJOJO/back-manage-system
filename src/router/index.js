import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Admin from '../admin'
import Login from '../pages/login'
import menuList from './menuConfig'
import AuthRouter from '../component/authRouter'
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthRouter></AuthRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" render={()=>
                                <Admin>
                                    {menuList.map(v =>(
                                        <Route key={v.path} path={v.path} component={v.component}></Route>
                                    ))}
                                </Admin>
                            }></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}