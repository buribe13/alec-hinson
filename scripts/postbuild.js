const fs = require('fs');
const path = require('path');

// Move studio directory back after build
const studioPath = path.join(__dirname, '../app/studio');
const tempStudioPath = path.join(__dirname, '../.studio-temp');

if (fs.existsSync(tempStudioPath)) {
  console.log('Restoring studio directory...');
  fs.renameSync(tempStudioPath, studioPath);
  console.log('Studio directory restored successfully');
}

