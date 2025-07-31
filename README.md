# js-web-germanmelting

A curated dataset of German, Austrian, and Swiss 3D printing content creators.

## Data Structure

The dataset is stored in `data/creators.json` and contains information about content creators focused on 3D printing from the DACH region (Germany, Austria, Switzerland).

### Schema

Each creator entry contains the following fields:

- `slug`: URL-friendly identifier based on the creator's name
- `name`: Display name of the content creator
- `description`: Brief description of the creator's content and focus
- `logoUrl`: URL to the creator's logo or profile image
- `profiles`: Object containing social media profile URLs
  - `tiktok`: TikTok profile URL
  - `instagram`: Instagram profile URL  
  - `youtube`: YouTube channel URL
- `shopUrl`: Optional URL to the creator's shop (null if not available)
- `country`: Creator's country (Germany, Austria, or Switzerland)

### Usage

```javascript
// Load the dataset
const data = require('./data/creators.json');

// Access creators array
const creators = data.creators;

// Filter by country
const germanCreators = creators.filter(creator => creator.country === 'Germany');

// Find by slug
const creator = creators.find(c => c.slug === '3d-druck-tom');
```

## Contributing

To add new creators or update existing information, please ensure the JSON structure follows the established schema.

## Examples

Run the demo script to see the dataset in action:

```bash
node examples/demo.js
# or using npm
npm run demo
```

This will display all creators grouped by country, show statistics, and demonstrate how to search and filter the data.

You can also validate the JSON structure:

```bash
npm run validate
```