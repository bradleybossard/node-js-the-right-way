const fs = require('fs')
const filename = process.argv[2];
if (!filename) {
  throw Error("A file to watch must be specified");
}
fs.watch(filename, function() {
  console.log("File 'target.txt' was just changed");
});
console.log("Now watching target.txt for changes");
