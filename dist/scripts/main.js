(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["n00b"] = factory();
	else
		root["n00b"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doruk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Achievements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Assignments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _Jobs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _Options_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _typer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);














var theloop = null;
var game = null;

$(function () {
  var app = new Vue({
    el: "#app",

    data: {
      stats: {},
      boardSubscriptionPrice: 10,
      title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].GameName,
      turn: 1,
      hour: 1,
      day: 1,
      LoC: 0,
      money: 0,
      locPerTick: _Options_js__WEBPACK_IMPORTED_MODULE_5__["Options"].locPerTick,
      shop: [],
      achievements: _Achievements_js__WEBPACK_IMPORTED_MODULE_2__["Achievements"],
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
      verbose: _Options_js__WEBPACK_IMPORTED_MODULE_5__["Options"].verbose,
      stats: {
        freelanceProjectsCompleted: 0,
        freelanceMoneyEarned: 0,
        careerDays: 0,
        careerAssignmentsCompleted: 0,
        careerMoneyEarned: 0,
        moneySpent: 0
      },
      M: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"] //TODO: fix repetition
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
        theloop = this;
        setTimeout(function () {
          game.events();
          game.print();
          game.next();
          game.saveGame();
        }, _Options_js__WEBPACK_IMPORTED_MODULE_5__["Options"].interval);
      },
      writeCode: function () {
        this.LoC += this.locPerTick;
        this.descendLoC();
        _typer_js__WEBPACK_IMPORTED_MODULE_6__["Typer"].addText();
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
        return this.M.PrettyTime.replace("[0]", this.day).replace("[1]", this.hour);
      },
      descendLoC: function () {

        if (this.careerAsignments.length != 0) {
          this.careerAsignments[0].LoC -= this.locPerTick;
          if (0 >= this.careerAsignments[0].LoC) {
            this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].completedAssignment);
            this.careerAsignments.splice(0, 1);
            this.stats.careerAssignmentsCompleted++;
          }
        } else if (this.activeFreelance.length != 0) {
          this.activeFreelance[0].LoC -= this.locPerTick;
          if (0 >= this.activeFreelance[0].LoC) {
            //a freelance job is completed here
            this.log(
              _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].completed_job.format(this.activeFreelance[0].price)
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
          this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].not_enough_money);
        }
        this.achievements.boughtFreelanceSubscr.done = true;
        this.money -= this.boardSubscriptionPrice;
        this.stats.moneySpent += this.boardSubscriptionPrice;
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
            this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].BoughtABook.replace("[0]", item.name));
            $("#storeMsg").html(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].BoughtABook.replace("[0]", item.name))
          } else {
            this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].BoughtA.replace("[0]", item.name));
            $("#storeMsg").html(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].BoughtA.replace("[0]", item.name))
          }
          this.money -= item.price;
          this.stats.moneySpent += item.price;
        } else {
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
          this.leaveCareer();
          this.career = career;
          this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].YouAreHired.format(this.career.monthlySalary()))
          $("#careerMsg").html(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].YouAreHired.format(this.career.monthlySalary()))
        } else {
          this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].YouAreNotHired)
          $("#careerMsg").html(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].YouAreNotHired)
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
          this.locPerTick *= 1.1;
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
            game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].FailedProject);
          }
        }
      },
      achievementCheck: function () {
        for (const key in _Achievements_js__WEBPACK_IMPORTED_MODULE_2__["Achievements"]) {
          if (_Achievements_js__WEBPACK_IMPORTED_MODULE_2__["Achievements"].hasOwnProperty(key)) {
            const element = _Achievements_js__WEBPACK_IMPORTED_MODULE_2__["Achievements"][key];
            if (!element.done && game.completedAchievements.indexOf(key) == -1) {
              if (element.hasOwnProperty('LoC') && game.LoC >= element.LoC) {
                game.completedAchievements.push(key);
                element.Do(game);
                game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].Achievement + " : " + element.Description);
              }
            }
          }
        }
      },
      freelanceJobMarket: function () {
        if (game.achievements.boughtFreelanceSubscr.done) {
          var randInt = Object(_doruk_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1, 100);

          var job = null;
          for (const key in _Jobs_js__WEBPACK_IMPORTED_MODULE_4__["Jobs"]) {
            if (_Jobs_js__WEBPACK_IMPORTED_MODULE_4__["Jobs"].hasOwnProperty(key)) {
              const jobx = _Jobs_js__WEBPACK_IMPORTED_MODULE_4__["Jobs"][key];
              if (jobx.chances.min < randInt && jobx.chances.max > randInt) {
                job = jobx;
              }
            }
          }

          if (job !== null && this.freelance.length < 6) { //ekranda 6 taneden fazla görünmesin
            game.freelance.push(JSON.parse(JSON.stringify(job))); //clone
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
          this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].welcome);
        }
      },
      sendCareerAsignments: function () {
        if ((this.hour == 8 || this.hour == 13) && game.career != null) {
          var randInt = Object(_doruk_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1, 100);

          var job = null;
          for (const key in _Assignments_js__WEBPACK_IMPORTED_MODULE_3__["Assignments"]) {
            if (_Assignments_js__WEBPACK_IMPORTED_MODULE_3__["Assignments"].hasOwnProperty(key)) {
              const jobx = _Assignments_js__WEBPACK_IMPORTED_MODULE_3__["Assignments"][key];
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
            game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].FailedAssignment);
            this.career.failedAssignmentCount++;

            if (this.career.failedAssignmentCount == 10) {
              game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].YoureFiredFailedAssignments);
              this.leaveCareer();
            }
          }
        }
      },
      salary: function () {
        if (this.career != null) {
          if (this.workedDays > 29 && this.workedDays % 30 == 0) {
            this.money += this.career.annualSalary / 12;
            this.money.careerMoneyEarned += this.career.annualSalary / 12;
            this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].ReceivedPaycheck);
          }
        }
      },
      restart: function () {
        var c = confirm(this.M.SureToRestart);
        debugger;
        if (c) {
          clearTimeout(theloop);
          localStorage.removeItem("gameData");
          window.location.reload()
        }
      },
      leaveCareer: function () {
        if (this.career != null) {
          var partialSalary = ((this.career.annualSalary / 12) / 30) * this.workedDays;
          this.money += partialSalary;
          this.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].PartialSalaryWired.format(partialSalary, this.workedDays));
          this.workedDays = 0;
          this.failedAssignmentCount = 0;
          this.career = null;
          this.careerAsignments = [];
        }
      }
    },


    mounted: function () {
      document.title = this.title;
      this.loadGamex();
      this.next(); // game loop starts here

      //      Typer.speed = 10;
      _typer_js__WEBPACK_IMPORTED_MODULE_6__["Typer"].file = 'kernel.txt';
      _typer_js__WEBPACK_IMPORTED_MODULE_6__["Typer"].init();
    },

    computed: {
      printTime: function () {
        return this.prettyTime();
      },
      writeCodeLabel: function () {
        return this.M.WriteCodeButtonLabel.replace('[0]', this.locPerTick.toFixed(2));
      },
      boardSubscriptionPriceLabel: function () {
        return this.M.SubscribeToBoard.replace('[0]', this.boardSubscriptionPrice.toFixed(2));
      }
    }
  });
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Randomize", function() { return Randomize; });
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
  Random: function () {
    var seconds = new Date().getTime() / 1000;
    return (((1 + Math.random()) * seconds) | 0).toString(16).substring(1);
  },
  NewGuid: function () {
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
  NewGuidWithoutDash: function () {
    var guid = Guid.NewGuid();
    return guid.split("-").join("");
  }
};

