# GuessTheNumberGame

🎯 Guess The Number Game - React Native App

Guess The Number is a fun and interactive React Native (Expo) game where the player thinks of a number and the app tries to guess it! Using smart logic, custom UI components, and a clean gradient-based interface, this app offers a smooth, engaging user experience without using any navigation library. 💡🎮

🚀 Key Features

👉 Interactive Game Flow – The app continuously refines guesses based on player hints ("higher" or "lower").👉 Linear Gradient Backgrounds – Beautiful transitions using expo-linear-gradient.👉 Dynamic Screens without Navigation Libraries – All screens (StartGameScreen, GameScreen, GameOverScreen) are conditionally rendered using useState.👉 Custom Font Support – Includes OpenSans fonts to enhance the visual appeal.👉 Reusable Components – Modular UI elements like PrimaryButton, Card, and InstructionText for consistency and cleaner code.👉 Responsive UI – Built using React Native core components (View, Text, Image) for optimal performance on all devices.

🛠 Tech Stack

React Native (Expo) – For building cross-platform mobile apps.

useState Hook – To manage game state.

Expo Linear Gradient – Adds elegant gradient backgrounds.

Expo Font – Loads custom fonts (OpenSans-Regular & OpenSans-Bold).

No React Navigation – Simple conditional screen switching using core logic.

📚 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/GuessTheNumberGame.git  
cd GuessTheNumberGame  

2️⃣ Install Dependencies

npm install  

3️⃣ Start the App

npx expo start  

🔹 Press a to run on an Android emulator.🔹 Press w to open in a web browser.

📸 Screenshots

(Add screenshots here to visually showcase Start Screen, Guess Screen, and Game Over Screen)

📂 Project Structure

/GuessTheNumberGame  
👉 /assets                     # Static assets  
    └── /fonts                # Custom fonts  
        ├── OpenSans-Bold.ttf  
        └── OpenSans-Regular.ttf  

👉 /components                 # Reusable components  
    ├── /game  
    │   ├── GuessLogItem.js  
    │   └── NumberContainer.js  
    └── /ui  
        ├── Card.js  
        ├── InstructionText.js  
        ├── PrimaryButton.js  
        └── Title.js  

👉 /constants  
    └── colors.js             # Centralized color theme  

👉 /screens                   # App screens  
    ├── GameOverScreen.js  
    ├── GameScreen.js  
    └── StartGameScreen.js  

👉 App.js                     # Root logic for game & screen control  
👉 app.json                   # Expo configuration  
👉 package.json               # Dependencies and scripts  
👉 README.md                  # Project documentation (this file)  
👉 .gitignore, eas.json, babel.config.js, etc.

🛡 License

This project was created as a React Native learning experience, showcasing concepts like custom components, state-driven screen rendering, and UI styling.Feel free to explore, fork, and build upon it for your own apps or learning!

📩 Contact

📧 Email: sartajalam565@gmail.com📎 GitHub: @thesartajalam

💡 Final Thoughts

Guess The Number Game is a great beginner-friendly app that helps reinforce concepts like state management, component reusability, and visual styling — all without needing complex navigation setups. Whether you're new to React Native or brushing up, this project offers valuable hands-on practice. 🎯📱✨
