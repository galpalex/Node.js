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

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