String.prototype.contains = function (substr) {
  return contains(this, substr);
};

function contains(str, substr) {
  if (str.indexOf(substr) === -1) {
    return false;
  } else {
    return true;
  }
}

String.prototype.format = function () {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages_TR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony import */ var _doruk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);




const Version = "0.2.2"

const Messages_EN = {
    GameName: `Code Clicker V ${Version}`,
    welcome: "you just got your cs degree. you may as well write some code while waiting for a job.",
    family_fund: "since you look interested, your family gives you some money to get some wares",
    freelance_board: "some friend talked about a freelance site. you may want to look at it",
    completed_job: "completed a freelance project and got paid {0}$",
    get_books: "you may need to learn a few things more before taking complex jobs. buy a few books from store.",
    open_source: "a friend talked about an open source project. it will be more practice and maybe some networking.",
    get_fulltime: "a friend found an internship. may be you can put your cv on that career site.",
    not_enough_money: `not enough money. your ${Object(_doruk_js__WEBPACK_IMPORTED_MODULE_0__["Randomize"])([
        "father",
        "mother"
    ])} throws in some. but you need to pay back.`,
    completedAssignment: `you completed an assignment`,
    FixTheBug: `Fix The Bug`,
    WriteUnitTest: `Write a Unit Test`,
    MechanicKeyboard: `Mechanic Keyboard`,
    LCD_22: `22' LCD Monitor`,
    CoffeMachine: `Coffe Machine`,
    LCD_27: `27' LCD Monitor`,
    ReceivedPaycheck: "you receive months paycheck",
    FailedAssignment: "failed an assignment. watch out.",
    Achievement: "Achievement",
    FailedProject: "failed a project",
    YouAreHired: "you're hired! everyday, you'll be assigned with tasks. complete them before they're due. Your salary per month is {0} $",
    YouAreNotHired: "you're turned down. you need to write more code.",
    BoughtA: "bought a [0]",
    BoughtABook: "bought a [0] book",
    JuniorDeveloper: "Junior Developer",
    WriteMeAScript: "write me a script",
    MakeMeALandingPage: "make me a landing page",
    IntegratePaymentGateway: "integrate payment gateway",
    BrowseOnlineStore : "Browse Online Store",
    BluetoothHeadphones:"Bluetooth Headphones",
    LoCWritten :"Lines-Of-Code Written",
    Time : "Time",
    Money:"Money",
    BrowseCareers:"Browse Careers",
    Kindle:"E-Book Reader",
    ToggleFreelance : "Toggle Freelance Window",
    WriteCodeButtonLabel : `Write Code(1 Click [0] Line Of Code)`,
    SubscribeToBoard: "Subscribe for [0]$ to Jobs board",
    Description: "Description",
    LoC: "Lines Of Code",
    Deadline : "Deadline(Hours)",
    NoActiveJobs: "No Active Jobs",
    PrettyTime :"Day: [0] Hour: [1]",
    NoActiveAssignments: "No Active Assignments",
    CareersBoard : "Careers Board",
    AvailableCareers : "Available Careers based on your profile",
    ActiveJobs : "Active Jobs",
    Job: "Job",
    Pay:"Pay",
    Year: "Year",
    AvailableJobs: "Available Jobs",
    NoAvailableJobs: "No Available Jobs",
    TakeJob : "Take Job",
    ActiveAssignments: "Active Assignments",
    LoC100: "100 Lines Of Code Written",
    LoC200: "200 Lines Of Code Written",
    LoC300: "300 Lines Of Code Written",
    LoC400: "400 Lines Of Code Written",
    LoC500: "500 Lines Of Code Written",
    LoC600: "600 Lines Of Code Written",
    LoC700: "700 Lines Of Code Written",
    LoC800: "800 Lines Of Code Written",
    LoC900: "900 Lines Of Code Written",
    LoC1000: "1000 Lines Of Code Written",
    LoC1500: "1500 Lines Of Code Written",
    LoC5000: "5000 Lines Of Code Written",
    YourReadList : "Your reading list. Click to read.",
    ReadBefore:"Books you have read",
    LeaveYourJobFirst: "You must leave your current job to get an interview",
    Settings: "Settings",
    Stats: "Stats",
    Restart : "Restart Game",
    SureToRestart : "Are you sure you want to restart the game ?",
    WriteSQLFunction: "Write an SQL function",
    FixMyCss: "Fix My CSS",
    GamerArmChair : "Gamer Armchair",
    CthulhuFigurine: "Cthulhu Figurine",
    WirelessMouse: "Wireless Mouse",
    YoureFiredFailedAssignments:"You failed too many assignments. You're fired.",
    MidLevelDeveloper : "Mid Level Developer",
    PartialSalaryWired : "{0} $ for {1} days you worked was wired to your account.",
    ThanksForPlaying : `Thanks for playing code clicker. We are currently on version ${Version}. If you clicked everything on screen, there is nothing more to see(for now). Stay in touch.`
};

