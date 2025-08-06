from transformers import pipeline
fake_news_detector = pipeline("text-classification", model="mrm8488/bert-tiny-finetuned-fake-news-detection")

def predict_fake_news(text: str):
    result = fake_news_detector(text)[0]
    return {"label": result["label"], "score": result["score"]}
