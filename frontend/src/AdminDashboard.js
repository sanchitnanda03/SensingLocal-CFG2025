import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const [selectedAudit, setSelectedAudit] = useState(null);
    const [activeTab, setActiveTab] = useState("audits");

    // Mock data for admin dashboard
    const [audits, setAudits] = useState([
        {
            id: 1,
            title: "Ward 1 Community Audit",
            date: "2025-07-07",
            status: "completed",
            coordinator: "Judin Dsouza",
            totalVolunteers: 8,
            presentVolunteers: 6,
            absentVolunteers: 2,
            addedVolunteers: 1,
            replacementVolunteers: 1,
            tasks: [
                { id: 1, name: "Street Cleanup", completed: true, volunteer: "Rahul Kumar" },
                { id: 2, name: "Tree Planting", completed: true, volunteer: "Priya Sharma" },
                { id: 3, name: "Survey Collection", completed: false, volunteer: "Amit Patel" },
                { id: 4, name: "Documentation", completed: true, volunteer: "Sneha Reddy" }
            ]
        },
        {
            id: 2,
            title: "Ward 2 Infrastructure Audit",
            date: "2025-07-09",
            status: "in-progress",
            coordinator: "Sarah Johnson",
            totalVolunteers: 5,
            presentVolunteers: 4,
            absentVolunteers: 1,
            addedVolunteers: 0,
            replacementVolunteers: 1,
            tasks: [
                { id: 1, name: "Road Inspection", completed: true, volunteer: "Vikram Singh" },
                { id: 2, name: "Drainage Check", completed: true, volunteer: "Anjali Desai" },
                { id: 3, name: "Street Light Audit", completed: false, volunteer: "Rajesh Kumar" }
            ]
        },
        {
            id: 3,
            title: "Ward 3 Health & Safety Audit",
            date: "2025-07-10",
            status: "completed",
            coordinator: "Michael Chen",
            totalVolunteers: 6,
            presentVolunteers: 5,
            absentVolunteers: 1,
            addedVolunteers: 1,
            replacementVolunteers: 0,
            tasks: [
                { id: 1, name: "Sanitation Check", completed: true, volunteer: "Sonia Mehra" },
                { id: 2, name: "Safety Inspection", completed: true, volunteer: "David Wilson" },
                { id: 3, name: "Health Survey", completed: true, volunteer: "Lisa Brown" }
            ]
        }
    ]);

    const [coordinators, setCoordinators] = useState([
        {
            id: 1,
            name: "Judin Dsouza",
            email: "judin@email.com",
            phone: "+91 98765 43210",
            assignedWards: ["Ward 1", "Ward 4"],
            totalAudits: 8,
            completedAudits: 6,
            performance: "Excellent"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah@email.com",
            phone: "+91 98765 43211",
            assignedWards: ["Ward 2", "Ward 5"],
            totalAudits: 6,
            completedAudits: 4,
            performance: "Good"
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "michael@email.com",
            phone: "+91 98765 43212",
            assignedWards: ["Ward 3", "Ward 6"],
            totalAudits: 7,
            completedAudits: 7,
            performance: "Excellent"
        }
    ]);

    const [volunteers, setVolunteers] = useState([
        {
            id: 1,
            name: "Rahul Kumar",
            email: "rahul@email.com",
            phone: "+91 98765 43213",
            ward: "Ward 1",
            totalTasks: 15,
            completedTasks: 14,
            attendance: "95%",
            status: "Active"
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya@email.com",
            phone: "+91 98765 43214",
            ward: "Ward 1",
            totalTasks: 12,
            completedTasks: 11,
            attendance: "92%",
            status: "Active"
        },
        {
            id: 3,
            name: "Amit Patel",
            email: "amit@email.com",
            phone: "+91 98765 43215",
            ward: "Ward 1",
            totalTasks: 10,
            completedTasks: 8,
            attendance: "80%",
            status: "Active"
        },
        {
            id: 4,
            name: "Sneha Reddy",
            email: "sneha@email.com",
            phone: "+91 98765 43216",
            ward: "Ward 2",
            totalTasks: 18,
            completedTasks: 17,
            attendance: "94%",
            status: "Active"
        },
        {
            id: 5,
            name: "Vikram Singh",
            email: "vikram@email.com",
            phone: "+91 98765 43217",
            ward: "Ward 2",
            totalTasks: 14,
            completedTasks: 13,
            attendance: "93%",
            status: "Active"
        }
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case "completed": return "#10b981";
            case "in-progress": return "#f59e0b";
            case "pending": return "#6b7280";
            default: return "#6b7280";
        }
    };

    const getPerformanceColor = (performance) => {
        switch (performance) {
            case "Excellent": return "#10b981";
            case "Good": return "#3b82f6";
            case "Average": return "#f59e0b";
            case "Poor": return "#ef4444";
            default: return "#6b7280";
        }
    };

    // Audit detail view
    if (selectedAudit) {
        return (
            <div className="admin-dashboard">
                <div className="audit-detail-view">
                    <div className="audit-header">
                        <button className="back-button" onClick={() => setSelectedAudit(null)}>
                            ← Back to Dashboard
                        </button>
                        <h1>{selectedAudit.title}</h1>
                        <div className="audit-info">
                            <span>📅 {selectedAudit.date}</span>
                            <span>👨‍💼 {selectedAudit.coordinator}</span>
                            <span
                                className="status-badge"
                                style={{ backgroundColor: getStatusColor(selectedAudit.status) }}
                            >
                                {selectedAudit.status}
                            </span>
                        </div>
                    </div>

                    <div className="audit-stats">
                        <div className="stat-card">
                            <h4>Total Volunteers</h4>
                            <span className="stat-number">{selectedAudit.totalVolunteers}</span>
                        </div>
                        <div className="stat-card">
                            <h4>Present</h4>
                            <span className="stat-number present">{selectedAudit.presentVolunteers}</span>
                        </div>
                        <div className="stat-card">
                            <h4>Absent</h4>
                            <span className="stat-number absent">{selectedAudit.absentVolunteers}</span>
                        </div>
                        <div className="stat-card">
                            <h4>Added</h4>
                            <span className="stat-number added">{selectedAudit.addedVolunteers}</span>
                        </div>
                        <div className="stat-card">
                            <h4>Replacements</h4>
                            <span className="stat-number replacement">{selectedAudit.replacementVolunteers}</span>
                        </div>
                    </div>

                    <div className="audit-tabs">
                        <button
                            className={`tab ${activeTab === "tasks" ? "active" : ""}`}
                            onClick={() => setActiveTab("tasks")}
                        >
                            Task Completion
                        </button>
                        <button
                            className={`tab ${activeTab === "volunteers" ? "active" : ""}`}
                            onClick={() => setActiveTab("volunteers")}
                        >
                            Volunteer Details
                        </button>
                        <button
                            className={`tab ${activeTab === "coordinator" ? "active" : ""}`}
                            onClick={() => setActiveTab("coordinator")}
                        >
                            Coordinator Report
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === "tasks" && (
                            <div className="tasks-view">
                                <h3>Task Completion Status</h3>
                                <div className="tasks-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Task</th>
                                                <th>Assigned Volunteer</th>
                                                <th>Status</th>
                                                <th>Completion Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedAudit.tasks.map(task => (
                                                <tr key={task.id}>
                                                    <td>{task.name}</td>
                                                    <td>{task.volunteer}</td>
                                                    <td>
                                                        <span
                                                            className="status-badge"
                                                            style={{
                                                                backgroundColor: task.completed ? "#10b981" : "#ef4444"
                                                            }}
                                                        >
                                                            {task.completed ? "Completed" : "Pending"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="completion-bar">
                                                            <div
                                                                className="completion-fill"
                                                                style={{ width: task.completed ? "100%" : "0%" }}
                                                            ></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === "volunteers" && (
                            <div className="volunteers-view">
                                <h3>Volunteer Participation</h3>
                                <div className="volunteer-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">Present Volunteers:</span>
                                        <span className="stat-value present">{selectedAudit.presentVolunteers}</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Absent Volunteers:</span>
                                        <span className="stat-value absent">{selectedAudit.absentVolunteers}</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Newly Added:</span>
                                        <span className="stat-value added">{selectedAudit.addedVolunteers}</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Replacement Workers:</span>
                                        <span className="stat-value replacement">{selectedAudit.replacementVolunteers}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "coordinator" && (
                            <div className="coordinator-view">
                                <h3>Coordinator Performance Report</h3>
                                <div className="coordinator-report">
                                    <div className="report-item">
                                        <span className="report-label">Coordinator:</span>
                                        <span className="report-value">{selectedAudit.coordinator}</span>
                                    </div>
                                    <div className="report-item">
                                        <span className="report-label">Audit Date:</span>
                                        <span className="report-value">{selectedAudit.date}</span>
                                    </div>
                                    <div className="report-item">
                                        <span className="report-label">Volunteer Management:</span>
                                        <span className="report-value">Excellent</span>
                                    </div>
                                    <div className="report-item">
                                        <span className="report-label">Task Completion Rate:</span>
                                        <span className="report-value">
                                            {Math.round((selectedAudit.tasks.filter(t => t.completed).length / selectedAudit.tasks.length) * 100)}%
                                        </span>
                                    </div>
                                    <div className="report-item">
                                        <span className="report-label">Attendance Rate:</span>
                                        <span className="report-value">
                                            {Math.round((selectedAudit.presentVolunteers / selectedAudit.totalVolunteers) * 100)}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Main admin dashboard
    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <div className="admin-profile">
                    <div className="admin-avatar">A</div>
                    <div className="admin-info">
                        <div className="admin-name">Admin Dashboard</div>
                        <div className="admin-email">admin@sensinglocal.com</div>
                        <div className="admin-role">System Administrator</div>
                    </div>
                </div>
            </div>

            <div className="dashboard-header">
                <h1>Admin Console</h1>
                <p>Monitor audits, coordinators, and volunteer performance</p>
            </div>

            <div className="admin-tabs">
                <button
                    className={`admin-tab ${activeTab === "audits" ? "active" : ""}`}
                    onClick={() => setActiveTab("audits")}
                >
                    📋 Audits ({audits.length})
                </button>
                <button
                    className={`admin-tab ${activeTab === "coordinators" ? "active" : ""}`}
                    onClick={() => setActiveTab("coordinators")}
                >
                    👨‍💼 Coordinators ({coordinators.length})
                </button>
                <button
                    className={`admin-tab ${activeTab === "volunteers" ? "active" : ""}`}
                    onClick={() => setActiveTab("volunteers")}
                >
                    👥 Volunteers ({volunteers.length})
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "audits" && (
                    <div className="audits-view">
                        <h2>Audit List</h2>
                        <div className="audits-grid">
                            {audits.map(audit => (
                                <div
                                    key={audit.id}
                                    className="audit-card"
                                    onClick={() => setSelectedAudit(audit)}
                                >
                                    <div className="audit-header">
                                        <h3>{audit.title}</h3>
                                        <span
                                            className="status-badge"
                                            style={{ backgroundColor: getStatusColor(audit.status) }}
                                        >
                                            {audit.status}
                                        </span>
                                    </div>
                                    <div className="audit-details">
                                        <p>📅 {audit.date}</p>
                                        <p>👨‍💼 {audit.coordinator}</p>
                                        <p>👥 {audit.totalVolunteers} volunteers</p>
                                        <p>✅ {audit.presentVolunteers} present</p>
                                        <p>❌ {audit.absentVolunteers} absent</p>
                                        <p>➕ {audit.addedVolunteers} added</p>
                                        <p>🔄 {audit.replacementVolunteers} replacements</p>
                                    </div>
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "coordinators" && (
                    <div className="coordinators-view">
                        <h2>Coordinator Management</h2>
                        <div className="coordinators-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Assigned Wards</th>
                                        <th>Total Audits</th>
                                        <th>Completed</th>
                                        <th>Performance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coordinators.map(coordinator => (
                                        <tr key={coordinator.id}>
                                            <td>{coordinator.name}</td>
                                            <td>{coordinator.email}</td>
                                            <td>{coordinator.phone}</td>
                                            <td>{coordinator.assignedWards.join(", ")}</td>
                                            <td>{coordinator.totalAudits}</td>
                                            <td>{coordinator.completedAudits}</td>
                                            <td>
                                                <span
                                                    className="performance-badge"
                                                    style={{ backgroundColor: getPerformanceColor(coordinator.performance) }}
                                                >
                                                    {coordinator.performance}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === "volunteers" && (
                    <div className="volunteers-view">
                        <h2>Volunteer Performance</h2>
                        <div className="volunteers-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Ward</th>
                                        <th>Total Tasks</th>
                                        <th>Completed</th>
                                        <th>Attendance</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {volunteers.map(volunteer => (
                                        <tr key={volunteer.id}>
                                            <td>{volunteer.name}</td>
                                            <td>{volunteer.email}</td>
                                            <td>{volunteer.phone}</td>
                                            <td>{volunteer.ward}</td>
                                            <td>{volunteer.totalTasks}</td>
                                            <td>{volunteer.completedTasks}</td>
                                            <td>{volunteer.attendance}</td>
                                            <td>
                                                <span
                                                    className="status-badge"
                                                    style={{ backgroundColor: volunteer.status === "Active" ? "#10b981" : "#6b7280" }}
                                                >
                                                    {volunteer.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard; 