const Messages_TR = {
    GameName: `Code Clicker V ${Version}`,
    welcome: "bilgisayar mühendisliği diplomanı aldın. iş bulmayı beklerken biraz kod yazsan iyi olur.",
    family_fund: "ailen ilginden memnun. bu yüzden sana biraz para verdiler. bazı eşyalar satın alabilirsin.",
    freelance_board: "bir arkadaşın freelance işler bulabileceğin bir mesaj panosundan bahsetti. bir baksan iyi olur.",
    completed_job: "freelance bir projeyi tamamladın ve {0}$ kazandın",
    get_books: "daha ciddi işlere girişmeden önce bazı kitaplar okusan iyi olur. internet mağazasına bak.",
    open_source: "bir arkadaşın open source projeler bulabileceğin bir siteden bahsetti. biraz daha pratik ve biraz da network yapmış olursun.",
    get_fulltime: "bir arkadaşın staj hakkında konuşuyordu. şu kariyer sitesine girme vaktin gelmedi mi ?",
    not_enough_money: `yeterli paran yok. ${Object(_doruk_js__WEBPACK_IMPORTED_MODULE_0__["Randomize"])([
        "baban",
        "annen"
    ])} biraz verdi ama geri ödemen gerek.`,
    completedAssignment: `bir madde tamamladın`,
    FixTheBug: `Bug'ı düzelt`,
    WriteUnitTest: `Unit test yaz`,
    MechanicKeyboard: `Mekanik Klavye`,
    LCD_22: `22' LCD Monitör`,
    CoffeMachine: `Filtre Kahve Makinası`,
    LCD_27: `27' LCD Monitör`,
    ReceivedPaycheck: "maaş yattı",
    FailedAssignment: "teslim etmen gereken bir maddenin süresi doldu. dikkat et.",
    Achievement: "Başarım",
    FailedProject: "bir proje başarısız oldu",
    YouAreHired: "işe alındın! her gün sana bazı görevler gelecek. bu görevleri süreleri dolmadan önce tamamlamalısın. Aylık maaşın {0} $",
    YouAreNotHired: "reddedildin. daha fazla kod yazmalısın.",
    BoughtA: "bir [0] satın aldın",
    BoughtABook: "bir [0] kitabı satın aldın",
    JuniorDeveloper: "Junior Developer",
    WriteMeAScript: "siteme script yaz",
    MakeMeALandingPage: "landing sayfası yap",
    IntegratePaymentGateway: "paypal entegrasyonu yap",
    BrowseOnlineStore : "İnternet Mağazası",
    BluetoothHeadphones:"Bluetooth Kulaklık",
    LoCWritten :"Yazılan Kod Satırı Sayısı",
    Time : "Zaman",
    Money:"Para",
    BrowseCareers:"İş İlanlarına Bak",
    Kindle:"E-Kitap Okuyucusu",
    ToggleFreelance : "Freelance Penceresini Aç/Kapa",
    WriteCodeButtonLabel : `Kod Yaz(1 Tık = [0] satır kod)`,
    SubscribeToBoard: "Freelance mesaj panosuna üye ol([0] $)",
    Description: "Tanım",
    LoC: "Satır Kod",
    DeadlineHours : "Teslim Zamanı(saat)",
    NoActiveJobs: "Aktif Freelance İşin Yok",
    PrettyTime :"Gün: [0] Saat: [1]",
    NoActiveAssignments: "Aktif Görev Yok",
    CareersBoard : "İş İlanları",
    AvailableCareers : "CV'nize uygun ilanlar",
    ActiveJobs : "Aktif Projeler",
    Job: "Proje",
    Pay:"Ücret",
    Year: "Yıl",
    AvailableJobs : "Aktif İlanlar",
    NoAvailableJobs: "Aktif İlan Yok",
    TakeJob : "İşi Al",
    ActiveAssignments : "Aktif Görevler",
    LoC100: "100 satır kod yazıldı",
    LoC200: "200 satır kod yazıldı",
    LoC300: "300 satır kod yazıldı",
    LoC400: "400 satır kod yazıldı",
    LoC500: "500 satır kod yazıldı",
    LoC600: "600 satır kod yazıldı",
    LoC700: "700 satır kod yazıldı",
    LoC800: "800 satır kod yazıldı",
    LoC900: "900 satır kod yazıldı",
    LoC1000: "1000 satır kod yazıldı",
    LoC1500: "1500 satır kod yazıldı",
    LoC5000: "5000 satır kod yazıldı",
    YourReadList : "Okuma listeniz. Okumak için tıklayın.",
    ReadBefore:"Okuduğunuz kitaplar",
    LeaveYourJobFirst: "Yeni bir işe girmek için mevcut işinizden ayrılmalısınız",
    Settings: "Ayarlar",
    Stats: "İstatistikler",
    Restart : "Oyunu Sıfırla",
    SureToRestart : "Oyunu sıfırlamak istediğinize emin misiniz ?",
    WriteSQLFunction : "Bir SQL Fonksiyonu yaz",
    FixMyCss: "CSS dosyamı düzenle",
    GamerArmChair : "Oyuncu Koltuğu",
    CthulhuFigurine : "Cthulhu Figürü",
    WirelessMouse: "Kablosuz Mouse",
    YoureFiredFailedAssignments: "Atanan maddeleri tamamlamadığın için işine son verildi.",
    MidLevelDeveloper : "Mid Level Developer",
    PartialSalaryWired : "{0} $ (çalıştığın {1} günün karşılığı) hesabına yatırıldı.",
    ThanksForPlaying : `Code Clicker'ı oynadığın için teşekkürler. Şu anda ${Version} sürümündeyiz. Eğer ekrandaki her şeye tıkladıysan bundan sonra pek bir şey yok(şimdilik). Takipte kal.`
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Achievements", function() { return Achievements; });
/* harmony import */ var _Items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Careers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);








