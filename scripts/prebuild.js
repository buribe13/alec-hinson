const fs = require('fs');
const path = require('path');

// Temporarily move studio directory out of app during build
const studioPath = path.join(__dirname, '../app/studio');
const tempStudioPath = path.join(__dirname, '../.studio-temp');

if (fs.existsSync(studioPath)) {
  console.log('Moving studio directory for static export...');
  fs.renameSync(studioPath, tempStudioPath);
  console.log('Studio directory moved successfully');
}

