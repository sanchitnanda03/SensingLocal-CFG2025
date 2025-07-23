import React, { useState } from "react";
import "./App.css";
import CoordinatorDashboard from "./CoordinatorDashboard";
import VolunteerSignup from "./VolunteerSignup";
import AdminDashboard from "./AdminDashboard";
import VolunteerDashboard from "./VolunteerDashboard";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("volunteer");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate API call
        setTimeout(() => {
            if (!email || !password) {
                setError("Please enter both email and password.");
                setIsLoading(false);
                return;
            }
            setIsLoading(false);
            setIsLoggedIn(true);
        }, 1000);
    };

    const handleSignupSuccess = (signupEmail) => {
        setEmail(signupEmail);
        setShowSignup(false);
        setError("Account created successfully! Please sign in.");
    };

    const handleBackToLogin = () => {
        setShowSignup(false);
        setError("");
    };

    if (isLoggedIn && selectedRole === "coordinator") {
        return <CoordinatorDashboard />;
    }

    if (isLoggedIn && selectedRole === "admin") {
        return <AdminDashboard />;
    }

    if (isLoggedIn && selectedRole === "volunteer") {
        return <VolunteerDashboard />;
    }

    if (showSignup) {
        return <VolunteerSignup onBackToLogin={handleBackToLogin} onSignupSuccess={handleSignupSuccess} />;
    }

    return (
        <div className="app">
            <div className="login-container">
                <div className="login-card">
                    <div className="brand-section">
                        <div className="logo">
                            <div className="logo-text">
                                <span className="logo-sensing">sensing</span>
                                <span className="logo-local">local</span>
                            </div>
                        </div>
                        <h1>Welcome back</h1>
                        <p className="subtitle">Sign in to your account to continue</p>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        {error && <div className="error-message">{error}</div>}

                        <div className="form-group">
                            <label htmlFor="role">Select your role</label>
                            <div className="role-selector">
                                <button
                                    type="button"
                                    className={`role-option ${selectedRole === 'volunteer' ? 'active' : ''}`}
                                    onClick={() => setSelectedRole('volunteer')}
                                >
                                    <div className="role-icon">👥</div>
                                    <span>Volunteer</span>
                                </button>
                                <button
                                    type="button"
                                    className={`role-option ${selectedRole === 'coordinator' ? 'active' : ''}`}
                                    onClick={() => setSelectedRole('coordinator')}
                                >
                                    <div className="role-icon">👨‍💼</div>
                                    <span>Coordinator</span>
                                </button>
                                <button
                                    type="button"
                                    className={`role-option ${selectedRole === 'admin' ? 'active' : ''}`}
                                    onClick={() => setSelectedRole('admin')}
                                >
                                    <div className="role-icon">⚙️</div>
                                    <span>Admin</span>
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className={`login-button ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <button type="button" className="google-button">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>
                    </form>

                    <div className="signup-link">
                        <p>Don't have an account? <button onClick={() => setShowSignup(true)} className="link-button">Sign up for free</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
