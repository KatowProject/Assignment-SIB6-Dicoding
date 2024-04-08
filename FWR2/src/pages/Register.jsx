import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import LangContext from "../contexts/LangContext";
import id from '../i18n/id.json';
import gb from '../i18n/gb.json';
import { register } from "../utils/network-data";
import HomepageAction from "../components/actions/homePage";

const t = {
    id,
    gb
}

export default function Register() {
    const { lang } = useContext(LangContext);
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [passwordConfirmation, onPasswordConfirmationChange] = useInput('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        /* Validate input */
        if (password !== passwordConfirmation) return alert(t[lang].error.passwordNotMatch);

        /* Register */
        try {
            const response = await register({ name, email, password });
            if (response.error) return alert(t[lang].error.server);

            alert(t[lang].success.register);

            navigate('/auth/login');
        } catch (error) {
            alert(t[lang].error.server);
        }
    }

    return (
        <>
            <section className='register-page'>
                <h2>{t[lang].register.title}</h2>

                <form className='input-register' onSubmit={handleSubmit}>
                    <label htmlFor='name'>{t[lang].register.name}</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        minLength={3}
                        maxLength={50}
                        onChange={onNameChange}
                        required
                    />

                    <label htmlFor='email'>{t[lang].register.email}</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        minLength={5}
                        maxLength={50}
                        onChange={onEmailChange}
                        required
                    />

                    <label htmlFor='password'>{t[lang].register.password}</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        minLength={8}
                        maxLength={50}
                        onChange={onPasswordChange}
                        required
                    />

                    <label htmlFor='password-confirmation'>{t[lang].register.passwordConfirmation}</label>
                    <input
                        type='password'
                        id='password-confirmation'
                        value={passwordConfirmation}
                        minLength={8}
                        maxLength={50}
                        onChange={onPasswordConfirmationChange}
                        required
                    />

                    <button type='submit'>{t[lang].register.buttonSubmit}</button>
                    <Link to='/auth/login'>{t[lang].register.login}</Link>
                </form>

                <p>{t[lang].register.desc}
                    <Link to="/auth/login">{t[lang].register.buttonLogin}</Link>
                </p>
            </section>

            <HomepageAction />
        </>
    );
}