import React, { Component } from 'react'
import EventListItem  from './EventListItem'

 class EventList extends Component {
  render() {
    console.log('ev list render props: ', this.props);
    
      const {events} = this.props;
    return (
      <div>
      
          {events.map((event)=>(
            <EventListItem event={event} key={event.id} />
          ))}
        
        
      </div>
    )
  }
}
export default EventList