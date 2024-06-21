# TaskMate

TaskMate is a simple and intuitive task management application built with React. It allows users to add, edit, and delete tasks, providing a straightforward way to manage daily to-dos. The app also supports theme selection, allowing users to customize the look and feel of the application.

## Features

- **Add Task**: Users can add new tasks to their task list.
- **Edit Task**: Existing tasks can be edited to update their content.
- **Delete Task**: Users can delete tasks from their list.
- **Theme Selection**: Users can select different themes to personalize the application's appearance.

## Components

### App Component

The main component of the TaskMate application. It handles the overall state management for the task list and individual tasks, leveraging React's `useState` and `useEffect` hooks. It also integrates the Header, AddTask, and ShowTask components to build the complete user interface.

### Header Component

This component allows users to select and apply different themes to the application. The selected theme is stored in `localStorage` and applied across the app. It demonstrates how to manage application-wide settings using React's state and side-effects.

### AddTask Component

The AddTask component provides a form for users to add new tasks or update existing ones. It handles form submissions and updates the task list state accordingly. This component illustrates form handling and state updates in React.

### ShowTask Component

The ShowTask component displays the list of tasks. It provides functionality to edit and delete individual tasks, as well as a button to clear all tasks. This component demonstrates list rendering and event handling in React.

## How TaskMate Helps in Learning React Fundamentals

- **State Management**: TaskMate uses React's `useState` hook to manage the state of the task list and individual tasks.
- **Side Effects**: The application demonstrates the use of the `useEffect` hook to perform side effects such as saving to `localStorage` and applying themes.
- **Component Composition**: TaskMate is built by composing multiple components, showcasing how to break down an application into reusable parts.
- **Event Handling**: The app includes various event handlers for adding, editing, and deleting tasks, as well as for theme selection.
- **Conditional Rendering**: The application conditionally renders different themes and task states, demonstrating dynamic UI updates based on state.

