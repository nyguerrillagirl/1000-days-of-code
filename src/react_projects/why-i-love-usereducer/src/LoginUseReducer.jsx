import { useState } from 'react';
import { login } from './utils';

function LoginUseState() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await login({username, password});
            setIsLoggedIn(true);
            setUsername('');
            setPassword('');
        } catch (error) {
            setError("Incorrect username or password");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoggedIn) {
        return (
            <div className="App2">
                <h1>Welcome, {username}!</h1>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="login-container">
                    <form className="form" onSubmit={onSubmit}>
                        {error && <p className="error">{error}</p>}
                        <p>Please Login!</p>
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.currentTarget.value)} />
                        <input 
                            type="password" 
                            placeholder="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={e => setPassword(e.currentTarget.value)} />

                        <button className="submit" type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginUseState;