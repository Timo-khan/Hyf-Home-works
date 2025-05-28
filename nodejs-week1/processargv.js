//Parse Arguments using process.argv
1
2
3
4
'use strict';
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

//code to execute "$node processargv.js I am Node"