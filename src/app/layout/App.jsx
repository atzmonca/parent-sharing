import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route,Switch } from 'react-router-dom'
import NavBar from "../../features/nav/navBar/NavBar";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/eventDetailedPage/EventDetailedPage";

import EventForm from "../../features/event/eventForm/EventForm";
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard'
import HomePage   from '../../features/home/HomePage'
import UserDetailed  from '../../features/user/userDetailed/UserDetailed'
import SettingsDashboard  from '../../features/user/settings/SettingsDashboard'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={HomePage}/>
          </Switch>

          <Route path="/(.+)"
          render={() =>(
            <div>
            <NavBar />
            <Container className="main">
            <Switch>
           
            <Route path='/events' component={EventDashboard}/>
            <Route path='/event/:id' component={EventDetailedPage}/>
            <Route path='/people' component={PeopleDashboard}/>
            <Route path='/profile/:id' component={UserDetailed}/>
            <Route path='/settings' component={SettingsDashboard}/>
            <Route path='/createEvent' component={EventForm}/>
              </Switch>
         
            </Container>
            </div>
          )}
          />
        
      </div>
    );
  }
}

export default App;
