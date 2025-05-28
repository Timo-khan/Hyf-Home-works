//Parsing arguments using Minimist module
1
2
3
4
5
6
'use strict';
 
const args = require('minimist')(process.argv.slice(2));
 
console.log(args.i);
console.log(args.n);


//code to execute "$node minimist.js –i node –n 15"