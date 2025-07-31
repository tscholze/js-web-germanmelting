# German Melting Frontend

A modern Vue.js frontend showcasing German 3D printing content creators from the DACH region (Germany, Austria, Switzerland).

## Features

- 🇩🇪 **German Flag Theming**: Beautiful design using German flag colors (black, red, gold)
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🌐 **Multilingual**: German/English language support with i18n
- 🎯 **Creator Showcase**: Displays all creators from `../data/creators.json`
- 🧵 **Filament Vendors**: Comprehensive list of German filament manufacturers
- ⚡ **Modern Stack**: Built with Vue 3, Vite, and Vue i18n

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The frontend is built with:
- **Vue 3** with Composition API
- **Vite** for fast development and building
- **Vue i18n** for internationalization
- **Modern CSS** with CSS Grid and Flexbox for responsive layouts

## Data Source

The frontend automatically loads creator data from `../data/creators.json` and displays:
- Creator profiles with avatars, descriptions, and social media links
- Shop links where available
- Country flags and grouping
- German filament vendor information

## Theming

The design uses German flag colors throughout:
- Black (`#000000`)
- Red (`#DD0000`) 
- Gold (`#FFCE00`)

## Browser Support

Modern browsers supporting ES2020+ features.
