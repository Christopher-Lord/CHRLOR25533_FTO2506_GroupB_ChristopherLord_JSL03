# JSL03 Project: Console-Based Task Manager

## Project Description

This project involves creating a **simple task management system** where users can add **up to three new tasks** to an existing task array. Tasks are **stored as objects in an array**, each with a **unique incremental ID**. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on **array manipulation, user interaction via prompts and alerts, and console logging for task management**.

## Setup Instructions

1. Clone or download this repo
2. If downloaded, extract files and open index.html either in VSCode or straight in your browser
3. If opened in VSCode, use the Live Server extension to view the web page
4. Follow the prompts to start entering your tasks!
5. Open the dev tools console to view the output of your prompts

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- Multiple task entry system through prompts
- Able to enter task title, description and status
- All task info gets stored in an array, with a filter for only completed tasks
- Status validation system so no invalid status can be stored
- Display of all tasks as well as only completed tasks in the console

## Usage Examples

- Entering and storing multiple different tasks
- Viewing a list of all your tasks
- Keeping track of which tasks you have completed

## Usage instructions

- When the first prompt pops up, select 'OK' to start entering tasks
- Select cancel after entering any **full** task (Title, description and status) to stop the task entry
- Or continue to select 'OK' to keep entering tasks until you are alerted that your task board is full

## Important Prerequisite

1. Before starting this challenge, make sure you have reviewed and corrected your JSL02 project using the provided solution. Your prompts for entering task details should be fully functional and include proper validation checks to ensure accurate user input.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Key Objectives

### Logic & User Interaction

- Store tasks as **objects inside an array** for structured data management.
- Allow users to **add up to three new tasks** to the existing task list.
- Ensure each new task has a **unique incremental ID** based on the last task in the array.
- Prompt users to enter **task details (title, description, status)** and store them in an object.
- Alert users when they reach the task limit with the message:
  _"There are enough tasks on your board, please check them in the console."_
  Implement a **filter function** to display only tasks with the status `"done"`.
- Log **all tasks** in the console with a clear label for easy review.
- Log **only completed tasks** (status: `"done"`) in the console under a "Completed Tasks" label for quick reference.

## Code Quality & Maintainability

- Use meaningful variable and function names to ensure readability and maintainability.
- Follow consistent indentation and formatting to enhance code clarity.
- Include comments explaining key logic and functionality to support future modifications.

## Expected Outcome

A **structured and limited task management system** that enables users to add, review, and filter tasks efficiently while ensuring **clean, well-documented, and maintainable code.**

**Console Log of all and completed tasks**

![console log](./explainer-images/console%20log.png)
