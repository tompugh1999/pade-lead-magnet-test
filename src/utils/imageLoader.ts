export const getImageUrl = (imageName: string) => {
  // For development, images are served from the public directory
  if (import.meta.env.DEV) {
    return `/images/${imageName}`;
  }
  
  // For production, images are served from Netlify Large Media
  return `/.netlify/large-media/images/${imageName}`;
};