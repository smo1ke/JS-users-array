"use strict";

// 1.1 Для

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5 ? "women" : "men",
    `useremail${i}@gmail.com`,
    Math.random() > 0.5 ? "subscribed" : "don`t subscribed"
  );
  users.push(user);
}
//  прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

users.forEach((user) => {
  console.log("Полное имя >>", user.getFullName());
});

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
users
  .filter((user) => user.isMale === "women" && user.age >= 6 && user.age <= 18)
  .forEach((user) => console.log(user.getFullName()));

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com

console.log(
  ">> ",
  users.some((user) => user.email === "useremail99@gmail.com")
);

// 1.4 Проверить, все ли пользователи подписаны (subscribed).

console.log(
  ">> ",
  users.every((user) => user.isSubscribed === "subscribed")
);
