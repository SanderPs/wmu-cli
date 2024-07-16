import * as x from 'wmu';

const chalk = require('chalk');
const path = require('path');
//const program = require('commander');
import program from 'commander';

program
  .name("wmu")
  .usage("[global options] folder | file")
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description("A CLI for WMU (Writers-Mark-Up)")
  .option('-f, --folder <loc>', 'Path to convert', '.')
  .option('-p, --page', 'Output full html (include html and body tags)', 'page')
  .parse(process.argv);

console.log(
  chalk.red(program.help())
);

let opt = {} as x.IConfig;
if (program.page) {
  opt.format = 'page'
}

console.log(`Folder: ${program.folder}`);

console.log(x.transformFragment("hi **there**", {}));

