import { promises as fs } from 'fs';
import path from 'path';

export async function getServices() {
  // try {
  //   // Try API first
  //   const res = await fetch('https://your-api.com/api/services');
  //   if (res.ok) {
  //     const data = await res.json();
  //     return data.services || data;
  //   }
  // } catch (error) {
  //   console.log('API failed, using local data');
  // }

  // Fallback to local JSON
  const filePath = path.join(process.cwd(), 'src/public/services.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  const jsonData = JSON.parse(fileData);
  return jsonData;
}
