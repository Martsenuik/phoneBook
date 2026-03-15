export const ContactFilter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Пошук..."
      />
    </div>
  );
};
