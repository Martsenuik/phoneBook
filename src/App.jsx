import { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");

    if (contacts) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addContact = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      name: this.state.name,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          name={this.state.name}
          onChange={this.handleChange}
          onSubmit={this.addContact}
        />

        <h2>Contacts</h2>

        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
