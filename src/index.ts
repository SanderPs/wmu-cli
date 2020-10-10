import * as x from 'wmu';

const chalk = require('chalk');
const path = require('path');
const program = require('commander');

console.log(
	chalk.red('wmu-cli')
  );

program
  .version('0.0.1')
  .description("A CLI for WMU (Writers-Mark-Up)")
  .option('-f, --folder <loc>', 'Path to convert', '.')
  .option('-p, --page', 'Output full html (include html and body tags)')
  .parse(process.argv);

  if (program.page) {

  }
  
  console.log(`Folder: ${program.folder}`);
  
  console.log(x.transformFragment("hi **there**",{}));