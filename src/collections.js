export { Messages, Items, Jobs, Careers, Achievements }

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

var Achievements = {
    at_100: {
        done: false,
        LoC: 10,
        Do: function (game) {
            game.log(Messages.family_fund);
            game.shop.push(Items.mechanic_keyboard);
            game.shop.push(Items.lcd_22);
            game.shop.push(Items.lcd_27);
            game.shop.push(Items.coffee);
            game.money += 100;
            game.achievements.at_100.done = true;
        }
    },
    at_200: {
        done: false,
        LoC: 20,
        Do: function (game) {
            game.log(Messages.freelance_board);
            game.achievements.at_200.done = true;
        }
    },
    boughtFreelanceSubscr: {
        done: false,
        Do: function (game) { }
    },
    at_300: {
        done: false,
        LoC: 30,
        Do: function (game) {
            game.achievements.at_300.done = true;
        }
    },
    at_400: {
        done: false,
        LoC: 40,
        Do: function (game) {
            game.log(Messages.get_books);
            game.shop.push(Items.sql_01);
            game.shop.push(Items.csharp);
            game.shop.push(Items.web_development);
            game.shop.push(Items.data_and_alg);
            game.achievements.at_400.done = true;
        }
    },
    at_500: {
        done: false,
        LoC: 50,
        Do: function (game) {
            game.log(Messages.get_fulltime);
            game.availableCareers.push(Careers.junior_dev);
            game.availableCareers.push(Careers.junior_front_dev);
            game.availableCareers.push(Careers.junior_back_dev);
            game.achievements.at_500.done = true;
        }
    },
    at_600: {
        done: false,
        LoC: 60,
        Do: function (game) {
            game.log(Messages.open_source);
            game.achievements.at_600.done = true;
        }
    }
}