var Messages = {
  GameName: "Code For You Life",
  welcome:
    "you just got your cs degree. you may as well write some code while waiting for a job.",
  family_fund:
    "since you look interested, your family gives you some money to get some wares",
  freelance_board:
    "some friend talked about a freelance site. you may want to look at it",
  completed_job: "completed a freelance project and got paid {0}$",
  get_books:
    "you may need to learn a few things more before taking complex jobs. buy a few books from store.",
  open_source:
    "a friend talked about an open source project. it will be more practice and maybe some networking.",
  get_fulltime:
    "a friend found an internship. may be you can put your cv on that career site.",
  not_enough_money: `not enough money. your ${Randomize([
    "father",
    "mother"
  ])} throws in some. but you need to pay back.`
};

var Items = {
  mechanic_keyboard: {
    id: 1,
    type: "Hardware",
    name: "mechanic keyboard",
    price: 20,
    boost: 0.1,
    bought: false
  },
  lcd_22: {
    id: 2,
    type: "Hardware",
    name: "22' lcd monitor",
    price: 100,
    boost: 0.3,
    bought: false
  },
  coffee: {
    id: 4,
    type: "Hardware",
    name: "coffee machine",
    price: 45,
    boost: 0.2,
    bought: false
  },
  lcd_27: {
    id: 5,
    type: "Hardware",
    name: "27' lcd monitor",
    price: 200,
    boost: 0.4,
    bought: false
  },
  sql_01: {
    id: 6,
    type: "Book",
    name: "SQL 101",
    price: 15,
    bought: false,
    skills: {
      SQL: 1
    }
  },
  data_and_alg: {
    id: 7,
    type: "Book",
    name: "Data Structures and Algorithms",
    price: 20,
    bought: false,
    skills: {
      Programming: 1
    }
  },
  web_development: {
    id: 8,
    type: "Book",
    name: "Web Design & Development",
    price: 20,
    bought: false,
    skills: {
      WebDevelopment: 1
    }
  },
  csharp: {
    id: 9,
    type: "Book",
    name: "C# & .NET",
    price: 20,
    bought: false,
    skills: {
      Programming: 1
    }
  }
};

var Jobs = {
  Script: {
    title: "write me a script",
    price: 15,
    LoC: 25,
    deadline: 20,
    id: Guid.NewGuidWithoutDash(),
    expires: 10
  },
  LandingPage: {
    title: "make me a landing page",
    price: 25,
    LoC: 35,
    deadline: 30,
    id: Guid.NewGuidWithoutDash(),
    expires: 15
  }
};

var Careers = {
  junior_dev: {
    id: 1,
    title: "Junior Developer"
  },
  junior_front_dev: {
    id: 2,
    title: "Junior Front-End Developer"
  },
  junior_back_dev: {
    id: 3,
    title: "Junior Back-End Developer"
  }
};

$(function() {
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
        },
        at_400: {
          done: false
        },
        at_500: {
          done: false
        },
        at_600: {
          done: false
        }
      },
      freelance: [],
      activeFreelance: [],
      availableCareers: [],
      books: {
        read: [],
        unread: []
      }
    },

    methods: {
      print: function() {},
      events: function() {
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
      next: function() {
        game = this;
        setTimeout(function() {
          game.events();
          game.print();
          game.next();
        }, 1000);
      },
      writeCode: function() {
        this.LoC += this.locPerTick;
        this.descendLoC();
      },
      log: function(message) {
        $("#messages").prepend(
          "<p>" + this.prettyTime() + ": " + message + "</p>"
        );
      },
      prettyTime: function() {
        return "Day " + this.day + " Hour " + this.hour;
      },
      descendLoC: function() {
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
      subscribe: function() {
        if (this.money < this.boardSubscriptionPrice) {
          this.log(Messages.not_enough_money);
        }
        this.achievements.boughtFreelanceSubscr.done = true;
        this.money -= this.boardSubscriptionPrice;
      },
      buy: function() {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.shop, function(a) {
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
      getJob: function() {
        var elementId = event.toElement.id;
        var items = jQuery.grep(this.freelance, function(a) {
          return a.id == elementId;
        });
        var item = items[0];
        this.activeFreelance.push(item);
        item.expires = 0;
      },
      interview: function() {
        //TODO:
        alert("you totally blowed it. you need to work more");
      },
      read: function() {},
      boardPostExpiration: function() {
        for (let index = 0; index < game.freelance.length; index++) {
          const element = game.freelance[index];

          if (element.expires == 0) {
            game.freelance.splice(index, 1);
          } else {
            element.expires--;
          }
        }
      },
      failingProjects: function() {
        for (let index = 0; index < game.activeFreelance.length; index++) {
          const element = game.activeFreelance[index];

          element.deadline--;
          if (element.deadline == 0) {
            game.activeFreelance.splice(index, 1);
            game.log("failed a project");
          }
        }
      },
      achievementCheck: function() {
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

    mounted: function() {
      document.title = this.title;
      this.next(); // game loop starts here
      this.log(Messages.welcome);
    },

    computed: {
      printTime: function() {
        return this.prettyTime();
      }
    }
  });
});
