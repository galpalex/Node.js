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

const deleteUser = (id) => {
  const users = loadUsers();
  const usersToKeep = users.filter((user) => user.id !== id);

  if (users.length > usersToKeep.length) {
    console.log(chalk.green.inverse(`User with id ${id} removed!`));
    saveUsers(usersToKeep);
  } else {
    console.log(chalk.red.inverse(`No user found with id ${id}`));
  }
};

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);

  if (user) {
    const index = users.findIndex((user) => user.id === id);
    name ? (user.name = name) : console.log("Name didn't changed");
    email ? (user.email = email) : console.log("Email didn't changed");
    users.splice(index, 1, user);
    console.log(chalk.green.inverse(`User with id ${id} updated!`));
    console.log("Name is: " + chalk.green.inverse(user.name));
    console.log("Email is: " + chalk.green.inverse(user.email));
    saveUsers(users);
  } else {
    console.log(chalk.red.inverse(`No user found with id ${id}`));
  }
};

const readUsers = () => {
  const users = loadUsers();

  console.log(chalk.inverse("All users: "));

  users.forEach((user) => {
    console.log("id is: " + chalk.inverse(user.id));
    console.log("Name is: " + chalk.inverse(user.name));
    console.log("Email is: " + chalk.inverse(user.email));
    console.log("----------------------------------------------------");
  });
};

const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === id);
  if (user) {
    console.log("id is: " + chalk.inverse(user.id));
    console.log("Name is: " + chalk.inverse(user.name));
    console.log("Email is: " + chalk.inverse(user.email));
  } else {
    console.log(chalk.red.inverse("User not found!"));
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
  createUser,
  readUser,
  readUsers,
  deleteUser,
  updateUser,
};
