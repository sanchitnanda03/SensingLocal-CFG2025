# Volunteer Management Platform for Sensing Local

**Organization:** [Sensing Local](https://www.sensinglocal.in)  
**Event Type:** Hackathon  
**Date:** 13 June, 2025

---

## 1. Mission Alignment

Sensing Local is a Bengaluru-based Urban Living Lab working to enhance environmental health and civic well-being. They focus on tackling urban challenges—such as air and water pollution, waste management, and walkability—through inclusive, tech-enabled, and community-driven action.

This platform aligns with their mission by empowering stakeholders with digital tools for civic coordination and environmental interventions.

---

## 2. Problem Statement

Sensing Local currently relies on fragmented and manual systems—WhatsApp, paper-based forms, and scattered tools—for volunteer coordination, data collection, and campaign tracking. These tools lack integration, real-time visibility, and scalability.

> **Challenge**  
> How might we create an integrated digital platform to enhance volunteer coordination, improve communication between stakeholders, streamline walkability audits, and provide administrative insights?

---

## 3. Stakeholder Ecosystem

| Stakeholder       | Role & Needs                                                                 |
|-------------------|------------------------------------------------------------------------------|
| **Volunteers**    | Need a clear audit schedule, communication channel, training, and tracking   |
| **Coordinators**  | Need tools to allocate, manage, and communicate with volunteers               |
| **Admins**        | Need audit-level visibility, absentee tracking, and cost forecasting          |
| **Technologists** | Maintain backend functionality and ensure system reliability                  |
| **Communities**   | Benefit indirectly from improved public spaces and civic engagement outcomes  |

---

## 4. Architecture Diagram

<img width="940" height="1012" alt="image" src="https://github.com/user-attachments/assets/9e020b08-9691-47bd-981d-03a56cf63d31" />

![WhatsApp Image 2025-07-13 at 07 16 51_179b3e6d](https://github.com/user-attachments/assets/3d0fb443-bedf-478e-862b-4da15230728a)

---

## 5. Solution Overview: Volunteer Management Platform

A responsive web platform with **three user views**: Volunteer, Coordinator, and Admin.

### Volunteer View

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Training Completion**| Volunteers must complete training modules before participating             |
| **Attendance**         | AI-enabled geo-mapped attendance tracking                                   |
| **Dashboard**          | Shows upcoming audit location, date, and time                              |
| **Spotlight Messages** | Updates from coordinators                                                   |
| **Audit Completion**   | Button to mark audit as finished; request reassignment optionally           |
| **Chat Module**        | Group chat with coordinators and peers                                     |
| **FAQs**               | Quick access to commonly asked questions                                    |
| **Profile**            | View scores, certificates, badges, and audit history                        |

---

### Coordinator View

| Feature                 | Description                                                             |
|-------------------------|-------------------------------------------------------------------------|
| **Volunteer Directory** | Access and manage assigned volunteers                                   |
| **Spotlight Messages**  | Broadcast announcements or updates                                      |
| **Attendance Tracking** | Track participation and flag absentees                                 |
| **Chat Module**         | Real-time communication with volunteers (including bot integration)     |

---

### Admin View

| Feature                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **Audit Oversight**        | Full access to all audit data and volunteer assignments                     |
| **Absentee Logs**          | Track volunteer absences by audit or user                                   |
| **Performance Analytics**  | Evaluate performance of volunteers and coordinators                         |
| **Cost Predictions**       | Estimate campaign costs based on data                                       |
| **AI Budget Estimation**   | YOLO-based pothole area estimation linked to budgeting logic                |
| **Dashboards & Graphs**    | Visualize engagement, campaign spread, attendance heatmaps, and more        |

---

## 6. Technology Stack

| Layer         | Tools Used             |
|---------------|------------------------|
| **Frontend**  | React.js + TailwindCSS |
| **Backend**   | Node.js + Express.js   |
| **Database**  | MongoDB (NoSQL)        |

---

## 7. Key Impacts

- Unified communication and tracking system
- AI-enabled geo mapping-based attendance tracking
- Smarter audit allocation and volunteer reassignment
- Profile-based performance and audit history
- Digital-first workflow replacing paper forms
- YOLO-based pothole area estimation + budget forecasting
- Scalable for neighborhoods and city-wide use

---

## 8. Future Enhancements

### FastAPI Integration
- Geo-mapping attendance using real-time check-ins
- Budget estimation based on pothole area using image segmentation

### Data Cleaning & Quality Control
- ML models to validate submitted data:
  - Match uploaded image to description
  - Flag inconsistent submissions for manual admin review
- Reduced manual QA effort and increased data trust

### PWA / Mobile App
- Offline access for field volunteers
- Push notifications for updates and reassignment

### Civic Data Integration
- Export anonymized data for urban planning use
- Integration with OpenStreetMap and BBMP APIs

---

## 9. Conclusion

Our platform makes urban civic engagement smoother, smarter, and scalable—fully aligned with Sensing Local’s mission of participatory urban transformation. By replacing fragmented workflows with an integrated volunteer and audit management system, we empower every stakeholder to drive meaningful change on the ground.

