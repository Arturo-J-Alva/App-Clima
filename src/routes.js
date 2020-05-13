import React, { Component } from 'react'
import { BrowserRouter, Route, Switch/* , Redirect  */} from "react-router-dom"


import Home from './pages/home'
import Error404 from './pages/404'
import Coords from './pages/coords'
import Ciudad from './pages/ciudad'

import ScrollToTop from './globalComponents/ScrollToTop'

import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions'

import Global from './services/Global'

const { SaveLogin } = loginActions


class Routes extends Component {
    API = Global.API

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/map" component={Coords} />
                    <Route exact path="/ciudad" component={Ciudad} />
                    
                    <Route component={Error404} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = ({ auxReducer, loginReducer, dataUserReducer }) => {
    return { auxReducer, loginReducer, dataUserReducer }
}

const mapDispatchToProps = {
    SaveLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)