import React, { useState } from "react";
import "./CoordinatorDashboard.css";

const HOURS = Array.from({ length: 12 }, (_, i) => i + 8); // 8AM to 7PM
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getWeekDates(startDate) {
    const start = new Date(startDate);
    const week = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        week.push(d);
    }
    return week;
}

const CoordinatorDashboard = () => {
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    const [activeTab, setActiveTab] = useState("volunteers");
    const [showAddVolunteerModal, setShowAddVolunteerModal] = useState(false);
    const [newVolunteer, setNewVolunteer] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [weekStart, setWeekStart] = useState(() => {
        const today = new Date();
        today.setDate(today.getDate() - today.getDay()); // set to Sunday
        today.setHours(0, 0, 0, 0);
        return today;
    });
    const [meetings, setMeetings] = useState([
        {
            id: 1,
            title: "Ward 1",
            date: "2025-07-07",
            time: "10:00",
            location: "Malleshwaram Community Center",
            status: "upcoming",
            volunteers: [
                { id: 1, name: "Rahul Kumar", email: "rahul@email.com", attendance: "confirmed", completion: "pending" },
                { id: 2, name: "Priya Sharma", email: "priya@email.com", attendance: "pending", completion: "pending" },
                { id: 3, name: "Amit Patel", email: "amit@email.com", attendance: "confirmed", completion: "completed" }
            ]
        },
        {
            id: 2,
            title: "Ward 2",
            date: "2025-07-09",
            time: "14:00",
            location: "Indiranagar Park",
            status: "upcoming",
            volunteers: [
                { id: 4, name: "Sneha Reddy", email: "sneha@email.com", attendance: "confirmed", completion: "pending" },
                { id: 5, name: "Vikram Singh", email: "vikram@email.com", attendance: "pending", completion: "pending" }
            ]
        },
        {
            id: 3,
            title: "Ward 3",
            date: "2025-07-10",
            time: "09:00",
            location: "Cubbon Park",
            status: "completed",
            volunteers: [
                { id: 6, name: "Anjali Desai", email: "anjali@email.com", attendance: "present", completion: "completed" },
                { id: 7, name: "Rajesh Kumar", email: "rajesh@email.com", attendance: "absent", completion: "pending" }
            ]
        },
        {
            id: 4,
            title: "Ward 4",
            date: "2025-07-08",
            time: "13:00",
            location: "Online",
            status: "upcoming",
            volunteers: [
                { id: 8, name: "Sonia Mehra", email: "sonia@email.com", attendance: "confirmed", completion: "pending" }
            ]
        }
    ]);

    const weekDates = getWeekDates(weekStart);

    const handlePrevWeek = () => {
        const prev = new Date(weekStart);
        prev.setDate(prev.getDate() - 7);
        setWeekStart(prev);
    };
    const handleNextWeek = () => {
        const next = new Date(weekStart);
        next.setDate(next.getDate() + 7);
        setWeekStart(next);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "upcoming": return "#3b82f6";
            case "completed": return "#10b981";
            case "cancelled": return "#ef4444";
            default: return "#6b7280";
        }
    };

    // Add missing helpers
    const getAttendanceColor = (attendance) => {
        switch (attendance) {
            case "confirmed": return "#10b981";
            case "pending": return "#f59e0b";
            case "present": return "#10b981";
            case "absent": return "#ef4444";
            default: return "#6b7280";
        }
    };
    const getCompletionColor = (completion) => {
        switch (completion) {
            case "completed": return "#10b981";
            case "pending": return "#f59e0b";
            case "in-progress": return "#3b82f6";
            default: return "#6b7280";
        }
    };
    const updateVolunteerStatus = (meetingId, volunteerId, field, value) => {
        setMeetings(meetings.map(meeting => {
            if (meeting.id === meetingId) {
                return {
                    ...meeting,
                    volunteers: meeting.volunteers.map(volunteer => {
                        if (volunteer.id === volunteerId) {
                            return { ...volunteer, [field]: value };
                        }
                        return volunteer;
                    })
                };
            }
            return meeting;
        }));
    };

    const addNewVolunteer = () => {
        if (!newVolunteer.name || !newVolunteer.email) {
            alert("Please fill in name and email");
            return;
        }

        const volunteerId = Math.max(...selectedMeeting.volunteers.map(v => v.id), 0) + 1;
        const newVolunteerData = {
            id: volunteerId,
            name: newVolunteer.name,
            email: newVolunteer.email,
            phone: newVolunteer.phone,
            attendance: "present", // Automatically mark as present since they showed up
            completion: "pending"
        };

        setMeetings(meetings.map(meeting => {
            if (meeting.id === selectedMeeting.id) {
                return {
                    ...meeting,
                    volunteers: [...meeting.volunteers, newVolunteerData]
                };
            }
            return meeting;
        }));

        // Reset form and close modal
        setNewVolunteer({ name: "", email: "", phone: "" });
        setShowAddVolunteerModal(false);
    };

    const handleInputChange = (field, value) => {
        setNewVolunteer(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Meeting detail view (same as before)
    if (selectedMeeting) {
        return (
            <div className="meeting-detail-view">
                <div className="meeting-header">
                    <button className="back-button" onClick={() => setSelectedMeeting(null)}>
                        ← Back to Dashboard
                    </button>
                    <h1>{selectedMeeting.title}</h1>
                    <div className="meeting-info">
                        <span>📅 {selectedMeeting.date}</span>
                        <span>🕐 {selectedMeeting.time}</span>
                        <span>📍 {selectedMeeting.location}</span>
                    </div>
                </div>

                <div className="meeting-tabs">
                    <button
                        className={`tab ${activeTab === "volunteers" ? "active" : ""}`}
                        onClick={() => setActiveTab("volunteers")}
                    >
                        Volunteers ({selectedMeeting.volunteers.length})
                    </button>
                    <button
                        className={`tab ${activeTab === "attendance" ? "active" : ""}`}
                        onClick={() => setActiveTab("attendance")}
                    >
                        Attendance
                    </button>
                    <button
                        className={`tab ${activeTab === "completion" ? "active" : ""}`}
                        onClick={() => setActiveTab("completion")}
                    >
                        Completion Status
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "volunteers" && (
                        <div className="volunteers-list">
                            <div className="volunteers-header">
                                <h3>Volunteer List</h3>
                                <button
                                    className="add-volunteer-btn"
                                    onClick={() => setShowAddVolunteerModal(true)}
                                >
                                    + Add Volunteer
                                </button>
                            </div>
                            <div className="volunteers-grid">
                                {selectedMeeting.volunteers.map(volunteer => (
                                    <div key={volunteer.id} className="volunteer-card">
                                        <div className="volunteer-avatar">
                                            {volunteer.name.charAt(0)}
                                        </div>
                                        <div className="volunteer-info">
                                            <h4>{volunteer.name}</h4>
                                            <p>{volunteer.email}</p>
                                        </div>
                                        <div className="volunteer-status">
                                            <span
                                                className="status-badge attendance"
                                                style={{ backgroundColor: getAttendanceColor(volunteer.attendance) }}
                                            >
                                                {volunteer.attendance}
                                            </span>
                                            <span
                                                className="status-badge completion"
                                                style={{ backgroundColor: getCompletionColor(volunteer.completion) }}
                                            >
                                                {volunteer.completion}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "attendance" && (
                        <div className="attendance-view">
                            <h3>Attendance Management</h3>
                            <div className="attendance-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Volunteer</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedMeeting.volunteers.map(volunteer => (
                                            <tr key={volunteer.id}>
                                                <td>{volunteer.name}</td>
                                                <td>{volunteer.email}</td>
                                                <td>
                                                    <select
                                                        value={volunteer.attendance}
                                                        onChange={(e) => updateVolunteerStatus(selectedMeeting.id, volunteer.id, "attendance", e.target.value)}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="confirmed">Confirmed</option>
                                                        <option value="present">Present</option>
                                                        <option value="absent">Absent</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button className="action-btn">Send Reminder</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === "completion" && (
                        <div className="completion-view">
                            <h3>Task Completion Status</h3>
                            <div className="completion-stats">
                                <div className="stat-card">
                                    <h4>Completed</h4>
                                    <span className="stat-number">
                                        {selectedMeeting.volunteers.filter(v => v.completion === "completed").length}
                                    </span>
                                </div>
                                <div className="stat-card">
                                    <h4>In Progress</h4>
                                    <span className="stat-number">
                                        {selectedMeeting.volunteers.filter(v => v.completion === "in-progress").length}
                                    </span>
                                </div>
                                <div className="stat-card">
                                    <h4>Pending</h4>
                                    <span className="stat-number">
                                        {selectedMeeting.volunteers.filter(v => v.completion === "pending").length}
                                    </span>
                                </div>
                            </div>
                            <div className="completion-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Volunteer</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedMeeting.volunteers.map(volunteer => (
                                            <tr key={volunteer.id}>
                                                <td>{volunteer.name}</td>
                                                <td>Complete assigned tasks</td>
                                                <td>
                                                    <select
                                                        value={volunteer.completion}
                                                        onChange={(e) => updateVolunteerStatus(selectedMeeting.id, volunteer.id, "completion", e.target.value)}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="in-progress">In Progress</option>
                                                        <option value="completed">Completed</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button className="action-btn">View Details</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add Volunteer Modal */}
                {showAddVolunteerModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Add New Volunteer</h3>
                                <button
                                    className="close-btn"
                                    onClick={() => setShowAddVolunteerModal(false)}
                                >
                                    ×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        value={newVolunteer.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        placeholder="Enter volunteer name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        value={newVolunteer.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        value={newVolunteer.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowAddVolunteerModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="add-btn"
                                    onClick={addNewVolunteer}
                                >
                                    Add Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Profile details section
    return (
        <div className="coordinator-dashboard">
            <div className="profile-section">
                <div className="profile-avatar">JD</div>
                <div className="profile-info">
                    <div className="profile-name">Judin Dsouza</div>
                    <div className="profile-email">judin@email.com</div>
                    <div className="profile-role">Coordinator</div>
                </div>
            </div>
            <div className="dashboard-header">
                <h1>Coordinator Dashboard</h1>
                <p>Manage meetings, volunteers, and track progress</p>
            </div>
            <div className="meetings-overview">
                <h2>Meetings Overview</h2>
                <div className="meetings-grid">
                    {meetings.map(meeting => (
                        <div
                            key={meeting.id}
                            className="meeting-card"
                            onClick={() => setSelectedMeeting(meeting)}
                        >
                            <div className="meeting-header">
                                <h3>{meeting.title}</h3>
                                <span
                                    className="status-badge"
                                    style={{ backgroundColor: getStatusColor(meeting.status) }}
                                >
                                    {meeting.status}
                                </span>
                            </div>
                            <div className="meeting-details">
                                <p>📅 {meeting.date}</p>
                                <p>🕐 {meeting.time}</p>
                                <p>📍 {meeting.location}</p>
                                <p>👥 {meeting.volunteers.length} volunteers</p>
                            </div>
                            <button className="view-details-btn">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoordinatorDashboard; 