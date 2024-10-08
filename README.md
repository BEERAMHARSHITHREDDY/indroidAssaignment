# Indroyd-Assignment
Indroyd Assignment
# Quiz App with QR Code

This is a simple **Quiz Application** built with **React**. The quiz allows users to answer multiple-choice questions, and at the end of the quiz, a QR code is generated displaying the user's score.

## Features

- Multiple-choice quiz with 5 questions.
- User can input their name before starting the quiz.
- Displays feedback for correct or incorrect answers.
- Shows the user's score after completing the quiz.
- Generates a **QR code** displaying the score at the end of the quiz.
- Displays congratulatory messages for correct answers on the computer screen.

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **qrcode.react**: React library used for generating QR codes.

## Getting Started

### Prerequisites

To run this project, you will need to have the following installed:

- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/quiz-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd quiz-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The app will now be running locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter your name in the input box to start the quiz.
2. Answer the multiple-choice questions. After each answer, feedback will be provided.
3. At the end of the quiz, your total score will be displayed along with a **QR code**.
4. Scan the QR code to view your score.
![Snap_Count](https://github.com/user-attachments/assets/b84278ff-6cf9-47c4-82d6-4ea5e93f2da5)

![Snap_Count](https://github.com/user-attachments/assets/fd89dd9a-e89b-40b7-b6f1-25e6cd781210)


## Project Structure

```bash
├── public
│   └── index.html           # Main HTML file
├── src
│   ├── App.js               # Main React component
│   └── index.js             # Entry point for the React app
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts

