
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
  "name": "Apple Status",
  "short_name": "Status",
  "theme_color": "#fff",
  "background_color": "#fff",
  "display": "standalone",
  "orientation": "portrait",
  "scope": "/",
  "start_url": "/"
 }
}
