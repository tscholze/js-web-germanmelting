#!/usr/bin/env node

const data = require('../data/creators.json');

// Example usage of the dataset
console.log('🎬 German Melting - 3D Printing Content Creators Dataset\n');

console.log(`📊 Total creators: ${data.metadata.totalCreators}`);
console.log(`🌍 Countries: ${data.metadata.countries.join(', ')}`);
console.log(`📅 Last updated: ${data.metadata.lastUpdated}\n`);

// Group creators by country
const creatorsByCountry = data.creators.reduce((acc, creator) => {
  if (!acc[creator.country]) {
    acc[creator.country] = [];
  }
  acc[creator.country].push(creator);
  return acc;
}, {});

// Display creators by country
Object.entries(creatorsByCountry).forEach(([country, creators]) => {
  console.log(`🇩🇪 ${country} (${creators.length} creators):`);
  creators.forEach(creator => {
    console.log(`  • ${creator.name} (@${creator.slug})`);
    console.log(`    ${creator.description}`);
    console.log(`    🛒 Shop: ${creator.shopUrl || 'Not available'}`);
    console.log('');
  });
});

// Find creators with shops
const creatorsWithShops = data.creators.filter(creator => creator.shopUrl);
console.log(`🛍️  Creators with shops: ${creatorsWithShops.length}/${data.metadata.totalCreators}`);

// Example: Search by slug
const searchSlug = '3d-druck-tom';
const foundCreator = data.creators.find(creator => creator.slug === searchSlug);
if (foundCreator) {
  console.log(`\n🔍 Found creator by slug "${searchSlug}":`);
  console.log(`   Name: ${foundCreator.name}`);
  console.log(`   YouTube: ${foundCreator.profiles.youtube}`);
  console.log(`   Instagram: ${foundCreator.profiles.instagram}`);
}