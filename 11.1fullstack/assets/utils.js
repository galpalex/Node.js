const fs = require("fs");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("./db/users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => user.id === +id);
  if (user) {
    return user;
  } else {
    throw Error(`User with id ${id} is not found!`);
  }
};

const addUser = (body) => {
  const users = loadUsers();

  if (isUserExist(body)) {
    throw Error(`Can't create a new user. The id ${body.id} already exists!`);
  }
  if (isNaN(+body.cash) || +body.cash < 0) {
    throw Error(
      `Can't create a new user. Illegal input of cash. Cash should be a positive number.`
    );
  }
  if (isNaN(+body.credit) || +body.credit < 0) {
    throw Error(
      `Can't create a new user. Illegal input of credit. Credit should be a positive number.`
    );
  }

  const newUser = { id: body.id, cash: body.cash, credit: body.credit };
  users.push(newUser);
  saveUsers(users);
  return stringToJson("new-client", newUser);
};

const stringToJson = (message, string) => {
  return JSON.stringify({ [message]: string });
};

const deleteUser = (params) => {
  const users = loadUsers();

  if (!isUserExist(params)) {
    throw Error(
      `Can't delete user with id ${params.id} because the id doesn't exists in the database.`
    );
  } else {
    const index = users.findIndex((user) => user.id === +params.id);
    users.splice(index, 1);
    saveUsers(users);
    return stringToJson(
      "user-deleted",
      `Successfully deleted user with id ${params.id} from the database.`
    );
  }
};

const deposite = (query) => {
  const users = loadUsers();

  if (!isUserExist(query)) {
    throw Error(
      `Can't deposite cash to user with id ${query.id} because the id doesn't exists in the database.`
    );
  } else {
    const index = users.findIndex((user) => user.id === +query.id);
    users[index].cash += +query.amount;
    saveUsers(users);
    return stringToJson(
      "update-deposite",
      `Successfully added ${query.amount} cash to deposit of user with id ${query.id}.`
    );
  }
};

const credit = (query) => {
  const users = loadUsers();

  if (!isUserExist(query)) {
    throw Error(
      `Can't update credit to user with id ${query.id} because the id doesn't exists in the database.`
    );
  } else {
    if (+query.credit < 0) {
      throw Error(`Credit ${query.credit} should be only positive number.`);
    }
    const index = users.findIndex((user) => user.id === +query.id);
    users[index].credit = +query.credit;
    saveUsers(users);
    return stringToJson(
      "update-credit",
      `New credit is ${query.credit}, to user with id ${query.id}.`
    );
  }
};

const withdraw = (query) => {
  const users = loadUsers();

  if (!isUserExist(query)) {
    throw Error(
      `Can't withdraw money to user with id ${query.id} because the id doesn't exists in the database.`
    );
  } else {
    const index = users.findIndex((user) => user.id === +query.id);
    if (+query.amount > users[index].cash + users[index].credit) {
      throw Error(`Client with id ${query.id} out of limit.`);
    }
    if (+query.amount > users[index].cash) {
      users[index].credit += users[index].cash - +query.amount;
      users[index].cash = 0;
    } else {
      users[index].cash -= +query.amount;
    }

    saveUsers(users);
    return stringToJson(
      "update-withdraw",
      `Client with id ${query.id} has withdrawed ${query.amount} cash.`
    );
  }
};

const transfer = (query) => {
  const users = loadUsers();

  if (!users.find((user) => user.id === +query.id_origin)) {
    throw Error(
      `Can't transfer money from user with id ${query.id_origin} because the id doesn't exists in the database.`
    );
  }
  if (!users.find((user) => user.id === +query.id_receiver)) {
    throw Error(
      `Can't transfer money to user with id ${query.id_receiver} because the id doesn't exists in the database.`
    );
  } else {
    const index = users.findIndex((user) => user.id === +query.id_origin);
    if (+query.amount > users[index].cash + users[index].credit) {
      throw Error(`Client with id ${query.id_origin} out of limit.`);
    }
    if (+query.amount > users[index].cash) {
      users[index].credit += users[index].cash - +query.amount;
      users[index].cash = 0;
    } else {
      users[index].cash -= +query.amount;
    }
    const indexReceiver = users.findIndex(
      (user) => user.id === +query.id_receiver
    );
    users[indexReceiver].cash += +query.amount;
    saveUsers(users);
    return stringToJson(
      "Transfer",
      `Client with id ${query.id_origin} has transfered to client with id ${query.id_receiver} cash ${query.amount}.`
    );
  }
};

const isUserExist = (query) => {
  const users = loadUsers();
  if (users.find((user) => user.id === +query.id)) {
    return true;
  } else {
    return false;
  }
};
const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("./db/users.json", dataJSON);
};

module.exports = {
  loadUsers,
  readUser,
  addUser,
  deleteUser,
  deposite,
  credit,
  withdraw,
  transfer,
};
