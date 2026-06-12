const fs = require('fs');
const path = require('path');

function replaceLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace <Link to={...} or <Link to="..." across multiple lines
  // We can just globally replace <Link with <a and to= with href=
  
  // Replace <Link with <a
  content = content.replace(/<Link/g, '<a');
  
  // Replace to= with href= (only where it was a Link, but doing it globally for "to=" in JSX might be risky, so let's be careful)
  // Actually, since we replaced <Link with <a, the to= is now inside <a ... to=...
  content = content.replace(/<a([^>]*?)to=/g, '<a$1href=');
  
  // Replace </Link> with </a>
  content = content.replace(/<\/Link>/g, '</a>');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

const navbar = path.join(__dirname, 'src/app/components/Navbar.tsx');
const footer = path.join(__dirname, 'src/app/components/Footer.tsx');

replaceLinks(navbar);
replaceLinks(footer);
