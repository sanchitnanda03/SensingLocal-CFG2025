import React, { useState } from "react";
import "./VolunteerDashboard.css";
import FAQPage from "./FAQPage";
import GroupChatPage from "./GroupChatPage";
import TrainingMaterialsPage from "./TrainingMaterialsPage";

const VolunteerDashboard = () => {
    const [trainingCompleted, setTrainingCompleted] = useState(false);
    const [activeTab, setActiveTab] = useState("spotlight");
    const [showTraining, setShowTraining] = useState(false);
    const [auditCompleted, setAuditCompleted] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [activePage, setActivePage] = useState("dashboard");

    // Mock data
    const auditInfo = {
        location: "Church Street, Bengaluru",
        lat: 12.9716,
        lng: 77.5946,
        date: "2025-07-15",
        time: "10:00 AM",
        road: "Church Street to Brigade Road"
    };

    const spotlightMessages = [
        {
            id: 1,
            title: "Important Meeting Reminder",
            message: "Please arrive at Church Street location at 10:00 AM sharp for the community audit meeting. Bring your safety gear and documentation materials.",
            priority: "high",
            timestamp: "2025-07-14 15:30"
        },
        {
            id: 2,
            title: "New Safety Guidelines",
            message: "Updated safety protocols have been implemented. Please review the new guidelines before your next audit.",
            priority: "medium",
            timestamp: "2025-07-13 09:15"
        },
        {
            id: 3,
            title: "Training Completion Deadline",
            message: "Complete your mandatory training modules by end of this week to maintain active volunteer status.",
            priority: "high",
            timestamp: "2025-07-12 14:20"
        }
    ];

    const userProfile = {
        name: "Rahul Kumar",
        email: "rahul@email.com",
        phone: "+91 98765 43213",
        ward: "Ward 1",
        joinDate: "2024-03-15",
        totalAudits: 15,
        completedAudits: 14,
        attendance: "95%",
        score: 850,
        badges: [
            { name: "First Audit", icon: "🥇", earned: "2024-04-01" },
            { name: "Perfect Attendance", icon: "📅", earned: "2024-06-15" },
            { name: "Safety Champion", icon: "🛡️", earned: "2024-08-20" },
            { name: "Community Hero", icon: "🏆", earned: "2024-10-10" }
        ],
        certificates: [
            { name: "Basic Safety Training", download: "#" },
            { name: "Audit Methodology", download: "#" },
            { name: "Community Engagement", download: "#" }
        ],
        auditHistory: [
            { date: "2025-07-10", location: "Ward 1", status: "Completed", score: 95 },
            { date: "2025-07-03", location: "Ward 1", status: "Completed", score: 88 },
            { date: "2025-06-26", location: "Ward 1", status: "Completed", score: 92 }
        ]
    };

    const pendingRoads = [
        "Brigade Road to MG Road",
        "Commercial Street to Residency Road",
        "St. Mark's Road to Lavelle Road"
    ];

    const faqs = [
        {
            question: "How do I report an issue during an audit?",
            answer: "Use the emergency contact number provided in your training materials or contact your coordinator directly."
        },
        {
            question: "What should I do if I can't complete an audit?",
            answer: "Notify your coordinator immediately and document the reason. You may be reassigned or the audit can be rescheduled."
        },
        {
            question: "How are my scores calculated?",
            answer: "Scores are based on accuracy, completeness, timeliness, and adherence to safety protocols."
        }
    ];

    const trainingMaterials = [
        {
            title: "Safety Protocols Video",
            type: "video",
            url: "#",
            duration: "15 min"
        },
        {
            title: "Audit Methodology Guide",
            type: "pdf",
            url: "#",
            size: "2.5 MB"
        },
        {
            title: "Community Engagement Training",
            type: "external",
            url: "#",
            description: "External resource for advanced training"
        }
    ];

    const handleCompleteTraining = () => {
        setTrainingCompleted(true);
        setShowTraining(false);
    };

    const handleStartTraining = () => {
        setShowTraining(true);
    };

    const handleCompleteAudit = () => {
        setAuditCompleted(true);
    };

    const handleNextAudit = () => {
        setAuditCompleted(false);
        // Here you would typically assign the next pending road
    };

    const getGoogleMapsUrl = (lat, lng) => {
        return `https://www.google.com/maps?q=${lat},${lng}`;
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high": return "#ef4444";
            case "medium": return "#f59e0b";
            case "low": return "#10b981";
            default: return "#6b7280";
        }
    };

    // Training not completed - show training page
    if (!trainingCompleted) {
        return (
            <div className="volunteer-dashboard">
                <div className="training-page">
                    <div className="training-content">
                        <h1>Trainings Pending</h1>
                        <p>Complete your mandatory training before accessing the volunteer dashboard.</p>
                        <button className="complete-training-btn" onClick={handleStartTraining}>
                            Complete Training
                        </button>
                    </div>
                </div>

                {showTraining && (
                    <div className="training-modal">
                        <div className="training-modal-content">
                            <div className="training-header">
                                <h2>Volunteer Training</h2>
                                <button className="close-btn" onClick={() => setShowTraining(false)}>×</button>
                            </div>

                            <div className="training-sections">
                                <div className="training-section">
                                    <h3>Safety Protocols</h3>
                                    <div className="video-container">
                                        <div className="video-placeholder">
                                            <span>📹</span>
                                            <p>Safety Protocols Video</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="training-section">
                                    <h3>Materials</h3>
                                    <div className="materials-list">
                                        <a href="#" className="material-item">
                                            📄 Download PDF Guide
                                        </a>
                                        <a href="#" className="material-item">
                                            🌐 Visit External Training Resource
                                        </a>
                                    </div>
                                </div>

                                <div className="training-section">
                                    <button
                                        className="mark-completed-btn"
                                        onClick={handleCompleteTraining}
                                    >
                                        ✔ Mark Training as Completed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Main volunteer dashboard
    return (
        <div className="volunteer-dashboard">
            {/* Profile Section */}
            <div className="profile-section">
                <div className="profile-info">
                    <div className="profile-avatar">{userProfile.name.charAt(0)}</div>
                    <div className="profile-details">
                        <h3>{userProfile.name}</h3>
                        <p>{userProfile.ward} • Score: {userProfile.score}</p>
                    </div>
                </div>
                <button className="profile-btn" onClick={() => setShowProfile(!showProfile)}>
                    Profile
                </button>
            </div>

            {/* Profile Modal */}
            {showProfile && (
                <div className="profile-modal">
                    <div className="profile-modal-content profile-modal-scroll">
                        <h2 className="profile-title">
                            <span role="img" aria-label="profile">👤</span> Volunteer Profile
                        </h2>
                        {/* Basic Information */}
                        <div className="profile-card">
                            <h3 className="profile-section-title"><span role="img" aria-label="info">📋</span> Basic Information</h3>
                            <div className="profile-basic-info">
                                <div><b>Name:</b> {userProfile.name}</div>
                                <div><b>Email:</b> {userProfile.email}</div>
                                <div><b>Phone:</b> {userProfile.phone}</div>
                                <div><b>Ward:</b> {userProfile.ward}</div>
                                <div><b>Join Date:</b> {userProfile.joinDate}</div>
                            </div>
                        </div>
                        {/* Performance */}
                        <div className="profile-card">
                            <h3 className="profile-section-title"><span role="img" aria-label="performance">📈</span> Performance</h3>
                            <div className="profile-stats">
                                <div className="stat-card stat-audits">
                                    <div className="stat-label">Total Audits</div>
                                    <div className="stat-value">{userProfile.totalAudits || 47}</div>
                                </div>
                                <div className="stat-card stat-score">
                                    <div className="stat-label">Score</div>
                                    <div className="stat-value">{userProfile.score || "85/100"}</div>
                                </div>
                            </div>
                        </div>
                        {/* Badges */}
                        <div className="profile-card">
                            <h3 className="profile-section-title"><span role="img" aria-label="badges">🏅</span> Badges Earned</h3>
                            <div className="badges-row">
                                {userProfile.badges && userProfile.badges.length > 0 ? userProfile.badges.map((badge, idx) => (
                                    <div className="badge-card" key={idx}>
                                        <div className="badge-icon">{badge.icon || "🏅"}</div>
                                        <div className="badge-name">{badge.name}</div>
                                        <div className="badge-date">Earned: {badge.earned}</div>
                                    </div>
                                )) : <div>No badges yet.</div>}
                            </div>
                        </div>
                        {/* Certificates */}
                        <div className="profile-card">
                            <h3 className="profile-section-title"><span role="img" aria-label="certificates">📜</span> Certificates</h3>
                            <div className="certificates-list">
                                {userProfile.certificates && userProfile.certificates.length > 0 ? userProfile.certificates.map((cert, idx) => (
                                    <div className="certificate-row" key={idx}>
                                        <div>
                                            <div className="certificate-title">{cert.name}</div>
                                            <div className="certificate-date">Earned: {cert.earned || "-"}</div>
                                        </div>
                                        <a href={cert.download} className="download-btn">Download</a>
                                    </div>
                                )) : <div>No certificates yet.</div>}
                            </div>
                        </div>
                        {/* Audit History */}
                        <div className="profile-card">
                            <h3 className="profile-section-title"><span role="img" aria-label="history">📝</span> Audit History</h3>
                            <div className="audit-history-list">
                                {userProfile.auditHistory && userProfile.auditHistory.length > 0 ? userProfile.auditHistory.map((audit, idx) => (
                                    <div className="audit-history-row" key={idx}>
                                        <div className="audit-history-info">
                                            <div className="audit-history-title">{audit.location}</div>
                                            <div className="audit-history-date">Date: {audit.date}</div>
                                            <div className="audit-history-status">Status: {audit.status}</div>
                                        </div>
                                        <div className="audit-history-score">Score: <span className="score-badge">{audit.score}</span></div>
                                    </div>
                                )) : <div>No audit history yet.</div>}
                            </div>
                        </div>
                        <button className="close-btn profile-close-btn" onClick={() => setShowProfile(false)}>×</button>
                    </div>
                </div>
            )}

            {/* Notification Banner */}
            {!auditCompleted && (
                <div className="notification-banner">
                    <div className="notification-content">
                        <h3>📋 Upcoming Audit</h3>
                        <div className="audit-details">
                            <p>
                                <strong>Location:</strong>
                                <a
                                    href={getGoogleMapsUrl(auditInfo.lat, auditInfo.lng)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location-link"
                                >
                                    {auditInfo.location}
                                </a>
                            </p>
                            <p><strong>Date:</strong> {auditInfo.date}</p>
                            <p><strong>Time:</strong> {auditInfo.time}</p>
                            <p><strong>Road:</strong> {auditInfo.road}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Dashboard Content */}
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Volunteer Dashboard</h1>
                    <p>Welcome back, {userProfile.name}!</p>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                    <button className="action-btn chat-btn">
                        💬 Group Chat
                    </button>
                    <button className="action-btn faq-btn">
                        ❓ FAQs
                    </button>
                    <button className="action-btn training-btn">
                        📚 Training Materials
                    </button>
                    {!auditCompleted && (
                        <button className="action-btn complete-audit-btn" onClick={handleCompleteAudit}>
                            ✅ Complete Audit
                        </button>
                    )}
                </div>

                {/* Spotlight Messages */}
                <div className="spotlight-section">
                    <h2>📢 Spotlight Messages</h2>
                    <div className="messages-list">
                        {spotlightMessages.map(message => (
                            <div key={message.id} className="message-card">
                                <div className="message-header">
                                    <h3>{message.title}</h3>
                                    <span
                                        className="priority-badge"
                                        style={{ backgroundColor: getPriorityColor(message.priority) }}
                                    >
                                        {message.priority}
                                    </span>
                                </div>
                                <p className="message-content">{message.message}</p>
                                <div className="message-timestamp">{message.timestamp}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Audit Option */}
                {auditCompleted && (
                    <div className="next-audit-section">
                        <h2>🎯 Great job! Ready for another audit?</h2>
                        <p>Complete more audits to increase your score and earn badges!</p>
                        <div className="pending-roads">
                            <h3>Pending Roads:</h3>
                            <ul>
                                {pendingRoads.map((road, index) => (
                                    <li key={index}>{road}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="next-audit-btn" onClick={handleNextAudit}>
                            🚀 Start Next Audit
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile-friendly bottom nav bar */}
            <div className="bottom-nav">
                <button className={activePage === "dashboard" ? "nav-btn active" : "nav-btn"} onClick={() => setActivePage("dashboard")}>🏠<span>Dashboard</span></button>
                <button className={activePage === "faq" ? "nav-btn active" : "nav-btn"} onClick={() => setActivePage("faq")}>❓<span>FAQ</span></button>
                <button className={activePage === "chat" ? "nav-btn active" : "nav-btn"} onClick={() => setActivePage("chat")}>💬<span>Chat</span></button>
                <button className={activePage === "training" ? "nav-btn active" : "nav-btn"} onClick={() => setActivePage("training")}>📚<span>Training</span></button>
            </div>
            {/* Render selected page */}
            {activePage === "dashboard" && (
                <div className="dashboard-content">
                    <div className="dashboard-header">
                        <h1>Volunteer Dashboard</h1>
                        <p>Welcome back, {userProfile.name}!</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="quick-actions">
                        <button className="action-btn chat-btn">
                            💬 Group Chat
                        </button>
                        <button className="action-btn faq-btn">
                            ❓ FAQs
                        </button>
                        <button className="action-btn training-btn">
                            📚 Training Materials
                        </button>
                        {!auditCompleted && (
                            <button className="action-btn complete-audit-btn" onClick={handleCompleteAudit}>
                                ✅ Complete Audit
                            </button>
                        )}
                    </div>

                    {/* Spotlight Messages */}
                    <div className="spotlight-section">
                        <h2>📢 Spotlight Messages</h2>
                        <div className="messages-list">
                            {spotlightMessages.map(message => (
                                <div key={message.id} className="message-card">
                                    <div className="message-header">
                                        <h3>{message.title}</h3>
                                        <span
                                            className="priority-badge"
                                            style={{ backgroundColor: getPriorityColor(message.priority) }}
                                        >
                                            {message.priority}
                                        </span>
                                    </div>
                                    <p className="message-content">{message.message}</p>
                                    <div className="message-timestamp">{message.timestamp}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Audit Option */}
                    {auditCompleted && (
                        <div className="next-audit-section">
                            <h2>🎯 Great job! Ready for another audit?</h2>
                            <p>Complete more audits to increase your score and earn badges!</p>
                            <div className="pending-roads">
                                <h3>Pending Roads:</h3>
                                <ul>
                                    {pendingRoads.map((road, index) => (
                                        <li key={index}>{road}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="next-audit-btn" onClick={handleNextAudit}>
                                🚀 Start Next Audit
                            </button>
                        </div>
                    )}
                </div>
            )}
            {activePage === "faq" && <FAQPage />}
            {activePage === "chat" && <GroupChatPage />}
            {activePage === "training" && <TrainingMaterialsPage />}

            {/* Comment for future backend integration */}
            {/* TODO: Replace mock data with API calls to backend
                - Fetch audit information from coordinator updates
                - Get real-time spotlight messages
                - Update training completion status
                - Track audit completion and scoring
                - Sync profile data and achievements */}
        </div>
    );
};

export default VolunteerDashboard; 