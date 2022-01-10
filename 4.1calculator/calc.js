const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "sum of two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`sum is: ${argv.num1 + argv.num2} `);
  },
});

yargs.command({
  command: "sub",
  describe: "substract of two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`substract is: ${argv.num1 - argv.num2} `);
  },
});

yargs.command({
  command: "mult",
  describe: "multiply of two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`multiply is: ${argv.num1 * argv.num2} `);
  },
});

yargs.command({
  command: "pow",
  describe: "pow of number",
  builder: {
    num: {
      describe: "First number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`pow is: ${argv.num * argv.num} `);
  },
});

yargs.parse();
