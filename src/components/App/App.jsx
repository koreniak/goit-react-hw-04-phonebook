import { nanoid } from 'nanoid';
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { Title } from "./App.styled";
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data
    };

    setContacts(prevState => prevState.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase()) ?
      alert(`${newContact.name} is already in contacts`) :
      [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => setFilter(e.target.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
        <Title>Contacts</Title>
        <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList
          options={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
};
