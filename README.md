# GuessTheNumberGame

Absolutely! Below is your `README.md` written **in the exact same format and style** as the **HangOut Hub** one — just for your **GuessTheNumberGame** app.

---


# 🎯 GuessTheNumberGame - A Fun Number Guessing App

**GuessTheNumberGame** is a simple yet engaging number guessing game built with **React Native (Expo)**. It lets users guess a number between 1 and 100, while the app provides intuitive feedback and transitions. The design is polished with gradients and custom fonts to make it visually appealing and interactive! 🔢✨

---

## 🚀 **Key Features**

👉 **Start Game Screen** – Enter a number to start the game and challenge the system.\
👉 **Game Screen** – The app guesses your number and you confirm if it’s higher or lower.\
👉 **Game Over Screen** – Displays results including rounds taken and the correct number.\
👉 **Programmatic Screen Navigation** – Screens are switched based on internal state, no external navigation library used.\
👉 **Beautiful UI with Linear Gradient** – Enhanced appearance using `expo-linear-gradient`.\
👉 **Custom Fonts** – Sleek typography using OpenSans Regular & Bold fonts.\
👉 **Reusable Components** – Clean structure with reusable buttons, cards, and titles.

---

## 🛠 **Tech Stack**

- **React Native (Expo)** – Framework for building native apps using JavaScript.
- **Expo Linear Gradient** – For gradient backgrounds and UI styling.
- **React Hooks** – `useState` for state management.
- **Custom Components** – Clean modular design with reusable UI elements.
- **No React Navigation** – Navigation handled through conditional rendering in `App.js`.

---

## 📚 **Installation & Setup**

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/thesartajalam/GuessTheNumberGame.git  
cd GuessTheNumberGame  


### 2️⃣ **Install Dependencies**

```sh
npm install  
```

### 3️⃣ **Start the App in Development Mode**

```sh
npx expo start  
```

🔹 **Press `a`** to run on an Android emulator.\
🔹 **Press `w`** to open in a web browser.

### 4️⃣ **Build the APK for Android** *(Optional)*

```sh
eas build -p android --profile preview  
```

🔹 Download the generated APK and install it on your device.

---

## 📸 **Screenshots**

### **1. Start Game Screen**
Let the user input a number to start the guessing game.
![StartGameScreen](https://your-image-link.com/start-game-screen.png)

---

### **2. Game Screen**
The app makes a guess and user tells if it’s higher or lower.
![GameScreen](https://your-image-link.com/game-screen.png)

---

### **3. Game Over Screen**
Shows how many rounds the app took and gives a restart option.
![GameOverScreen](https://your-image-link.com/game-over-screen.png)

---

## 📚 **Project Structure**

```
/GuessTheNumberGame  
👉 /assets  
    └── /fonts  
        ├── OpenSans-Bold.ttf  
        └── OpenSans-Regular.ttf  

👉 /components  
    ├── /game  
    │   ├── GuessLogItem.js  
    │   └── NumberContainer.js  
    └── /ui  
        ├── Card.js  
        ├── InstructutionText.js  
        ├── PrimaryButton.js  
        └── Title.js  

👉 /constants  
    └── colors.js  

👉 /screens  
    ├── GameOverScreen.js  
    ├── GameScreen.js  
    └── StartGameScreen.js  

👉 App.js  
👉 app.json  
👉 babel.config.js  
👉 eas.json  
👉 package-lock.json  
👉 package.json  
👉 .gitignore  
👉 README.md  
```

---

## 🛡 **License**

This project was created as part of my learning journey in **React Native App Development using Expo**. Feel free to fork, explore, and enhance it in your own way!

---

## 📩 **Contact**

📧 **Email**: [sartajalam565@gmail.com](mailto:sartajalam565@gmail.com)\
📎 **GitHub**: [@thesartajalam](https://github.com/thesartajalam)

---

## **💡 Final Thoughts**  

**GuessTheNumberGame** is a fun way to demonstrate key React Native concepts like UI design, state management, and conditional rendering. Give it a try and enjoy guessing! 🎮📱  
```
