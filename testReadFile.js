var fs = require('fs');

var proxyRulesFolder = "..\\ProxyRules"; // relative path

var sourceFile = proxyRulesFolder + "\\Quantumult\\adblock_hk.conf";

fs.readFile(sourceFile, 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');