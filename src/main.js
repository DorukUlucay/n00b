import { Messages, Items, Jobs, Careers, Achievements } from '/collections.js'

var game = null;

$(function () {
  var app = new Vue({
    el: "#app",

    data: {
      boardSubscriptionPrice: 10,
      title: Messages.GameName,
      turn: 1,
      hour: 1,
      day: 1,
      LoC: 0,
      money: 0,
      locPerTick: 10,
      shop: [],
      achievements: Achievements,
      freelance: [],
      activeFreelance: [],
      availableCareers: [],
      books: {
        read: [],
        unread: []
      }
    },

    methods: {
      print: function () { },
      events: function () {
        this.turn++;
        this.hour++;
        if (this.turn % 24 == 0) {
          this.day++;
          this.hour = 1;
        }

        game.boardPostExpiration();
        game.failingProjects();
        game.achievementCheck();
      },
      next: function () {
        game = this;
        setTimeout(function () {
          game.events();
          game.print();
          game.next();
        }, 1000);
      },
      writeCode: function () {
        this.LoC += this.locPerTick;
        this.descendLoC();
      },
      log: function (message) {
        $("#messages").prepend(
          "<p>" + this.prettyTime() + ": " + message + "</p>"
        );
      },
      prettyTime: function () {
        return "Day " + this.day + " Hour " + this.hour;
      },
      descendLoC: function () {
        if (this.activeFreelance.length != 0) {
          this.activeFreelance[0].LoC -= this.locPerTick;
          if (0 >= this.activeFreelance[0].LoC) {
            this.log(
              Messages.completed_job.format(this.activeFreelance[0].price)
            );
            this.money += this.activeFreelance[0].price;
            this.activeFreelance.splice(0, 1);
          }
        }
      },
      subscribe: function () {
        if (this.money < this.boardSubscriptionPrice) {
          this.log(Messages.not_enough_money);
        }
        this.achievements.boughtFreelanceSubscr.done = true;
        this.money -= this.boardSubscriptionPrice;
      },
      buy: function () {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.shop, function (a) {
          return a.id == elementId;
        });
        var item = items[0];
        if (this.money >= item.price) {
          if (item.boost !== undefined) {
            this.locPerTick += item.boost;
          }
          item.bought = true;

          if (item.type == "Book") {
            this.books.unread.push(item);
          }
          this.money -= item.price;
          this.log("bought a " + item.name);
        }
      },
      getJob: function () {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.freelance, function (a) {
          return a.id == elementId;
        });
        var item = items[0];
        this.activeFreelance.push(item);
        item.expires = 0;
      },
      interview: function () {
        //TODO:
        alert("you totally blowed it. you need to work more");
      },
      read: function () {
      },
      boardPostExpiration: function () {
        for (let index = 0; index < game.freelance.length; index++) {
          const element = game.freelance[index];

          if (element.expires == 0) {
            game.freelance.splice(index, 1);
          } else {
            element.expires--;
          }
        }
      },
      failingProjects: function () {
        for (let index = 0; index < game.activeFreelance.length; index++) {
          const element = game.activeFreelance[index];

          element.deadline--;
          if (element.deadline == 0) {
            game.activeFreelance.splice(index, 1);
            game.log("failed a project");
          }
        }
      },
      achievementCheck: function () {
        if (!game.achievements.at_100.done && game.LoC >= 20) {
          game.log(Messages.family_fund);
          game.shop.push(Items.mechanic_keyboard);
          game.shop.push(Items.lcd_22);
          game.shop.push(Items.lcd_27);
          game.shop.push(Items.coffee);
          game.money += 100;
          game.achievements.at_100.done = true;
        }

        if (!game.achievements.at_500.done && game.LoC >= 100) {
          game.log(Messages.get_fulltime);
          game.availableCareers.push(Careers.junior_dev);
          game.availableCareers.push(Careers.junior_front_dev);
          game.availableCareers.push(Careers.junior_back_dev);

          game.achievements.at_500.done = true;
        }

        if (!game.achievements.at_400.done && game.LoC >= 80) {
          game.log(Messages.get_books);
          game.shop.push(Items.sql_01);
          game.shop.push(Items.csharp);
          game.shop.push(Items.web_development);
          game.shop.push(Items.data_and_alg);
          game.achievements.at_400.done = true;
        }

        if (!game.achievements.at_600.done && game.LoC >= 100) {
          game.log(Messages.open_source);
          game.achievements.at_600.done = true;
        }

        if (!game.achievements.at_300.done && game.LoC >= 60) {
          game.achievements.at_300.done = true;
        }

        if (!game.achievements.at_200.done && game.LoC >= 40) {
          game.log(Messages.freelance_board);
          game.achievements.at_200.done = true;
        }

        if (game.achievements.boughtFreelanceSubscr.done) {
          var randInt = getRandomInt(1, 100);
          if (randInt > 85) {
            game.freelance.push(JSON.parse(JSON.stringify(Jobs.Script)));
          }

          if (randInt < 85 && randInt > 70 && game.achievements.at_300.done) {
            game.freelance.push(JSON.parse(JSON.stringify(Jobs.LandingPage)));
          }
        }
      }
    },

    mounted: function () {
      document.title = this.title;
      this.next(); // game loop starts here
      this.log(Messages.welcome);
    },

    computed: {
      printTime: function () {
        return this.prettyTime();
      }
    }
  });
});
