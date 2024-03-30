import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import React from 'react';
import DetailNote from './pages/Detail';
import NotFound from './pages/NotFound';
import AddNote from './pages/AddNote';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <Route path="/archived" element={<Archive />} />
                        <Route path='/notes/add' element={<AddNote />} />
                        <Route path='/notes/:id' element={<DetailNote />} />
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </main>
            </div>
        );
    }
}
export default App;
