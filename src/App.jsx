import { useState, useEffect } from "react";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import { ContactFilter } from "./components/ContactFilter";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const addContact = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, number };
    setContacts((prev) => [...prev, newContact]);
    setName("");
    setNumber("");
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onChange={handleChange}
        onSubmit={addContact}
      />
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
