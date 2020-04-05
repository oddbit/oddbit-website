const fs = require('fs')
const path = require('path')

/**
 * App environment.
 * `production` or `development`.
 */
const APP_ENV = process.env.APP_ENV;

// Handle copying robots.txt file
const assetsDir = path.join(__dirname, 'src', 'assets');
const robotsFileName = APP_ENV === 'production' ? 'robots.txt' : 'robots.dev.txt';
const robotsSource = path.join(assetsDir, robotsFileName);
const robotsDest = path.join(__dirname, 'static', 'robots.txt')
fs.copyFileSync(robotsSource, robotsDest);
console.log('robots.txt copied');
