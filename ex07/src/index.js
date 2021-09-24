var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
  if (prop != "tracks" && value != "") {
    object[id][prop] = value;
    return object;
  }

  if (prop == "tracks" && !id.hasOwnProperty("tracks")) {
    object[id][prop] = [];
    object[id][prop][0] = value;
    return object;
  }

  if (prop == "tracks" && value != "") {
    object[id][prop].push(value);
    return object;
  }

  if (value == "") {
    delete object[id][prop];
    return object;
  }
}

console.log(updateRecords(collection, 2548, "artist", ""));

module.exports = updateRecords;
