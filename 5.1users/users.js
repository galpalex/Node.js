const fs = require("fs");
const chalk = require("chalk");

const createUser = (id, name, email) => {
  const users = loadUsers();
  const duplicateUser = users.find((user) => user.id === id);

  if (!duplicateUser) {
    users.push({
      id: id,
      name: name,
      email: email,
    });
    saveUsers(users);
    console.log(chalk.green.inverse("New user created!"));
  } else {
    console.log(chalk.red.inverse("The user already exists, id: ", id));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  createUser: createUser,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
