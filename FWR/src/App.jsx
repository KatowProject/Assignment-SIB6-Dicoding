import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>Notes App</h1>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/archived">Arsip</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}
export default App;
