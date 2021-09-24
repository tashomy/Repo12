var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Swift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  var bool = false;
  var bool2 = false;
  var remember;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      bool = true;
      remember = i;
      break;
    }
  }
  if (!bool) {
    return "No such contact";
  }

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].hasOwnProperty(prop)) {
      bool2 = true;
      break;
    }
  }

  if (!bool2) {
    return "No such property";
  }

  return contacts[remember][prop];
}

console.log(lookUpProfile("John", "likes"));

module.exports = lookUpProfile;
