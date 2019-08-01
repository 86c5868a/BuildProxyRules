const fs = require('fs');
const readline = require('readline');

var proxyRulesFolder = "..\\ProxyRules"; // relative path
var sourceFile = proxyRulesFolder + "\\Quantumult\\adblock_hk.conf";

const readInterface = readline.createInterface({
    input: fs.createReadStream(sourceFile),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(line);

    await once(rl, 'close');
});
 
console.log('after calling readInterface');