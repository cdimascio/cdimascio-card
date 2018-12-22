const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const data = {
  name: chalk.white.bold('                   CARMINE DIMASCIO'),
  handle: chalk.cyan('cdimascio'),
  work: chalk.white('Senior Software Engineer at IBM'),
  twitter: chalk.cyan('https://twitter.com/CarmineDiMascio'),
  github: chalk.cyan('https://github.come/cdimascio'),
  linkedin: chalk.cyan('https://linkedin.com/in/carmine.dimascio'),
  web: chalk.cyan('https://cdimascio.github.io'),
  npx: chalk.white('npx cdimascio'),
  labelWork: chalk.white.bold('   Work:'),
  labelWorkUrl: chalk.white.bold('           '),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('   Web:'),
  labelCard: chalk.white.bold('   Card:'),
  bio: chalk.white.yellow.bold('software engineer - musician - inventor - always learning'),
};

const hr = chalk.yellow('                   ================                   ');
const heading = `${data.name}`;
const working = `\n${data.labelWork}      ${data.work}`;
const twittering = `${data.labelTwitter}   ${data.twitter}`;
const githubing = `${data.labelGitHub}    ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}       ${data.web}`;
const carding = `${data.labelCard}      ${data.npx}`;
const bio = `\n${data.bio}`;

const card = [
  hr,
  heading,
  hr,
  bio,
  working,
  twittering,
  githubing,
  linkedining,
  webing,
  carding,
];

const output = card.join('\n');
console.log(chalk.green(boxen(output, options)));
