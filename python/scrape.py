# Import libraries
import requests
from bs4 import BeautifulSoup
import os

# Create a folder to store the images
os.mkdir("opfair_images")

# Get the HTML content of the website
url = "https://www.opfair.ca/2019-gallery"
response = requests.get(url)
html = response.text

# Parse the HTML with BeautifulSoup
soup = BeautifulSoup(html, "html.parser")

# Find all img tags that contain the image links
img_tags = soup.find_all("img")

# Loop through the img tags and download the images
for img in img_tags:
    # Get the image link from the src attribute
    img_link = img["src"]
    # Get the image name from the link
    img_name = img_link.split("/")[-1]
    # Create the full image path
    img_path = os.path.join("opfair_images", img_name)
    # Download the image and save it to the folder
    with open(img_path, "wb") as f:
        f.write(requests.get(img_link).content)
