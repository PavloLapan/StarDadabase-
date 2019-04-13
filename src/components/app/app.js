import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import {PeoplePage, PlanetsPage, StarshipsPage, Login, Secret, Describe} from '../pages';
import {SwapiServiceProvider} from '../swapi-service-context';

import './app.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StarshipDetails from "../sw-components/starship-details";
import ErrorIndicator from "../error-indicator/error-indicator";



export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };



    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    render() {
        const {isLoggedIn} = this.state;
        console.log(Describe);
        return (

            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <ErrorBoundry>
                            <Switch>
                                <Route path='/' component={Describe} exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetsPage}/>
                                <Route path="/starships" exact component={StarshipsPage}/>
                                <Route path="/starships/:id"
                                       render={({match, locatoin, history}) => {
                                           const {id} = match.params;
                                           console.log(match);
                                           return (<StarshipDetails itemId={id}/>)
                                       }
                                       }/>

                                <Route path='/login' render={() => {
                                    return (<Login isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)
                                }}/>
                                <Route path='/secret' render={() => {
                                    return (<Secret isLoggedIn={isLoggedIn}/>)
                                }}/>
                                {/*<Redirect to='/'/>*/}
                                <Route render={() => {
                                    return (
                                        <div className='jumbotron text-center'>
                                            <h2 className='text-warning'>Error 404 - file not found</h2>
                                            <ErrorIndicator/>
                                        </div>
                                    )
                                }}/>
                            </Switch>
                        </ErrorBoundry>

                    </div>
                </Router>
            </SwapiServiceProvider>

        );
    }
}
