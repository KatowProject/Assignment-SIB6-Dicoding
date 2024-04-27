import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import LangContext from './contexts/LangContext';
import ThemeContext from './contexts/ThemeContext';

import useTheme from './hooks/useTheme';

import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';

import Login from './pages/Login';
import Register from './pages/Register';

import { getUserLogged } from './utils/network-data';
import LoadingIndicator from './components/actions/loadingIndicator';
import NotesPage from './pages/Notes';
import DetailNote from './pages/Detail';
import NotFound from './pages/NotFound';
import AddNote from './pages/AddNote';
import ArchiveNotesPage from './pages/Archived';

function App() {
  const [auth, setAuth] = useState(null);
  const [lang, setLang] = useState('gb');
  const [theme, changeTheme] = useTheme();
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

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
        setTimeout(() => {
          setIsExiting(true);
          setLoading(false);
        }, 1500);
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
              <LoadingIndicator loading={loading} isExiting={isExiting} theme={theme} />
            ) : (
              <>
                <Routes>
                  <Route path='/' element={<PrivateRoute />}>
                    <Route path='' element={<Navigate to='/notes' />} />
                    <Route path="notes" element={<NotesPage />} />
                    <Route path='notes/archive' element={<ArchiveNotesPage/>} />
                    <Route path='notes/new' element={<AddNote />} />
                    <Route path='notes/:id' element={<DetailNote />} />
                  </Route>

                  <Route path='/auth' element={<PublicRoute />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                  </Route>

                  <Route path='*' element={<NotFound />} />
                </Routes>
              </>
            )}
          </div>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
