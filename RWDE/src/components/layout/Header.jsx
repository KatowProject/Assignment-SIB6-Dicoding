import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsChatQuote } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { TbLogin2 } from "react-icons/tb";
import LoadingBar from 'react-redux-loading-bar';
export default function Header() {
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
                        <NavLink to="/login" className="nav-link">
                            <TbLogin2 className='me-2' />
                            Login
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <LoadingBar style={{ backgroundColor: '#ff0000', height: '5px' }} />
        </header>
    );
}