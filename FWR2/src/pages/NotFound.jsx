import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>404 - Page Not Found</h1>
            <br />
            <Link to='/'>Back to Home</Link>
        </div>
    );
}