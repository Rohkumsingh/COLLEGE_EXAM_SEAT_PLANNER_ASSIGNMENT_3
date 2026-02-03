📘 College Exam Seat Planner

A web-based application that allocates classrooms for college examinations using an optimized greedy approach.
The system ensures minimum number of classrooms are used while prioritizing lower-floor rooms for easy accessibility.

🚀 Live Demo

🔗 Live URL: https://your-vercel-link.vercel.app

🔗 GitHub Repository: https://github.com/your-username/exam-seat-planner

(Replace links before submission)

🎯 Objective

Allocate exam seats efficiently

Use the minimum number of classrooms

Prefer lower floor classrooms first

Provide a clean, interactive, and user-friendly interface

✨ Features

➕ Add classroom details (Room ID, Capacity, Floor, Near Washroom)

📋 View all classrooms in tabular format

🧮 Allocate exam seats using greedy logic

🚦 Real-time validation & error handling

🎨 Modern UI with animations

🔄 Loading spinner during allocation

🟢 Highlight classrooms near washrooms

📱 Fully responsive design

🧠 Allocation Logic (Greedy Approach)

Sort classrooms by floor number (ascending)

Select classrooms one by one

Deduct capacity from total students

Stop when all students are allocated

If seats are insufficient, show error message

This ensures:

Minimum number of classrooms

Lower floors are always preferred

🏗️ Tech Stack

Frontend: React JS

Styling: CSS (Animations + Responsive UI)

Deployment: Vercel

Version Control: Git & GitHub

📂 Project Structure
src/
 ├── components/
 │    ├── AddClassroom.js
 │    ├── ClassroomList.js
 │    ├── AllocateExam.js
 │    └── ResultPanel.js
 ├── App.js
 ├── index.js
 └── App.css

⚠️ Error Handling

Prevents invalid input (negative or empty values)

Shows meaningful messages for insufficient seats

Disables actions during allocation to avoid duplication

🎥 Demo Video

📹 2-minute demo video includes:

Adding classrooms

Viewing classroom list

Allocating exam seats

Displaying allocation result

📦 Deployment

The project is deployed on Vercel and accessible via a public URL.
All mandatory submission requirements are fulfilled.

✅ Submission Checklist

 GitHub Repository

 Live Deployment URL

 README.md

 Minimum 3 Git commits

 Demo Video

👨‍💻 Author

Rohit Kumar
B.Tech CSE (AIML)
ABES Engineering College