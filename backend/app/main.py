from fastapi import FastAPI
from pydantic import BaseModel
from app.model import predict_fake_news
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to extension's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Article(BaseModel):
    url: str
    text: str

@app.post("/check")
def check_article(article: Article):
    if not article.text:
        return {"label": "UNKNOWN", "score": 0.0}
    result = predict_fake_news(article.text[:1000])
    return result

