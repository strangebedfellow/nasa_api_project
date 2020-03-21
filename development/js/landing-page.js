import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
    Link,
} from 'react-router-dom';

import '../scss/main.scss';
import App from './apod/app';
import ApodHeader from './apod/apod-header';
import ExploreRover from './explore-mars/exploreRover';
import ChooseRover from './explore-mars/chooseRover';
import RoversHeader from './explore-mars/roversHeader';
import TextAnimation from './textAnimation';



class MarsLandingPage extends Component {
    render() {
        return <>
            <RoversHeader />
            <Route exact path="/mars" component={ChooseRover} />
            <Route path='/mars/:roverId' component={ExploreRover} />
        </>
    }
}

class ApodLandingPage extends Component {
    render() {
        return <>
            <ApodHeader />
            <App />
        </>
    }
}

class Navigation extends Component {
    render() {
        return <>
            <section className="content">
                <Link to="/apod">
                    <div className="apod">
                        <h1>astronomy picture of the day</h1>
                    </div>
                </Link>
                <TextAnimation />
                <Link to="/mars">
                    <div className="mars">
                        <h1>explore mars</h1>
                    </div>
                </Link>
            </section>
        </>
    }
}

class LandingPage extends Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path="/" component={Navigation} />
                <Route path='/apod' component={ApodLandingPage} />
                <Route path='/mars' component={MarsLandingPage} />
            </Switch>
        </HashRouter>
    }
}

ReactDOM.render(<LandingPage />, document.getElementById("app"));