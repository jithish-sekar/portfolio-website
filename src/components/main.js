import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './home';
import Work from './work';
import Who from './who';
import About from './about';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Main = () => (
    <Route render={({location}) => (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade">

                <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/work' component={Work} />
                    <Route path='/who' component={Who} />
                    <Route path='/about' component={About} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )} />

)
export default withRouter(Main);