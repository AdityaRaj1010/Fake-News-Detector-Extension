# 📰 Fake News Detector Browser Extension

A browser extension that detects fake news using an AI-powered backend and community voting.

---

## 🚀 Features

- 🧠 **AI-Powered Credibility Score**  
  Uses a locally hosted BERT model trained on FakeNewsNet to determine the credibility of online articles.

- 🤝 **Crowdsourced Fact-Checking**  
  Users can vote on whether an article is real or fake to improve community awareness.

- 🕓 **History Tracking**  
  View past analyzed articles and their verdicts.

- 🌐 **Works on Any News Website**  
  Seamlessly integrates with your browser to analyze articles in one click.

---

## 🛠️ Tech Stack

| Frontend (Extension) | Backend (API)     | ML Model              | Database    |
|----------------------|------------------|------------------------|-------------|
| React + Vite + CRXJS | Python + FastAPI | Transformers (BERT)    | Supabase 🔜 |

---

## 📁 Project Structure
```
your-project/
├── extension/ # React browser extension (Vite + CRXJS)
├── backend/ # FastAPI backend for ML inference
├── supabase/ # (Optional) Supabase config for storing history
└── README.md # This file
```

---

## 💡 How It Works

1. Extension extracts current tab's content
2. Sends article text to FastAPI backend
3. Backend runs model inference using BERT
4. Returns a credibility score
5. User can see score + vote on accuracy

---

## 🧪 Local Development

### 🖥️ Frontend (Browser Extension)

```bash
cd extension
npm install
npm run dev        # For development
npm run build      # For building extension to /dist
```
### 🧠 Backend (FastAPI)
```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
- You can expose the backend using Ngrok during development:
```
ngrok http 8000
```
- Then update the fetch URL in extension/src/Popup.tsx with the Ngrok URL (e.g. https://your-ngrok-url.ngrok-free.app/check).


## ☁️ Deployment
### 🧠 Backend (FastAPI)
Use Render.com to deploy the backend for free:
| Field          | Value                                              |
| -------------- | -------------------------------------------------- |
| Root Directory | `backend`                                          |
| Environment    | `Python`                                           |
| Build Command  | `pip install -r requirements.txt`                  |
| Start Command  | `uvicorn app.main:app --host 0.0.0.0 --port 10000` |
## 🧩 Extension

### Once the backend is deployed:

- Update the backend URL in Popup.tsx

- Build the extension:
```
npm run build
```
- Go to ``` chrome://extensions ```

- Enable **Developer Mode**

- Click **Load Unpacked**

- Select the ``` extension/dist/ ``` folder

## 📌 To-Do / Coming Soon
 - Save history of analyzed articles to Supabase

 - Add user authentication for voting

 - Improve model accuracy with larger datasets