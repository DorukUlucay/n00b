/*
A lot of js functions brought together.
i wrote some and copied some

sources:
https://stackoverflow.com/a/4673436/1397858
*/

function getRandomInt(min, max) {
  if (min == undefined || min == null) min = 0;
  if (max == undefined || max == null) max = 1000000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Randomize(args) {
  return args[Math.floor(Math.random() * args.length)];
}

var Guid = {
  Random: function() {
    var seconds = new Date().getTime() / 1000;
    return (((1 + Math.random()) * seconds) | 0).toString(16).substring(1);
  },
  NewGuid: function() {
    var s1 =
      (Guid.Random() + Guid.Random()).slice(0, 8) +
      "-" +
      Guid.Random().slice(0, 4);
    var s2 = "-4" + Guid.Random().slice(0, 3);
    var s3 = Guid.Random().slice(0, 4);
    var s4 = (Guid.Random() + Guid.Random()).slice(0, 12);
    var guid = (s1 + s2 + "-" + s3 + "-" + s4).toLowerCase();
    return guid;
  },
  NewGuidWithoutDash: function() {
    var guid = Guid.NewGuid();
    return guid.split("-").join("");
  }
};

String.prototype.contains = function(substr) {
  return contains(this, substr);
};

function contains(str, substr) {
  if (str.indexOf(substr) === -1) {
    return false;
  } else {
    return true;
  }
}

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};
