import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: 'Fake News Detector',
  version: '1.0',
  description: 'Analyze articles for fake news using AI',
  action: {
    default_popup: 'popup.html', // will be generated from Popup.tsx
    default_icon: {
      "16": "icon.png",
      "48": "icon.png",
      "128": "icon.png"
    }
  },
  background: {
    service_worker: 'background.js',
    type: 'module' as const,
  },
  permissions: ['tabs', 'storage', 'scripting'],
  host_permissions: ['<all_urls>'],
})
