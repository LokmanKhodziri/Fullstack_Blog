import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:5050/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            console.log('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    }

    return (
        <div>
            <form className="register" onSubmit={register}>
                <h1>Register Now</h1>
                <input type="text"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} />
                <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button>Register</button>
            </form>
        </div>
    );
}