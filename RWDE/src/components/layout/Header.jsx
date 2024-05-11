import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsChatQuote } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { TbLogout2 } from "react-icons/tb";
import LoadingBar from 'react-redux-loading-bar';
import asyncAuth from '../../states/auth/action';
import { tokenHandler } from '../../utils/tokenHandler';
import { useDispatch } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(asyncAuth.asyncLogout());

        tokenHandler.removeToken();

        navigate('/login', { replace: true });
    }

    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/logo.png"
                            width="45"
                            height="45"
                        />{' '}
                        Open Threads
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">
                            <BsChatQuote className='me-2' />
                            Threads
                        </NavLink>
                        <NavLink to="/leaderboard" className="nav-link">
                            <MdOutlineLeaderboard className='me-2' />
                            Leaderboard
                        </NavLink>
                        <button className="nav-link" onClick={handleLogout}>
                            <TbLogout2 className='me-2' />
                            Logout
                        </button>
                    </Nav>
                </Container>
            </Navbar>
            <LoadingBar style={{ backgroundColor: '#ff0000', height: '5px' }} />
        </header>
    );
}