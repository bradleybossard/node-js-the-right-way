"use strict"
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified");
}

fs.watch(filename, function() {
  //let ls = spawn ('ls', ['-lh', filename]);
  //ls.stdout.pipe(process.stdout);
  let ls = spawn('ls', ['-lh', filename]);
  let output = ''; 
  ls.stdout.on('data', function(chunk) {
    output += chunk.toString();
  });

  ls.on('close', function() {
    let parts = output.split(/\s+/);
    console.dir([parts[0],parts[1], parts[2],parts[3],parts[4],parts[5], parts[8]]);
    console.log(output);
  });
});
console.log("Now watching " + filename + " for changes...");
