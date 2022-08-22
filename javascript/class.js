class Monitor {
  // # is used to keep it private to the class only
  #name = "james";
  #surname = "oderinde";

  // Class initialization, first function to run
  constructor(name, surname) {
    this.type = "MonitorClass";
    this.fullname = name ?? this.#name + (surname ?? this.#surname);
  }

  greeting() {
    return "Welcome" + this.fullname;
  }
}

const MonitorObject = {
  name: "james",
  surname: "oderinde",
  greeting() {
    return "Welcome" + this.fullname;
  },
};

class greeting {
  constructor(name = "james", surname = "oderinde") {
    this.name = name;
    this.surname = surname;
    this.store = "";
    this.interval = {};

    return this.store;
  }
  changeCase() {
    this.casedLetter = this.name + this.surname.toUpperCase();
    return this;
  }
  getFirstLastLetters() {
    return this.casedLetter;
  }

  /**
   *
   * @param {number} length
   * @returns {string}
   */
  generateRandString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[}{}|";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   *
   * @param {string | number} id
   */
  createInterval(id) {
    this.interval[id] = setInterval(() => {
      document.write("<p>" + this.generateRandString(12) + "</p>");
    }, 3000);
  }

  /**
   *
   * @param {string | number} id
   * @description This get an id that has been assigned to an
   * and clear the interval that has the id given as param
   */
  cleanInterval(id) {
    if (this.interval.hasOwnProperty(id)) {
      clearInterval(this.interval[id]);
    }
  }
}

const MonitorFunc = (greetingMethod) => (name, surname) =>
  greetingMethod(name, surname);
