# Getting Started with ReactJS - Course Code Repository

Welcome to the code repository for the "Getting Started with ReactJS" course! This repository contains the example code and completed projects developed throughout the lessons.

## Course Overview

This course provides a foundational understanding of ReactJS, covering essential concepts needed to start building modern web user interfaces. We explore topics ranging from JSX and components to state management with Hooks, event handling, styling, and more, culminating in practical projects.

## Course Outline & Branches

This repository uses branches to separate the starting code and completed code for each relevant lesson and project.

- **`main`**: May contain the final state of the last project or a base setup.
- **`lesson-X`**: Contains the starting code or state _before_ the concepts of Lesson X are applied.
- **`lesson-X-completed`**: Contains the completed code _after_ the concepts of Lesson X have been implemented.
- **`project-X-<name>`**: Contains the starting code for Project X.
- **`project-X-completed`**: Contains the completed code for Project X.

**Lessons with Code Branches:**

- **Lesson 4: JSX**
  - Start: [`lesson-4`](../../tree/lesson-4)
  - Completed: [`lesson-4-completed`](../../tree/lesson-4-completed)
- **Lesson 5: Components (Functional vs Class)**
  - Start: [`lesson-5`](../../tree/lesson-5)
  - Completed: [`lesson-5-completed`](../../tree/lesson-5-completed)
- **Lesson 6: Props**
  - Start: [`lesson-6`](../../tree/lesson-6)
  - Completed: [`lesson-6-completed`](../../tree/lesson-6-completed)
- **Lesson 7: State (`useState` Intro)**
  - Start: [`lesson-7`](../../tree/lesson-7)
  - Completed: [`lesson-7-completed`](../../tree/lesson-7-completed)
- **Lesson 8: Lifecycle & `useEffect` Intro**
  - Start: [`lesson-8`](../../tree/lesson-8)
  - Completed: [`lesson-8-completed`](../../tree/lesson-8-completed)
- **Lesson 9: `useState` Deep Dive**
  - Start: [`lesson-9`](../../tree/lesson-9)
  - Completed: [`lesson-9-completed`](../../tree/lesson-9-completed)
- **Lesson 10: `useEffect` Deep Dive**
  - Start: [`lesson-10`](../../tree/lesson-10)
  - Completed: [`lesson-10-completed`](../../tree/lesson-10-completed)
- **Lesson 11: Forms & Controlled Components**
  - Start: [`lesson-11`](../../tree/lesson-11)
  - Completed: [`lesson-11-completed`](../../tree/lesson-11-completed)
- **Lesson 12: Event Handling**
  - Start: [`lesson-12`](../../tree/lesson-12)
  - Completed: [`lesson-12-completed`](../../tree/lesson-12-completed)
- **Lesson 13: Conditional Rendering**
  - Start: [`lesson-13`](../../tree/lesson-13)
  - Completed: [`lesson-13-completed`](../../tree/lesson-13-completed)
- **Lesson 14: Lists & Keys**
  - Start: [`lesson-14`](../../tree/lesson-14)
  - Completed: [`lesson-14-completed`](../../tree/lesson-14-completed)
- **Lesson 15: Basic Styling**
  - Start: [`lesson-15`](../../tree/lesson-15)
  - Completed: [`lesson-15-completed`](../../tree/lesson-15-completed)

**Projects:**

- **Project 1: Data Display App**
  - Start: [`project-1-data-display`](../../tree/project-1-data-display)
  - Completed: [`project-1-completed`](../../tree/project-1-completed)
- **Project 2: To-do List App**
  - Start: [`project-2-todo-list`](../../tree/project-2-todo-list)
  - Completed: [`project-2-completed`](../../tree/project-2-completed)

_(Note: Lessons 1-3 primarily covered concepts and environment setup, hence no specific code branches.)_

## How to Use This Repository

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```
2.  **Explore Branches:** Use `git branch -a` to see all available branches.
3.  **Checkout a Lesson/Project:**
    - To see the starting code for a lesson (e.g., Lesson 11):
      ```bash
      git checkout lesson-11
      ```
    - To see the completed code for a lesson (e.g., Lesson 11):
      ```bash
      git checkout lesson-11-completed
      ```
    - Follow the same pattern for projects.
4.  **Compare Changes:** You can compare the `lesson-X` branch with the `lesson-X-completed` branch to see exactly what code was added or modified during that lesson.

## Prerequisites

Before running the code locally, ensure you have the following installed (as covered in Lesson 3):

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js) or **Yarn** (optional)
- A **Code Editor** (VS Code recommended)

## Running Locally

Most examples and projects in this repository were likely set up using **Vite**. To run them locally:

1.  **Checkout** the desired branch (e.g., `git checkout lesson-11-completed`).
2.  **Install Dependencies:** If you haven't already, or if dependencies changed, run:
    ```bash
    npm install
    # OR if using yarn
    # yarn install
    ```
3.  **Start the Development Server:**
    ```bash
    npm run dev
    # OR if using yarn
    # yarn dev
    ```
4.  Open your web browser and navigate to the local URL provided (usually `http://localhost:5173` or similar).

---

Happy Coding!
