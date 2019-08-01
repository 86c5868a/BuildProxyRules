// Generate rules for Quantumult X

const fs = require('fs');
const readline = require('readline');

var proxyRulesFolder = "..\\..\\ProxyRules"; // relative path
var sourceFile = proxyRulesFolder + "\\Quantumult\\adblock_hk.conf";

fs.readFile(sourceFile, 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');



// const readInterface = readline.createInterface({
//     input: fs.createReadStream(sourceFile),
//     output: null,
//     console: false
// });

// var newRules = "";
// readInterface.on('line', function(line) {
// 	// Ignore empty lines
//     if (/^\s*$/.test(line)) {
//     	return;
//     }
// 	// Comments, starts with // or #
//     if (/^\s*(\/\/|#)/.test(line)) {
//         newRules += line + "\n";
//     	console.log("Comment: " + line);
//     	return;
//     }

//     // Hostname variable
//     if (/^hostname/i.test(line)) {
//         newRules += line + "\n";
//     	console.log("Hostname variable: " + line);
//     	return;
//     }

//     // Others
//     newRules += line + "\n";
//     console.log("Rules: " + line);

//     await once(rl, 'close');
// });

// console.log("newRules: " + newRules);
 
// console.log('after calling readInterface');

// fs.writeFile('mynewfile3.txt', newRules, function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// }); 