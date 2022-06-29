const storedUsers = [
  {
    avatar: "./images/avatar-01.png",
    firstName: "Jane",
    lastName: "Doe",
    eMail: "JaneDoe@yahoo.com",
  },
  {
    avatar: "./images/avatar-02.png",
    firstName: "Ivone",
    lastName: "Simpson",
    eMail: "i_simpson@yahoo.com",
  },
  {
    avatar: "./images/avatar-03.png",
    firstName: "George",
    lastName: "Smith",
    eMail: "smithG@yahoo.com",
  },
  {
    avatar: "./images/avatar-04.png",
    firstName: "Mario",
    lastName: "Larson",
    eMail: "ml89@gmail.com",
  },
  {
    avatar: "./images/avatar-05.png",
    firstName: "Mila",
    lastName: "Brown",
    eMail: "MilaB@yahoo.com",
  },
  {
    avatar: "./images/avatar-06.png",
    firstName: "John",
    lastName: "Doe",
    eMail: "JohnDoe@gmail.com",
  },
];

const users = storedUsers;

let HtmlText = users.forEach((user) => addUserToList(user));

function addUserToList(user) {
  const list = document.getElementById("user-list");

  const row = document.createElement("tr");

  row.innerHTML = `
      <td><img src="${user.avatar}" /></td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.eMail}</td>
      `;

  list.appendChild(row);
}

// Store class

// Event to display user
// document.addEventListener("DOMContentLoaded", displayUsers);
