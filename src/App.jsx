import { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
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

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
