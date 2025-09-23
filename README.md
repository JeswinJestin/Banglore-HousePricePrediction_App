## 📂 GitHub Repo Details

### **Repository Name**

```
bangalore-home-price-prediction
```

### **Description**

A Machine Learning web app to predict Bangalore home prices.
Frontend built with HTML, CSS, JavaScript, and jQuery. Backend powered by Flask (Python).

---


## **Folder Structure**

```
bangalore-home-price-prediction/
│── backend/
│   ├── server.py            # Flask server
│   ├── util.py              # Helper functions for model
│   ├── artifacts/           # Trained model + columns JSON
│   │   ├── bangalore_home_prices_model.pickle
│   │   └── columns.json
│   └── requirements.txt     # Backend dependencies
│
│── frontend/
│   ├── index.html           # Main web page
│   ├── app.css              # Styling
│   ├── app.js               # Client-side logic
│   └── background-house.webp (optional image)
│
│── .gitignore
│── README.md
```

---

## **Backend Setup Instructions**

1. Clone repo:

   ```bash
   git clone https://github.com/<your-username>/bangalore-home-price-prediction.git
   cd bangalore-home-price-prediction/backend
   ```

2. Create virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate   # Linux/Mac
   venv\Scripts\activate      # Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run server:

   ```bash
   python server.py
   ```

---

## **Frontend Setup Instructions**

1. Open `frontend/index.html` in browser directly,
   OR run using a simple local server:

   ```bash
   cd frontend
   python -m http.server 8080
   ```

2. Make sure backend is running on port `5000`.

---

## **README.md Outline**

````markdown
# 🏠 Bangalore Home Price Prediction

A machine learning web app that predicts the price of homes in Bangalore.

## 🚀 Features
- Predicts home prices based on:
  - Area (sqft)
  - Bedrooms (BHK)
  - Bathrooms
  - Location
- Interactive UI with dark theme
- Real-time error validation
- Flask backend with trained ML model

## 📂 Project Structure
- `backend/` → Flask server + ML model
- `frontend/` → HTML, CSS, JS UI

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript (jQuery)
- **Backend:** Flask (Python)
- **ML Model:** scikit-learn

## ⚡ How to Run
### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python server.py
````

### Frontend

```bash
cd frontend
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## 👤 Author

Jeswin Thomas Jestin

## 📸 Screenshots

Here are some screenshots of the application:

![Screenshot 1](images/screenshot1.png)
![Screenshot 2](images/screenshot2.png)
