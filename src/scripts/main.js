import {
  Guid,
  getRandomInt,
  Randomize
} from './doruk.js'

import {
  Items,
  Jobs,
  Careers,
  Achievements,
  Assignments
} from './collections.js'

import {
  Messages
} from './Messages.js'

import {
  Options as options
} from './Options.js'

var game = null;

$(function () {
  var app = new Vue({
    el: "#app",

    data: {
      stats: {},
      boardSubscriptionPrice: 10,
      title: Messages.GameName,
      turn: 1,
      hour: 1,
      day: 1,
      LoC: 0,
      money: 0,
      locPerTick: options.locPerTick,
      shop: [],
      achievements: Achievements,
      freelance: [],
      activeFreelance: [],
      availableCareers: [],
      workedDays: 0,
      books: {
        read: [],
        unread: []
      },
      skills: {
        SQL: 1,
        Programming: 1,
        WebDevelopment: 1
      },
      completedAchievements: [],
      career: null,
      careerAsignments: [],
      verbose: options.verbose,
      stats:{
        freelanceProjectsCompleted : 0,
        freelanceMoneyEarned:0,
        careerDays:0,
        careerAssignmentsCompleted:0,
        careerMoneyEarned:0,
        moneySpent:0
      },
      M : Messages //TODO: fix repetition
    },

    methods: {
      print: function () {},
      events: function () {
        this.turn++;
        this.hour++;
        this.hourlyEvents();

        if (this.turn % 24 == 0) {
          this.day++;
          this.hour = 1;
          this.dailyEvents();
          if (this.day % 7 == 0) {
            this.weeklyEvents();
          }
          if (this.day % 30 == 0) {
            this.monthlyEvents();
          }
        }
      },
      hourlyEvents: function () {
        game.boardPostExpiration();
        game.failingProjects();
        game.achievementCheck();
        game.freelanceJobMarket();
        game.sendCareerAsignments();
        game.failingAsignments();
      },
      dailyEvents: function () {
        if (this.career != null) {
          this.workedDays++;
          this.stats.careerDays++;
        }
        this.salary();
        this.log("a new day", true);
      },
      weeklyEvents: function () {
        this.log("a new week", true);
      },
      monthlyEvents: function () {
        this.log("a new month", true);
      },
      next: function () {
        game = this;
        setTimeout(function () {
          game.events();
          game.print();
          game.next();
          game.saveGame();
        }, options.interval);
      },
      writeCode: function () {
        this.LoC += this.locPerTick;
        this.descendLoC();
      },
      log: function (message, isVerbose = null) {
        if (isVerbose && this.verbose) {
          $("#messages").prepend(
            "<p>" + this.prettyTime() + ": " + message + "</p>"
          );
        } else if (isVerbose == null) {
          $("#messages").prepend(
            "<p>" + this.prettyTime() + ": " + message + "</p>"
          );
        }
      },
      prettyTime: function () {
        return this.M.PrettyTime.replace("[0]",this.day).replace("[1]",this.hour);
      },
      descendLoC: function () {

        if (this.careerAsignments.length != 0) {
          this.careerAsignments[0].LoC -= this.locPerTick;
          if (0 >= this.careerAsignments[0].LoC) {
            this.log(Messages.completedAssignment);
            this.careerAsignments.splice(0, 1);
            this.stats.careerAssignmentsCompleted++;
          }
        } else if (this.activeFreelance.length != 0) {
          this.activeFreelance[0].LoC -= this.locPerTick;
          if (0 >= this.activeFreelance[0].LoC) {
            //a freelance job is completed here
            this.log(
              Messages.completed_job.format(this.activeFreelance[0].price)
            );
            this.money += this.activeFreelance[0].price;
            this.stats.freelanceProjectsCompleted++;
            this.stats.freelanceMoneyEarned += this.activeFreelance[0].price;
            
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
        this.stats.moneySpent+=this.boardSubscriptionPrice;
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
            this.log(Messages.BoughtABook.replace("[0]",item.name));
          $("#storeMsg").html(Messages.BoughtABook.replace("[0]",item.name))
          }
          else{
            this.log(Messages.BoughtA.replace("[0]",item.name));
            $("#storeMsg").html(Messages.BoughtA.replace("[0]",item.name))
          }
          this.money -= item.price;
          this.stats.moneySpent+=item.price;
        }
        else{
          $("#storeMsg").html("not enough money")
        }
      },
      getJob: function () {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.freelance, function (a) {
          return a.id == elementId;
        });
        var item = items[0];
        this.activeFreelance.push(item);

        this.freelance.splice(this.freelance.indexOf(item), 1);
      },
      interview: function () {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.availableCareers, function (a) {
          return a.id == elementId;
        });
        var career = items[0];

        if (this.LoC >= career.LoC) {
          this.career = career;
          this.log(Messages.YouAreHired)
        } else {
          this.log(Messages.YouAreNotHired)
        }
      },
      read: function () {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.books.unread, function (a) {
          return a.id == elementId;
        });
        var book = items[0];

        book.readPages += 1;

        if (book.readPages == book.pages) {
          var index = this.books.unread.indexOf(book);
          this.books.read.push(book);
          this.books.unread.splice(index, 1);
        }

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
            game.log(Messages.FailedProject);
          }
        }
      },
      achievementCheck: function () {
        for (const key in Achievements) {
          if (Achievements.hasOwnProperty(key)) {
            const element = Achievements[key];
            if (!element.done && game.completedAchievements.indexOf(key) == -1) {
              if (element.hasOwnProperty('LoC') && game.LoC >= element.LoC) {
                game.completedAchievements.push(key);
                element.Do(game);
                game.log(Messages.Achievement + " : " + element.Description);
              }
            }
          }
        }
      },
      freelanceJobMarket: function () {
        if (game.achievements.boughtFreelanceSubscr.done) {
          var randInt = getRandomInt(1, 100);

          var job = null;
          for (const key in Jobs) {
            if (Jobs.hasOwnProperty(key)) {
              const jobx = Jobs[key];
              if (jobx.chances.min < randInt && jobx.chances.max > randInt) {
                job = jobx;
              }
            }
          }

          if (job !== null) {
            game.freelance.push(JSON.parse(JSON.stringify(job)));
          }
        }
      },
      saveGame: function () {
        localStorage.setItem("gameData", JSON.stringify(this.$data));
      },
      loadGamex: function () {
        game = this;
        var datax = localStorage.getItem("gameData");
        if (datax != null) {
          datax = JSON.parse(datax);
          Object.keys(this.$data).forEach(key => this.$data[key] = null);
          Object.entries(datax).forEach(entry => Vue.set(this.$data, entry[0], entry[1]));
        } else {
          this.log(Messages.welcome);
        }
      },
      sendCareerAsignments: function () {
        if ((this.hour == 8 || this.hour == 13) && game.career != null) {
          var randInt = getRandomInt(1, 100);

          var job = null;
          for (const key in Assignments) {
            if (Assignments.hasOwnProperty(key)) {
              const jobx = Assignments[key];
              if (jobx.chances.min < randInt && jobx.chances.max > randInt) {
                job = jobx;
              }
            }
          }

          if (job !== null) {
            game.careerAsignments.push(JSON.parse(JSON.stringify(job)));
          }
        }
      },
      failingAsignments: function () {
        for (let index = 0; index < game.careerAsignments.length; index++) {
          const element = game.careerAsignments[index];

          element.deadline--;
          if (element.deadline == 0) {
            game.careerAsignments.splice(index, 1);
            game.log(Messages.FailedAssignment);
          }
        }
      },
      salary: function () {
        if (this.career != null) {
          if (this.workedDays > 29 && this.workedDays % 30 == 0) {
            this.money += this.career.annualSalary / 12;
            this.money.careerMoneyEarned += this.career.annualSalary / 12;
            this.log(Messages.ReceivedPaycheck);
          }
        }
      }
    },


    mounted: function () {
      document.title = this.title;
      this.loadGamex();
      this.next(); // game loop starts here
    },

    computed: {
      printTime: function () {
        return this.prettyTime();
      },
      writeCodeLabel : function(){
        return this.M.WriteCodeButtonLabel.replace('[0]', this.locPerTick.toFixed(2));
      },
      boardSubscriptionPriceLabel : function(){
        return this.M.SubscribeToBoard.replace('[0]', this.boardSubscriptionPrice.toFixed(2));
      }
    }
  });
});
