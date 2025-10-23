# ReactJS Mini Projects Collection 🚀

This repository is a **comprehensive collection of ReactJS mini projects** built step-by-step to understand and practice key concepts of modern React development. Each project demonstrates an essential feature of React—from state management and hooks to routing, context API, Tailwind integration, Redux Toolkit, and more.

---

## 📁 Project Structure Overview

Each folder inside this repo represents an independent mini project. You can open any folder, run `npm install`, and start the development server to explore its implementation.

| Folder | Project Name | Description |
| :--- | :--- | :--- |
| `01Basics` | **React Basics** | Covers JSX, components, props, and rendering basics. |
| `02CustomReact` | **Custom React** | Demonstrates creating a minimal React-like setup manually using JS functions and `ReactDOM.render` equivalents. |
| `03Counter` | **Counter App** | Implements a simple counter using `useState()` and event handlers for increment/decrement/reset. |
| `04Tailwind_props` | **Tailwind Props Demo** | Shows TailwindCSS integration and passing dynamic props to styled components. |
| `05BgChanger` | **Background Color Changer** | Changes background color dynamically using state and event-driven updates. |
| `06PasswordGenerater` | **Password Generator** | Uses controlled components and `useEffect()` to generate random passwords based on user preferences. |
| `07CurrencyExchanger` | **Currency Converter** | Demonstrates API fetching, controlled inputs, and use of hooks for currency conversion. |
| `08ReactRouterDom` | **Routing Practice** | Implements multi-page navigation using `react-router-dom` v6 with `<BrowserRouter>`, `<Routes>`, and `<Link>`. |
| `09ContextApiForm` | **Context API Example** | Uses **React Context** to share form state globally without prop drilling. |
| `10ThemeSwitcher` | **Theme Switcher** | Implements a global dark/light mode toggle using **Context API and local storage** persistence. |
| `11ToDoList` | **To-Do App** | CRUD-based todo list using `useState()` and **local storage for persistence**. |
| `12TodoRTK` | **Redux Toolkit Todo App** | Enhances ToDoList with **Redux Toolkit** for predictable state management and cleaner reducers. |

---

## 🧠 Concepts Covered

This repository covers almost every foundational React concept:

* **JSX and Component Hierarchy**
* **Props and State**
* **Event Handling**
* **React Hooks** (`useState`, `useEffect`, `useContext`)
* Conditional Rendering
* **Context API**
* **React Router v6**
* Styling with **TailwindCSS**
* State Management with **Redux Toolkit (RTK)**
* **API Fetching** and Async Operations
* **Local Storage Persistence**

---

## 🛠️ Installation & Setup

Each mini project is standalone. To run any specific one:

1.  **Navigate to the project folder:**
    ```bash
    cd 03Counter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```

**Prerequisites:**

* **Node.js** (`>= 18`)
* `npm` or `yarn`

---

## 🌈 Highlights

* **🔹 `01Basics`**: Simple static components demonstrating JSX, props, and reusability.
* **🔹 `02CustomReact`**: Simulates how React works under the hood by manually rendering elements to the DOM.
* **🔹 `03Counter`**: Introduces `useState()` and button event handling. Clean functional components.
* **🔹 `04Tailwind_props`**: Explores TailwindCSS configuration and applying props-based styles dynamically.
* **🔹 `05BgChanger`**: Demonstrates dynamic UI updates and inline styling with user actions.
* **🔹 `06PasswordGenerater`**: A feature-rich password generator built with controlled inputs and `useEffect()`.
* **🔹 `07CurrencyExchanger`**: Fetches live rates via public APIs, includes dropdown selection and conversion logic.
* **🔹 `08ReactRouterDom`**: Teaches routing fundamentals, including nested routes and navigation components.
* **🔹 `09ContextApiForm`**: Global state sharing example—user form data managed via Context API.
* **🔹 `10ThemeSwitcher`**: Dark/light mode toggle across app with Context and local storage persistence.
* **🔹 `11ToDoList`**: CRUD operations on tasks; demonstrates `map`, filtering, and local persistence.
* **🔹 `12TodoRTK`**: A professional-grade todo app powered by **Redux Toolkit** (`createSlice`, `configureStore`).

---

## 🧩 Dependencies Used

Common across most projects:

* `react`, `react-dom`
* `vite` (for fast dev environment)
* `tailwindcss` (for styling)
* `react-router-dom` (for routing)
* `@reduxjs/toolkit`, `react-redux` (specifically in `12TodoRTK`)

---

## 🧑‍💻 Author

**Bhuvanesh Jagtap**
* 👨‍💻 Frontend Developer | React Enthusiast
* 📧 [GitHub Profile](https://github.com/your-github-profile) *(Assuming a link would be added here)*

---

## 📝 License

This project currently **does not include a license**.

* *For open-source sharing, consider adding an **MIT License** in the future.*

---

## 💡 Suggestions for Improvement

* Add a `LICENSE` file to define usage rights.
* Include demo GIFs/screenshots for each mini-project.
* Use `pnpm` or a monorepo setup for unified dependency management.
* Add a root `package.json` to simplify running sub-projects.

---

⭐ **Star the repo if you found it helpful!**

Learning React is best done hands-on — each folder here represents one step closer to mastering it.