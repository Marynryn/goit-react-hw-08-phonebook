import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css';
import { useDispatch } from "react-redux"
import { login } from 'store/operations';


const LoginForm = () => {


    const dispatch = useDispatch();

    const emailId = nanoid();
    const passwordId = nanoid();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        dispatch(login(user));

        form.reset();
    };
    return (

        <div>
            <div className="form">
                <form className={css.form_phonebook}
                    onSubmit={handleSubmit}
                >

                    <label htmlFor={emailId} className={css.label_number}>
                        <h2 className={css.form_number}>Email</h2>
                        <input
                            type="email"
                            name="email"

                            id={emailId}
                            required
                        />
                    </label>
                    <label htmlFor={passwordId} className={css.label_number}>
                        <h2 className={css.form_number}>Password</h2>
                        <input
                            type="text"
                            name="password"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"

                            id={passwordId}
                            required
                        />
                    </label>
                    <button className="button_submit" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>


    )
}

export default LoginForm;