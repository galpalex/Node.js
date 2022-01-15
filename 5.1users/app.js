const yargs = require("yargs");
const users = require("./users.js");
const uniqid = require("uniqid");

yargs.command({
  command: "create",
  describe: "Create a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: false,
      default: uniqid(),
    },
    name: {
      describe: "User Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User Email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.createUser(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "update",
  describe: "Update a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      default: "string",
    },
    name: {
      describe: "User Name",
      demandOption: false,
      type: "string",
    },
    email: {
      describe: "User Email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "read",
  describe: "Read user data",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

yargs.command({
  command: "delete",
  describe: "delete user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.deleteUser(argv.id);
  },
});

yargs.command({
  command: "readAll",
  describe: "Read user data",
  handler(argv) {
    users.readUsers(argv.id);
  },
});

yargs.parse();
