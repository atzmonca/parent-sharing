import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updatedEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleFormOpen() {

    this.setState({
      isOpen: true
    });
  }

  handleCreateEvent = newEvent => {
    
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };
  handleOpenEvent = eventToOpen => () => {

    

    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    console.log('render ev dashboard this.props: ' , this.props);
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateEvent}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
