from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from detect import detect_text

app = Flask(__name__)
CORS(app)


UPLOAD_FOLDER = './public'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/public', methods=['POST'])
def upload_images():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    files = request.files.getlist('file')
    image_paths = []

    for file in files:
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        if file:
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(filepath)
            image_paths.append(filepath)
            text = detect_text(filepath)
            return jsonify({'text':text,'files': image_paths}), 200

if __name__ == '__main__':
    app.run(debug=True)
