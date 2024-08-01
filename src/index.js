import { loadAllTasks } from './allTasks';
import * as css from './style.css'
import { loadToDoForm, toggleTheme } from './themeToggle';
import { createToDo } from './createToDo';

//dummyData
const dummyData = `[
    {
        "title": "Finish Project Report",
        "desc": "Complete the final draft of the project report and send it for review.",
        "dueDate": "2024-08-15",
        "priority": "High",
        "notes": "Include data analysis and key findings.",
        "project": "Annual Report"
    },
    {
        "title": "Plan Marketing Campaign",
        "desc": "Develop a marketing strategy for the upcoming product launch.",
        "dueDate": "2024-09-01",
        "priority": "Medium",
        "notes": "Focus on social media and email marketing.",
        "project": "Product Launch"
    },
    {
        "title": "Update Website Content",
        "desc": "Refresh the website content to reflect new company offerings.",
        "dueDate": "2024-08-30",
        "priority": "Low",
        "notes": "Coordinate with the design team for new visuals.",
        "project": "Website Overhaul"
    },
    {
        "title": "Team Meeting",
        "desc": "Monthly team meeting to discuss progress and challenges.",
        "dueDate": "2024-08-05",
        "priority": "Medium",
        "notes": "Prepare a summary of last month’s achievements.",
        "project": "Team Management"
    },
    {
        "title": "Client Presentation",
        "desc": "Prepare and deliver a presentation for the upcoming client meeting.",
        "dueDate": "2024-08-20",
        "priority": "High",
        "notes": "Include case studies and client testimonials.",
        "project": "Client Relations"
    },
    {
        "title": "Design New Logo",
        "desc": "Create a new logo design for the company’s rebranding effort.",
        "dueDate": "2024-09-15",
        "priority": "High",
        "notes": "Collaborate with the branding team.",
        "project": "Rebranding"
    },
    {
        "title": "Draft Budget Proposal",
        "desc": "Prepare the budget proposal for the next fiscal year.",
        "dueDate": "2024-08-10",
        "priority": "Medium",
        "notes": "Review previous year’s expenses.",
        "project": "Finance"
    },
    {
        "title": "Organize Team Building Event",
        "desc": "Plan and execute a team-building event for staff.",
        "dueDate": "2024-09-10",
        "priority": "Low",
        "notes": "Book venue and arrange activities.",
        "project": "HR"
    },
    {
        "title": "Conduct User Testing",
        "desc": "Conduct user testing sessions for the new software feature.",
        "dueDate": "2024-08-25",
        "priority": "High",
        "notes": "Prepare test cases and gather feedback.",
        "project": "Software Development"
    },
    {
        "title": "Write Blog Post",
        "desc": "Write a blog post about the latest industry trends.",
        "dueDate": "2024-08-12",
        "priority": "Medium",
        "notes": "Include insights from recent industry reports.",
        "project": "Content Creation"
    },
    {
        "title": "Review Employee Performance",
        "desc": "Conduct performance reviews for all employees.",
        "dueDate": "2024-08-22",
        "priority": "Medium",
        "notes": "Prepare review forms and schedule meetings.",
        "project": "HR"
    }
]`

let data = JSON.parse(dummyData)

// selectors
const body = document.querySelector('#container')
const createToDoButton = document.querySelector("#content-title button.invertible-button")
const toDoTable = document.querySelector('#todo-list')
const themeButton = document.querySelector('#theme-toggle>button')
const homeButton = document.querySelector('#home>button')
const allTasksButton = document.querySelector('.option#all-tasks')

// inital load
body.innerHTML = ""
body.appendChild(loadAllTasks(data))

// DOM events
themeButton.addEventListener('click', toggleTheme)

homeButton.addEventListener('click', () => {
    body.innerHTML = ""
    body.appendChild(loadAllTasks(data))
})

allTasksButton.addEventListener('click', () => {
    body.innerHTML = ""
    body.appendChild(loadAllTasks(data))
})