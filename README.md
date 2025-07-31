# Admin Dashboard (Angular 20)

An advanced admin dashboard built with **Angular 20** using modern architecture (standalone components, signals, SSR) to manage employees, departments, and tasks.

## Features

**Authentication**
  - Admin can **register** and **log in** securely.
  - Only an authenticated admin can access the system.

**Dashboard Functionalities**
  - Full **CRUD operations** for:
    - Employees
    - Departments
    - Tasks
  - Real-time UI updates using **Angular Signals**.
  - Role-based access control via **guards**.

**Modular Architecture**  
  Organized using a core-based structure:
  src/
├── core/
│ ├── services/
│ ├── interfaces/
│ ├── guards/
│ ├── custom-pipes/
│ └── routing/
└── Components/

---

**Technology Stack**
- Angular 20 with Standalone APIs
- Signals for state management
- Angular Universal for **Server-Side Rendering (SSR)**
- Bootstrap / SCSS for responsive design
- LocalStorage for token/session handling

---

## Admin Role Permissions

| Feature            | Access           |
|--------------------|------------------|
| View Employees     | ✅ Admin only     |
| Add/Edit/Delete Employees | ✅ Admin only |
| Manage Departments | ✅ Admin only     |
| Manage Tasks       | ✅ Admin only     |

---

## Future Enhancements

- ✅ Filter & Search by department/date
- 📊 Dashboard analytics (charts + stats)
- 🌍 Multilingual support
- 📱 Responsive mobile UI improvements

---

🙋‍♀️ Author
Developed with ❤️ by Mariam Hesham
“Building secure and scalable admin dashboards with the latest Angular features.”
