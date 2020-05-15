#!/usr/bin/env node
var program = require('commander');
var mkObj = require('../lib/mkdirec');

var VERSION = require('../package.json').version;

program
   //  .name('create')
    .version(VERSION, '-v, --version')
    .usage('module <moduleName>')  //在help中告诉用户如何使用
    .command('module <moduleName>')  //定义命令行指令
    .description('新建模块')      //描述
    //  .alias('cre')                 //重命名，定义一个更短的指令
   //  .option('-n, -name <options>', 'module name', '--help')
    .action((moduleName) => {
       console.log("new module: " + moduleName);
       mkObj.createModule(moduleName);
    })
 // 自定义帮助信息
   .on('--help', function () {
        console.log('  Examples:');
        console.log('');
        console.log('    $ npcr module index');
        console.log();    
   });
   
   if (!process.argv.slice(2).length) {
      program.outputHelp();
      return;
   } 

// error on unknown commands
// program.on('command:*', function () {
//    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
//    process.exit(1);
// });

program.parse(process.argv);