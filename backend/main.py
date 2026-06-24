from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

songs = [
    {"id": 1, "name": "Shape of You", "artist": "Ed Sheeran"},
    {"id": 2, "name": "Believer", "artist": "Imagine Dragons"},
    {"id": 3, "name": "Perfect", "artist": "Ed Sheeran"},
]

@app.get("/")
def home():
    return {"message": "Music App Backend Running"}

@app.get("/songs")
def get_songs():
    return songs