import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInput = e => {
    this.setState({
      name: e.currentTarget.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ name: '', });
  }

  render() {
    const { contacts, name } = this.state;

    return (
      <div className={s.Container}>
        <h1 className={s.PhonebookTitle}>Phonebook</h1>
        <ContactForm
          name={name}
          onInput={this.handleInput}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    )
  }
}
