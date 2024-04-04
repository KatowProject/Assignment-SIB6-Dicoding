import { useContext } from 'react';
import LangContext from '../contexts/LangContext';
import AuthContext from '../contexts/AuthContext';
import useInput from '../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import id from '../i18n/id.json';
import gb from '../i18n/gb.json';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';

const t = {
    id,
    gb
}

function Login() {
    const { setAuth } = useContext(AuthContext);
    const { lang } = useContext(LangContext);
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login({ email, password });
            if (response.error) return alert(response.message);

            putAccessToken(response.data.accessToken);

            const user = await getUserLogged();
            if (user.error)
                setAuth(false)
            else
                setAuth(user.data);

            navigate('/');
        } catch (error) {
            alert(t[lang].error.server);
        }
    }

    return (
        <>
            <section className='login-page'>
                <form className='input-login' onSubmit={handleSubmit}>
                    <h2>{t[lang].login.title}</h2>
                    <div className='input-login'>
                        <label htmlFor='email'>{t[lang].login.email}</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            minLength={5}
                            maxLength={50}
                            onChange={onEmailChange}
                            required
                        />
                        <label htmlFor='passowrd'>{t[lang].login.password}</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            minLength={8}
                            maxLength={50}
                            onChange={onPasswordChange}
                        />
                        <button type='submit'>{t[lang].login.buttonSubmit}</button>
                    </div>
                </form>

                <p>{t[lang].login.desc}
                    <Link to="/auth/register">{t[lang].login.buttonRegister}</Link>
                </p>
            </section>
        </>
    );
}

export default Login;