var Achievements = {
  at_100: {
    Title: "100 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC100,
    done: false,
    LoC: 100,
    Do: function (game) {
      game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].family_fund);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].mechanic_keyboard);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].lcd_22);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].lcd_27);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].coffee);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].wireless_mouse);
      game.money += 100;
      game.achievements.at_100.done = true;
    }
  },
  at_200: {
    Title: "200 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC200,
    done: false,
    LoC: 200,
    Do: function (game) {
      game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].freelance_board);
      game.achievements.at_200.done = true;
    }
  },
  boughtFreelanceSubscr: {
    Title: "Freelancer",
    Description: "Subscribed to freelance board",
    done: false,
    Do: function (game) { }
  },
  at_300: {
    Title: "300 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC300,
    done: false,
    LoC: 300,
    Do: function (game) {
      game.achievements.at_300.done = true;
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].bluetoothHeadphones);
    }
  },
  at_400: {
    Title: "400 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC400,
    done: false,
    LoC: 400,
    Do: function (game) {
      game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].get_books);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].sql_01);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].csharp);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].web_development);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].data_and_alg);
      game.achievements.at_400.done = true;
    }
  },
  at_500: {
    Title: "500 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC500,
    done: false,
    LoC: 500,
    Do: function (game) {
      game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].get_fulltime);
      game.availableCareers.push(_Careers_js__WEBPACK_IMPORTED_MODULE_2__["Careers"].junior_dev);
      game.availableCareers.push(_Careers_js__WEBPACK_IMPORTED_MODULE_2__["Careers"].mid_dev);
      game.achievements.at_500.done = true;
    }
  },
  at_600: {
    Title: "600 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC600,
    done: false,
    LoC: 600,
    Do: function (game) {
      game.log(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].open_source);
      game.achievements.at_600.done = true;
    }
  },
  at_700: {
    Title: "700 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC700,
    done: false,
    LoC: 700,
    Do: function (game) {
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].xfactor);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].code_studio);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].geralt_figure);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].vader_bust);
      game.achievements.at_700.done = true;
    }
  },
  at_800: {
    Title: "800 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC800,
    done: false,
    LoC: 800,
    Do: function (game) {
      game.achievements.at_800.done = true;
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].gamerArmChair);
      game.shop.push(_Items_js__WEBPACK_IMPORTED_MODULE_0__["Items"].cthulhuFigurine);
    }
  },
  at_900: {
    Title: "900 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC900,
    done: false,
    LoC: 900,
    Do: function (game) {
      game.achievements.at_900.done = true;
    }
  },
  at_1000: {
    Title: "1000 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC1000,
    done: false,
    LoC: 1000,
    Do: function (game) {
      game.achievements.at_1000.done = true;
    }
  },
  at_1500: {
    Title: "1500 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC1500,
    done: false,
    LoC: 1500,
    Do: function (game) {
      game.achievements.at_1500.done = true;
    }
  },
  at_5000: {
    Title: "5000 Lines Of Code",
    Description: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LoC5000,
    done: false,
    LoC: 5000,
    Do: function (game) {
      game.achievements.at_5000.done = true;
      alert(_Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].ThanksForPlaying);
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony import */ var _doruk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

  




var Items = {
    mechanic_keyboard: {
        id: 1,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].MechanicKeyboard,
        price: 20,
        boost: 0.5,
        bought: false
    },
    lcd_22: {
        id: 2,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LCD_22,
        price: 100,
        boost: 1,
        bought: false
    },
    coffee: {
        id: 4,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].CoffeMachine,
        price: 45,
        boost: 0.5,
        bought: false
    },
    lcd_27: {
        id: 5,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].LCD_27,
        price: 200,
        boost: 1.5,
        bought: false
    },
    sql_01: {
        id: 6,
        type: "Book",
        name: "SQL 101",
        price: 15,
        bought: false,
        pages: 25,
        readPages: 0,
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
        pages: 25,
        readPages: 0,
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
        pages: 25,
        readPages: 0,
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
        pages: 25,
        readPages: 0,
        skills: {
            Programming: 1
        }
    },
    xfactor: {
        id: 10,
        type: "Software",
        name: "XFactor License",
        description: "Code better, code faster",
        price: 300,
        boost: 5,
        bought: false
    },
    code_studio: {
        id: 11,
        type: "Software",
        name: "ZCode Studio",
        description: "IDE",
        price: 400,
        boost: 6,
        bought: false
    },
    geralt_figure: {
        id: 12,
        type: "Decorative",
        name: "Geralt Of Rivia Figurine",
        description: null,
        price: 100,
        boost: 0.1,
        bought: false
    },
    vader_bust: {
        id: 13,
        type: "Decorative",
        name: "Darth Vader Bust",
        description: null,
        price: 250,
        boost: 0.3,
        bought: false
    },
    bluetoothHeadphones: {
        id: 14,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].BluetoothHeadphones,
        description: null,
        price: 150,
        boost: 0.4,
        bought: false
    },
    gamerArmChair: {
        id: 15,
        type: "Furniture",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].GamerArmChair,
        description: null,
        price: 1150,
        boost: 2,
        bought: false
    },
    cthulhuFigurine: {
        id: 16,
        type: "Decorative",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].CthulhuFigurine,
        description: null,
        price: 666,
        boost: 0.1,
        bought: false
    },
    wireless_mouse: {
        id: 17,
        type: "Hardware",
        name: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].WirelessMouse,
        price: 25,
        boost: 0.4,
        bought: false
    },
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Careers", function() { return Careers; });
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



