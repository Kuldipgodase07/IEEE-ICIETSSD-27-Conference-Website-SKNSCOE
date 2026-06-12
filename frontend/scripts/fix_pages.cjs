const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app/pages');
const files = [
  'Institution.tsx', 'Tracks.tsx', 'Dates.tsx', 'Speakers.tsx',
  'Publication.tsx', 'Submission.tsx', 'Registration.tsx', 'Committee.tsx',
  'Sponsors.tsx', 'Venue.tsx', 'FAQ.tsx', 'Contact.tsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove PageHero import
  content = content.replace(/import \{ PageHero \} from '\.\.\/components\/PageHero';\r?\n/, '');
  
  // Remove PageHero usage
  content = content.replace(/<PageHero[\s\S]*?\/>\r?\n/, '');
  
  // Add ID to root div
  const idName = file.replace('.tsx', '').toLowerCase();
  content = content.replace(/<div className="bg-background">/, `<div id="${idName}" className="bg-background pt-20">`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
