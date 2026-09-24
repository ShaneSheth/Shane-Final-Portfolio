# How to Insert Your Own Photos

This guide will show you how to replace the placeholder images with your own photos in the portfolio website.

## Where to Find Image URLs

All images in the portfolio use the `ImageWithFallback` component and are marked with comments like:
```tsx
{/* TO INSERT YOUR OWN PHOTO: Replace the src URL below with your image URL */}
```

## Files to Update

### 1. Home Page (`/src/app/components/Home.tsx`)
- **Portrait Image** (Line ~62): Replace the URL in the `src` prop with your professional portrait photo

### 2. Projects Page (`/src/app/components/Projects.tsx`)
- **Project Images** (Line ~15-49): In the `projects` array, replace each project's `image` URL with your project photos
- You can also update the project titles, descriptions, and add/remove projects

### 3. About Page (`/src/app/components/About.tsx`)
- **Portrait Image** (Line ~21): Replace the main portrait URL
- **Hobby Images** (Line ~5-13): In the `hobbies` array, replace the image URLs with photos of your hobbies/interests

### 4. Project Detail Pages (`/src/app/components/ProjectDetail.tsx`)
- **Project Detail Images** (Line ~15-60): In the `projectDetails` object, replace the `images` array URLs for each project

## How to Replace an Image

### Option 1: Using Image URLs (Recommended)
If your images are already hosted online (e.g., on Google Drive, Dropbox, or an image hosting service):

1. Get the direct image URL
2. Find the component file listed above
3. Locate the comment indicating where to insert your photo
4. Replace the existing URL with your image URL

Example:
```tsx
// Before
<ImageWithFallback
  src="https://images.unsplash.com/photo-1627776880991-808c5996527b..."
  alt="Shane Sheth"
  className="w-full h-full object-cover"
/>

// After
<ImageWithFallback
  src="https://your-image-hosting-service.com/your-photo.jpg"
  alt="Shane Sheth"
  className="w-full h-full object-cover"
/>
```

### Option 2: Using Local Images
If you want to use images from your computer:

1. Create a folder at `/public/images/` in your project
2. Copy your images to that folder (e.g., `portrait.jpg`, `project1.jpg`, etc.)
3. Reference them using `/images/filename.jpg`

Example:
```tsx
<ImageWithFallback
  src="/images/portrait.jpg"
  alt="Shane Sheth"
  className="w-full h-full object-cover"
/>
```

## Image Recommendations

### Portrait Photos (Home & About pages)
- **Aspect ratio**: 3:4 (portrait orientation)
- **Resolution**: At least 800x1200 pixels
- **File format**: JPG or PNG
- **Background**: Clean, professional background

### Project Photos
- **Aspect ratio**: 4:3 (landscape orientation)
- **Resolution**: At least 1200x900 pixels
- **File format**: JPG or PNG
- **Quality**: High-quality images that clearly show your work

### Hobby Photos (About page)
- **Aspect ratio**: 1:1 (square)
- **Resolution**: At least 600x600 pixels
- **File format**: JPG or PNG

## Tips
- Use high-quality images for the best professional appearance
- Ensure all images are properly lit and in focus
- Keep file sizes reasonable (under 2MB per image) for fast loading
- Make sure you have the rights to use all images
- Use consistent image quality across the portfolio

## Need Help?
If you're having trouble with images, check that:
1. The image URL is correct and accessible
2. The image file format is supported (JPG, PNG, WebP)
3. The image is not too large (compress if needed)
4. For local images, they're in the `/public/images/` folder
