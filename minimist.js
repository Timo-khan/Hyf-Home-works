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