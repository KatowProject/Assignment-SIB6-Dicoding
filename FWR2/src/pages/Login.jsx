// Di dalam file Login.js
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LangContext from '../contexts/LangContext';
import id from '../i18n/id.json';

const t = {
    id
}

function Login() {
    const { auth } = useContext(AuthContext);
    const { lang } = useContext(LangContext);
    console.log(lang);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate('/dashboard');
        }
    }, [auth, navigate]);

    return <div>
        <h1>
            {t['id'].login_page_title}
        </h1>
    </div>;
}

export default Login;