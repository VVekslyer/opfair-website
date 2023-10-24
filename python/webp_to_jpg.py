import os
from PIL import Image

# Directory containing .webp files
webp_dir = './webps/'

# Directory to save .jpg files
jpg_dir = './jpgs/'

# Create jpgs directory if it doesn't exist
if not os.path.exists(jpg_dir):
    os.makedirs(jpg_dir)

# Loop through all files in the webp directory
for filename in os.listdir(webp_dir):
    # Check if file is an image with .webp extension
    if filename.endswith('.webp'):
        # Open image with PIL
        img = Image.open(webp_dir + filename)
        # Convert image to RGB (removes alpha if exists)
        img = img.convert('RGB')
        # Save image as .jpg in the jpgs directory
        img.save(jpg_dir + filename[:-5] + '.jpg', 'JPEG')