var Careers = {
    junior_dev: {
      id: 1,
      title: _Messages_js__WEBPACK_IMPORTED_MODULE_0__["Messages"].JuniorDeveloper,
      LoC: 1000,
      annualSalary: 15000,
      failedAssignmentCount: 0,
      monthlySalary: function () {
        return (this.annualSalary / 12).toFixed(2)
      }
    },
    mid_dev: {
      id: 2,
      title: _Messages_js__WEBPACK_IMPORTED_MODULE_0__["Messages"].MidLevelDeveloper,
      LoC: 3000,
      annualSalary: 30000,
      failedAssignmentCount: 0,
      monthlySalary: function () {
        return (this.annualSalary / 12).toFixed(2)
      }
    }
  };
  

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignments", function() { return Assignments; });
/* harmony import */ var _doruk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);






var Assignments = {
    FixTheBug: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].FixTheBug,
        LoC: 50,
        deadline: 24,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        chances: {
            min: 1,
            max: 33
        }
    },
    UnitTest: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].WriteUnitTest,
        LoC: 50,
        deadline: 24,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        chances: {
            min: 34,
            max: 66
        }
    },
    WriteSQLFunction: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].WriteSQLFunction,
        LoC: 25,
        deadline: 24,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        chances: {
            min: 67,
            max: 100
        }
    },
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jobs", function() { return Jobs; });
/* harmony import */ var _doruk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);

  




