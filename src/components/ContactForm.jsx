export const ContactForm = ({ name, number, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <p>name</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <p>number</p>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};
