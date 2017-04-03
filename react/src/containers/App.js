import React, { Component } from 'react';

import event from '../constants/event';
import LandingPage from '../components/LandingPage';
import RegistrantList from './RegistrantList'
import RegistrationForm from './RegistrationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null,
      messages: {}
    }
    this.addMessage = this.addMessage.bind(this);
    this.clearMessages = this.clearMessages.bind(this);
    this.displayLandingPage = this.displayLandingPage.bind(this);
    this.displayRegistrants = this.displayRegistrants.bind(this);
    this.displayRegistration = this.displayRegistration.bind(this);
  }

  addMessage(message) {
    let newMessageState = Object.assign(this.state.messages, message)
    this.setState({messages: newMessageState})
  }

  clearMessages() {
    this.setState({messages: {}})
  }

  displayLandingPage() {
    this.setState({display: null})
  }

  displayRegistrants() {
    this.clearMessages()
    this.setState({display: 'registrants'})
  }

  displayRegistration() {
    this.clearMessages()
    this.setState({display: 'registration'})
  }

  render() {
    let displayedPage;
    let messageDiv;
    let messages;

    switch (this.state.display) {
      case 'registration':
        displayedPage = <RegistrationForm eventName={event.name} flashMessage={this.addMessage} homeLink={this.displayLandingPage} />
        break;
      case 'registrants':
        displayedPage = <RegistrantList eventName={event.name} homeLink={this.displayLandingPage} />
        break
      default:
        displayedPage = <LandingPage event={event} registrantsLink={this.displayRegistrants} registrationLink={this.displayRegistration}/>
    }

    if (Object.keys(this.state.messages).length > 0) {
      messages = Object.keys(this.state.messages).map(messageKey => {
        return(<li key={messageKey}><strong>{messageKey}:</strong>&nbsp;{this.state.messages[messageKey]}</li>)
      })
      messageDiv = <div>{messages}</div>
    }

    return(
      <div>
        {messageDiv}
        {displayedPage}
      </div>
    );
  }
}

export default App;
