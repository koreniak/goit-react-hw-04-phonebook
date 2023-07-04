import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useMemo, useState } from 'react';
import { Title } from "./App.styled";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data
    };

    contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase()) ?
      toast.error(`${newContact.name} is already in contacts`) :
      setContacts(prevState => [...prevState, newContact]);
  };
// `${newContact.name} is already in contacts`
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />
      <Title>Contacts</Title>
      <Filter
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ContactList
        options={getFilteredContacts}
        onDeleteContact={contactId => setContacts(prevState => prevState.filter(contact => contact.id !== contactId))}
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
