import React, { useState } from "react";
import "./VolunteerSignup.css";

const VolunteerSignup = ({ onBackToLogin, onSignupSuccess }) => {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        phone: "",
        ward: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const wards = [
        "Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6",
        "Ward 7", "Ward 8", "Ward 9", "Ward 10"
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Full name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = "Please enter a valid 10-digit phone number";
        }

        // Ward validation
        if (!formData.ward) {
            newErrors.ward = "Please select a ward";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Here you would typically make an API call to register the user
            console.log("Volunteer signup data:", formData);
            onSignupSuccess(formData.email);
        }, 1500);
    };

    return (
        <div className="volunteer-signup">
            <div className="signup-container">
                <div className="signup-card">
                    <div className="brand-section">
                        <div className="logo">
                            <div className="logo-text">
                                <span className="logo-sensing">sensing</span>
                                <span className="logo-local">local</span>
                            </div>
                        </div>
                        <h1>Join as Volunteer</h1>
                        <p className="subtitle">Create your account to start volunteering</p>
                    </div>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email ID *</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className={errors.email ? "error" : ""}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                className={errors.fullName ? "error" : ""}
                            />
                            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className={errors.phone ? "error" : ""}
                            />
                            {errors.phone && <span className="error-text">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ward">Ward *</label>
                            <select
                                id="ward"
                                value={formData.ward}
                                onChange={(e) => handleInputChange("ward", e.target.value)}
                                className={errors.ward ? "error" : ""}
                            >
                                <option value="">Select your ward</option>
                                {wards.map(ward => (
                                    <option key={ward} value={ward}>{ward}</option>
                                ))}
                            </select>
                            {errors.ward && <span className="error-text">{errors.ward}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className={errors.password ? "error" : ""}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password *</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                className={errors.confirmPassword ? "error" : ""}
                            />
                            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                        </div>

                        <button
                            type="submit"
                            className={`signup-button ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="login-link">
                        <p>Already have an account? <button onClick={onBackToLogin} className="link-button">Sign in</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerSignup; 