const fs = require('fs');
// Why - https://www.netlify.com/blog/2020/04/07/creating-better-more-predictable-redirect-rules-for-spas/
fs.writeFile('build/_redirects', '/*   /index.html   200', function (err) {
  if (err) return console.log(err);
  console.log('✨ Successfully added redirects file.');
});
