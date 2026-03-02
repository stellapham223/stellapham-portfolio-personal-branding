@echo off
echo Starting portfolio dev server...
start "" "http://localhost:3000"
python -m http.server 3000
