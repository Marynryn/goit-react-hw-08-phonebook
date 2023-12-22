
import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';
import { useSelector, useDispatch } from "react-redux"
import { selectGetContacts } from 'store/selectors';
import { postContact } from 'store/operations';

export default function Form() {
  const contacts = useSelector(selectGetContacts)
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formatPhone = phone => {
      return phone.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
    };
    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      phone: formatPhone(form.elements.phone.value),
      createAt: nanoid(),
    };
    const isContactExists = contacts.some(
      contact => contact.name === form.elements.name.value
    );
    if (isContactExists) {
      alert(`${form.elements.name.value} is already in contacts.`);
    } else {

      dispatch(postContact(contact));
    }
    form.reset();
  };

  return (
    <div>
      <div className="form">
        <form className={css.form_phonebook}
          onSubmit={handleSubmit}
        >
          <label htmlFor={nameId} className={css.label}>
            <h2 className={css.form_name}>Name</h2>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameId}
            />
          </label>
          <label htmlFor={numberId} className={css.label_number}>
            <h2 className={css.form_number}>Number</h2>
            <input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"

              id={numberId}
              required
            />
          </label>
          <button className="button_submit" type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
}



