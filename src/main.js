function getRandomInt(min, max) {
  if (min == undefined || min == null) min = 0;
  if (max == undefined || max == null) max = 1000000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  // then to call it, plus stitch in '4' in the third group
  guidx = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
  return guidx;
}


$(function () {
  var app = new Vue({
    el: "#app",

    data: {
      title: "Game",
      turn: 1,
      hour: 1,
      day: 1,
      LoC: 0,
      money: 0,
      locPerTick: 1,
      shop: [],
      achievements: {
        at_100: {
          done: false
        },
        at_200: {
          done: false
        },
        boughtFreelanceSubscr: {
          done: false
        },
        at_300: {
          done: false
        }
      },
      freelance: [

      ],
      activeFreelance: []
    },

    methods: {
      print: function () {},
      events: function () {
        this.turn++;
        this.hour++;
        if (this.turn % 24 == 0) {
          this.day++;
          this.hour = 1;
        }
      },
      next: function () {
        game = this;
        setTimeout(function () {
          game.events();


          if (!game.achievements.at_100.done && game.LoC >= 20) {
            game.log("since you look interested, your family gives you some money to get some wares")
            game.shop.push({
              id: 1,
              name: "mechanic keyboard",
              price: 20,
              boost: 0.1,
              bought: false
            })

            game.shop.push({
              id: 2,
              name: "22' lcd monitor",
              price: 100,
              boost: 0.3,
              bought: false
            })

            game.money += 100
            game.achievements.at_100.done = true;
          }

          if (!game.achievements.at_300.done && game.LoC >= 60) {
            game.achievements.at_300.done = true;
          }


          if (!game.achievements.at_200.done && game.LoC >= 40) {
            game.log("some friend talked about a freelance site. you may want to look at it")
            game.shop.push({
              id: 3,
              name: "subscription to freelance board",
              price: 10,
              boost: 0,
              bought: false
            })

            game.achievements.at_200.done = true;
          }

          for (let index = 0; index < game.freelance.length; index++) {
            const element = game.freelance[index];

            if (element.expires == 0) {
              game.freelance.splice(index, 1)
            } else {
              element.expires--;
            }

          }

          if (game.achievements.boughtFreelanceSubscr.done) {
            var randInt = getRandomInt(1, 100);
            if (randInt > 85) {
              game.freelance.push({
                title: "write me a script",
                price: 15,
                LoC: 25,
                deadline: 20,
                id: guid(),
                expires: 10
              })
            }

            if (randInt < 85 && randInt > 70 && game.achievements.at_300.done) {
              game.freelance.push({
                title: "make me a landing page",
                price: 25,
                LoC: 35,
                deadline: 30,
                id: guid(),
                expires: 15
              })
            }
          }


          for (let index = 0; index < game.activeFreelance.length; index++) {
            const element = game.activeFreelance[index];

            element.deadline--;
            if (element.deadline == 0) {
              game.activeFreelance.splice(index, 1)
              game.log("failed a project")
            }

          }


          game.print();
          game.next();
        }, 1000);
      },
      writeCode: function () {
        this.LoC += this.locPerTick;

        this.descendLoC()
      },
      log: function (message) {
        $("#messages").prepend("<p>" + this.prettyTime() + ": " + message + "</p>")
      },
      prettyTime: function () {
        return "Day " + this.day + " Hour " + this.hour;
      },
      descendLoC: function () {

        if (this.activeFreelance.length != 0) {

          this.activeFreelance[0].LoC -= this.locPerTick;
          if (0 >= this.activeFreelance[0].LoC) {
            this.log("completed a freelance project and got paid " + this.activeFreelance[0].price)
            this.money += this.activeFreelance[0].price
            this.activeFreelance.splice(0, 1)
          }
        }

      },
      buy: function () {

        var elementId = event.toElement.id;
        var items = jQuery.grep(this.shop, function (a) {
          return a.id == elementId
        });

        var item = items[0]

        if (this.money >= item.price) {

          this.locPerTick += item.boost;
          item.bought = true
          this.money -= item.price
          this.log("bought a " + item.name)

          if (item.id == 3) {
            game.achievements.boughtFreelanceSubscr.done = true;
          }
        }
      },
      getJob: function () {

        var elementId = event.toElement.id;
        var items = jQuery.grep(this.freelance, function (a) {
          return a.id == elementId
        });

        var item = items[0]

        this.activeFreelance.push(item)

        item.expires = 0;
      }
    },

    mounted: function () {
      document.title = this.title;
      this.next();
      this.log("you just got your cs degree. you may as well write some code while waiting for a job.")
    },

    computed: {
      printTime: function () {
        return this.prettyTime();
      }
    }
  });
});
