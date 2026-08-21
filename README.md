# React Admin Dashboard

A responsive admin dashboard built with **React** and **Material UI**. This project demonstrates a modern dashboard interface with reusable components, data visualizations, responsive layouts, mock business data, and light/dark theme support.

## 🚀 Live Demo

**Portfolio:**  
https://isha-thakur.netlify.app/

**GitHub Repository:**  
https://github.com/ishat005/react-admin

---

## 📌 Project Overview

This project is a frontend-focused admin dashboard created to demonstrate my experience with React, component-based development, responsive UI design, data visualization, routing, and theme customization.

The dashboard uses mock data to simulate common business administration features such as revenue tracking, sales, client statistics, traffic analysis, and recent transactions.

The application is designed to work across desktop, laptop, tablet, and mobile screen sizes.

---

## ✨ Features

### 📊 Dashboard

The main dashboard includes:

- Emails sent statistics
- Sales statistics
- New client statistics
- Traffic statistics
- Revenue overview
- Recent transactions
- Campaign progress
- Sales quantity visualization
- Geography-based traffic visualization

### 🎨 Light & Dark Mode

The application supports both:

- Light mode
- Dark mode

Users can switch between themes using the theme toggle.

### 📱 Responsive Design

The dashboard is designed to adapt to different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

The sidebar can be collapsed on larger screens to provide more space for dashboard content.

On smaller screens, the sidebar automatically remains in its compact state.

### 📈 Data Visualization

The dashboard includes multiple visualizations:

- Line Chart
- Bar Chart
- Pie Chart
- Geography Chart
- Progress Circle

These charts currently use mock data for demonstration purposes.

### 🧩 Reusable Components

The application uses reusable React components such as:

- StatBox
- Header
- ProgressCircle
- LineChart
- BarChart
- PieChart
- GeographyChart
- Sidebar
- Topbar

This keeps the application organized and makes components easier to reuse across different pages.

### 🧭 Navigation

The application includes multiple dashboard pages using React Router:

- Dashboard
- Team
- Contacts
- Invoices
- Profile Form
- Calendar
- FAQ
- Bar Chart
- Pie Chart
- Line Chart
- Geography Chart

---

## 🛠️ Technologies Used

- **React**
- **JavaScript**
- **Material UI**
- **React Router**
- **Nivo Charts**
- **CSS**
- **Create React App**

---

## 📁 Project Structure

```text
react-admin/
│
├── public/
│   ├── assets/
│   │   └── user.png
│   └── index.html
│
├── src/
│   │
│   ├── components/
│   │   ├── BarChart.jsx
│   │   ├── GeographyChart.jsx
│   │   ├── Header.jsx
│   │   ├── LineChart.jsx
│   │   ├── PieChart.jsx
│   │   ├── ProgressCircle.jsx
│   │   └── StatBox.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── scenes/
│   │   │
│   │   ├── bar/
│   │   ├── calendar/
│   │   ├── contacts/
│   │   ├── dashboard/
│   │   ├── faq/
│   │   ├── form/
│   │   ├── geography/
│   │   ├── invoices/
│   │   ├── line/
│   │   ├── pie/
│   │   ├── team/
│   │   │
│   │   └── global/
│   │       ├── Sidebar.jsx
│   │       └── Topbar.jsx
│   │
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── theme.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

📊 Mock Data

The dashboard currently uses mock data instead of a backend API.

Mock data is maintained separately in:

src/data/mockData.js

This allows the UI and data visualization components to be developed independently from a future backend implementation.

💻 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
npm
Git
1. Clone the repository
git clone https://github.com/ishat005/react-admin.git
2. Navigate to the project directory
cd react-admin
3. Install dependencies
npm install
4. Start the development server
npm start

The application will run at:

http://localhost:3000
🖥️ Application Pages
Dashboard

Provides an overview of business metrics including:

Revenue
Sales
Clients
Traffic
Transactions
Campaign performance
Team

Provides a team management interface.

Contacts

Displays contact information.

Invoices

Provides an invoice/balance interface.

Profile Form

Provides a profile form UI.

Calendar

Provides a calendar interface.

FAQ

Provides a frequently asked questions page.

Charts

Separate pages are available for:

Bar Chart
Pie Chart
Line Chart
Geography Chart
🔮 Future Improvements

The current version focuses primarily on the frontend UI, responsive design, reusable components, and visualization.

Potential future improvements include:

Connect the dashboard to a real backend API
Add authentication and authorization
Connect the dashboard to a database
Make search functionality fully interactive
Add filtering and sorting
Implement real CRUD operations
Connect charts to dynamic API data
Implement real report downloading
Add pagination to tables
Add form validation
Add notifications
Add user management
Add real-time dashboard updates
🎯 Project Goals

The main goals of this project are to demonstrate:

Component-based React development
Reusable UI components
Responsive web design
Material UI implementation
React Router navigation
Data visualization
Theme customization
Frontend project organization
Working with mock business data
👩‍💻 Author
Isha Thakur

Frontend Developer

Portfolio:
https://isha-thakur.netlify.app/

GitHub:
https://github.com/ishat005

📄 License

This project is intended for portfolio and educational purposes.