var Jobs = {
    Script: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].WriteMeAScript,
        price: 15,
        LoC: 25,
        deadline: 48,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        expires: 10,
        difficulty: 1,
        chances: {
            min: 50,
            max: 65
        }
    },
    LandingPage: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].MakeMeALandingPage,
        price: 25,
        LoC: 35,
        deadline: 36,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        expires: 15,
        difficulty: 2,
        chances: {
            min: 65,
            max: 80
        }
    },
    PaymentGateway: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].IntegratePaymentGateway,
        price: 45,
        LoC: 50,
        deadline: 72,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        expires: 15,
        difficulty: 3,
        chances: {
            min: 80,
            max: 90
        }
    },
    FixMyCss: {
        title: _Messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].FixMyCss,
        price: 35,
        LoC: 40,
        deadline: 72,
        id: _doruk_js__WEBPACK_IMPORTED_MODULE_0__["Guid"].NewGuidWithoutDash(),
        expires: 15,
        difficulty: 3,
        chances: {
            min: 90,
            max: 100
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });


var Options = {
  interval: 900,
  locPerTick: 2,
  verbose: false
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typer", function() { return Typer; });


var Typer = {
  text: null,
  file: "",
  position: 0,
  length: 0,
  lines: [],
  monitorHeight:5,
  init: function () {
    jQuery.get(Typer.file, function (data) {
      Typer.text = data.split("\n");
      length = Typer.text.length;
    });
  },
  addText: function () { //Main function to add the code
	var console = $("#console")
	
    if ((console)[0].getElementsByTagName("span").length == this.monitorHeight) {
      (console)[0].getElementsByTagName("span")[0].remove();
      (console)[0].getElementsByTagName("br")[0].remove();
	}
	
    console.html(console.html() + "<span>" + Typer.text[Typer.position++] + "</span><br/>");
	
	if (Typer.position == Typer.length) {
      Typer.position = 0;
	}
	
    $("#console").animate({
      scrollTop: $("#console")[0].scrollHeight
    }, 1000);
  },
}


/***/ })
/******/ ]);
});