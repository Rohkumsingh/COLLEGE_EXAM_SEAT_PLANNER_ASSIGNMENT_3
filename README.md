# College Exam Seat Planner

A web-based application that allocates classrooms for college examinations using an optimized greedy approach.  
The system ensures the **minimum number of classrooms** are used while **prioritizing lower-floor rooms** for better accessibility.

---

## 🚀 Live Demo

- **Live URL:** https://your-vercel-link.vercel.app  
- **GitHub Repository:** https://github.com/your-username/exam-seat-planner  

> Replace the links above before final submission.

---

## 🎯 Objective

- Allocate exam seats efficiently
- Use the minimum number of classrooms
- Prefer lower-floor classrooms first
- Provide a clean and interactive user interface

---

## ✨ Features

- Add classroom details (Room ID, Capacity, Floor Number, Near Washroom)
- View all classrooms in a structured table
- Allocate exam seats using greedy optimization logic
- Highlight classrooms near washrooms
- Loading spinner during allocation
- Clear success and error messages
- Responsive and modern UI design

---

## 🧠 Allocation Logic (Greedy Approach)

1. Sort classrooms by floor number in ascending order
2. Allocate classrooms starting from the lowest floor
3. Deduct room capacity from total students
4. Stop once all students are allocated
5. If capacity is insufficient, display an error message

This approach ensures:
- Minimum number of classrooms are used
- Lower floors are always preferred

---

## 🏗️ Tech Stack

- **Frontend:** React JS
- **Styling:** CSS (Animations + Responsive Design)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```text
src/
 ├── components/
 │    ├── AddClassroom.js
 │    ├── ClassroomList.js
 │    ├── AllocateExam.js
 │    └── ResultPanel.js
 ├── App.js
 ├── index.js
 └── App.css
