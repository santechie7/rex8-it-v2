import { promises as fs } from 'fs';
import path from 'path';
import { imageMap } from './imageMap';

export async function getAboutUs() {
  let data;

  // try {
  //   // Try API first (if URL is configured)
  //   if (process.env.NEXT_PUBLIC_API_URL) {
  //     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/aboutUs', {
  //       cache: 'no-store'
  //     });
      
  //     if (res.ok) {
  //       data = await res.json();
  //     }
  //   }
  // } catch (error) {
  //   console.log('API failed, using local JSON');
  // }

  // Fallback to local JSON if API failed
  if (!data) {
    const filePath = path.join(process.cwd(), 'src/public/aboutUs.json'); // Fixed: removed 'src/'
    const fileData = await fs.readFile(filePath, 'utf8');
    data = JSON.parse(fileData);
  }

  // Map image key to actual import
  if (data.storySection?.imageKey) {
    data.storySection.imageKey = imageMap[data.storySection.imageKey];
  }

  return data;
}
