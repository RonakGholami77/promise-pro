// function firstLogs() {
//   console.log(1);
//   console.log(2);
// }

// function middleLogs(callback) {
//   setTimeout(() => {
//     console.log(3);
//     callback();
//   }, 3000);
// }

// function lastLogs() {
//   console.log(4);
//   console.log(5);
// }

// firstLogs();
// middleLogs(lastLogs);

/////////////////////////////////////////

// function firstLogs() {
//   console.log(1);
//   console.log(2);
// }

// function middleLogs() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve();
//     }, 3000);
//   });
// }

// function lastLogs() {
//   console.log(4);
//   console.log(5);
// }

// firstLogs();
// middleLogs().then(() => lastLogs());

///////////////////////////////////////////////////

let listUsers = [
  { id: 1, name: "sara", password: "1234567" },
  { id: 2, name: "amin", password: "7654321" },
];

function addToList() {
  const newUser = {
    id: 3,
    name: "zahra",
    password: "0987654",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      listUsers.push(newUser);
      resolve();
    }, 3000);
  });
}

function getLogs() {
  console.log(listUsers);
}

// addToList();
// getLogs();

/////////////////////////////////////////////////

addToList().then(getLogs);

/////////////////////////////////////////////////

// async function orderResult() {
//   await addToList();
//   getLogs();
// }

// orderResult();
