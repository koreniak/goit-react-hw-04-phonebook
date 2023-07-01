import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { Title } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };
  };

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  };

  addContact = (data) => {
    const newContact = {
      id: nanoid(),
      ...data
    };

    this.setState(({ contacts }) => (
      contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase()) ?
        alert(`${newContact.name} is already in contacts`) :
        {contacts: [...contacts, newContact]}
    ));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          options={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  };
};
