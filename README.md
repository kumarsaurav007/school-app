# School Management Mini Project (Next.js + MySQL)

A mini full-stack project built with **Next.js** and **MySQL**.  
It contains two pages:

- **Add School Page (`addSchool.jsx`)**: A responsive form (with validation using `react-hook-form`) to add school details into a MySQL database. The form also supports uploading a school image, which is stored in a local `schoolImages/` folder.  
- **Show Schools Page (`showSchools.jsx`)**: Displays the list of schools in a card/grid layout (like an e-commerce product page) showing name, address, city, and image. The page is fully responsive.

---

## Tech Stack
- **Frontend**: Next.js (React)
- **Form Handling**: react-hook-form
- **Backend / API**: Next.js API Routes
- **Database**: MySQL
- **Styling**: CSS / Responsive design
- **Image Uploads**: Stored in `public/schoolImages/`

---

## Project Structure
```bash
school-app/
│── lib/
│   └── db.js
│── pages/
│   ├── index.js
│   ├── addSchool.jsx
│   ├── showSchools.jsx
│   └── api/
│       └── schools/
│           └── upload.js
│── public/
│   └── schoolImages/   (uploaded images saved here)
│── package.json
```


---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/school-app.git
cd school-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup MySQL Database
Log in to MySQL and create a database + table:
```bash
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  contact BIGINT,
  image TEXT,
  email_id TEXT
);
```

### 4. Configure Database Connection
Update ```bashlib/db.js``` with your MySQL credentials

### 5. Run the Development Server
```bash
npm run dev
```

The app will be available at:
- http://localhost:3000/addSchool (form to add a school)
- http://localhost:3000/showSchools(list of schools)
