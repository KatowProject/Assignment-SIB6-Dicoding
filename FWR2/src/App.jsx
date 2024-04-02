import { useState, useEffect, useMemo } from 'react';
import useTheme from './hooks/useTheme';
import AuthContext from './contexts/AuthContext';
import LangContext from './contexts/LangContext';
import ThemeContext from './contexts/ThemeContext';
import { getUserLogged } from './utils/network-data';

function App() {
  const [auth, setAuth] = useState(null);
  const [lang, setLang] = useState('gb');
  const [theme, changeTheme] = useTheme();
  const [loading, setLoading] = useState(true);


  const langValue = useMemo(() => ({ lang, setLang }), [lang]);
  const authValue = useMemo(() => ({ auth, setAuth }), [auth]);
  const themeValue = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

  useEffect(() => {
    async function load() {
      try {
        const Login = await getUserLogged();
        if (Login.error)
          setAuth(false);
        else
          setAuth(Login.data);

        // initialize locale
        const locale = localStorage.getItem('locale');
        if (locale) setLang(locale);

      } catch (error) {
        alert('Error loading data');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <LangContext.Provider value={langValue}>
      <ThemeContext.Provider value={themeValue}>
        <AuthContext.Provider value={authValue}>
          <div className='app-container'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <h1>App</h1>
                <div>
                  <button onClick={() => setLang('id')}>ID</button>
                  <button onClick={() => setLang('gb')}>GB</button>
                </div>
                <div>
                  <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
                </div>
                <div>
                  <button onClick={() => setAuth(!auth)}>Toggle Auth</button>
                </div>
              </>
            )}
          </div>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
