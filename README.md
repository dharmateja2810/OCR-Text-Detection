# OCR Text Detection

## Description
OCR Text Detection is a web application that utilizes Optical Character Recognition (OCR) to detect and extract text from images. The application features a React frontend and a Flask backend, allowing users to upload images and receive extracted text as output.

## Features
- Upload images to detect text.
- View extracted text in a user-friendly interface.
- Built with React for the frontend and Flask for the backend.

## Technologies Used
- **Frontend:**
  - React
  - Vite

- **Backend:**
  - Flask
  - OpenCV (for image processing)
  - pytesseract (for OCR)

## Installation

### Prerequisites
- Python 3.x
- Node.js and npm
- Tesseract OCR: Download from [this link](https://github.com/UB-Mannheim/tesseract/releases/download/v5.4.0.20240606/tesseract-ocr-w64-setup-5.4.0.20240606.exe). After installation, replace the path in the `detect.py` file located in the `backend` folder with your installation path.

### Clone the Repository
```bash
git clone https://github.com/dharmateja2810/OCR-Text-Detection.git
cd OCR-Text-Detection
```

### Set Up the Backend
```bash
cd backend
python -m venv venv
# Activate the virtual environment
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate     # For Windows
pip install -r requirements.txt
python app.py
```

### Set Up the Frontend
```bash
cd ..
cd frontend
npm install
npm run start
```

## Usage
1. Open your web browser and go to `http://localhost:3000` to access the frontend.
2. Upload an image file containing text.
3. View the extracted text displayed on the screen.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
