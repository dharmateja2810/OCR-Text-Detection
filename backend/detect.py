import cv2
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe' # replace this with the path of your exe file
def detect_text(file_path):
    #takes file patha as argument and reads the image using cv2 and extracts the text using pytesseract
    image = cv2.imread(file_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    ip_thresh, threshold_image = cv2.threshold(gray_image, 150, 255, cv2.THRESH_BINARY)
    resized_image = cv2.resize(threshold_image, None, fx=2, fy=2, interpolation=cv2.INTER_LINEAR)
    text = pytesseract.image_to_string(resized_image, lang='eng+hin')
    return text
