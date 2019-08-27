import {
  Randomize,
  Guid
} from './doruk.js'

import {
  Messages
} from './Messages.js'

import {
  Items
} from './Items.js'

export {
  Careers,
  Achievements,
  Assignments,
  Services,
  ServicePaymentType
}

var Careers = {
  junior_dev: {
    id: 1,
    title: Messages.JuniorDeveloper,
    LoC: 1000,
    annualSalary: 15000,
    failedAssignmentCount: 0,
    monthlySalary: function () {
      return (this.annualSalary / 12).toFixed(2)
    }
  },
  mid_dev: {
    id: 2,
    title: Messages.MidLevelDeveloper,
    LoC: 3000,
    annualSalary: 30000,
    failedAssignmentCount: 0,
    monthlySalary: function () {
      return (this.annualSalary / 12).toFixed(2)
    }
  }
};

var Achievements = {
  at_100: {
    Title: "100 Lines Of Code",
    Description: Messages.LoC100,
    done: false,
    LoC: 100,
    Do: function (game) {
      game.log(Messages.family_fund);
      game.shop.push(Items.mechanic_keyboard);
      game.shop.push(Items.lcd_22);
      game.shop.push(Items.lcd_27);
      game.shop.push(Items.coffee);
      game.shop.push(Items.wireless_mouse);
      game.money += 100;
      game.achievements.at_100.done = true;
    }
  },
  at_200: {
    Title: "200 Lines Of Code",
    Description: Messages.LoC200,
    done: false,
    LoC: 200,
    Do: function (game) {
      game.log(Messages.freelance_board);
      game.achievements.at_200.done = true;
    }
  },
  boughtFreelanceSubscr: {
    Title: "Freelancer",
    Description: "Subscribed to freelance board",
    done: false,
    Do: function (game) {}
  },
  at_300: {
    Title: "300 Lines Of Code",
    Description: Messages.LoC300,
    done: false,
    LoC: 300,
    Do: function (game) {
      game.achievements.at_300.done = true;
      game.shop.push(Items.bluetoothHeadphones);
    }
  },
  at_400: {
    Title: "400 Lines Of Code",
    Description: Messages.LoC400,
    done: false,
    LoC: 400,
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
    Title: "500 Lines Of Code",
    Description: Messages.LoC500,
    done: false,
    LoC: 500,
    Do: function (game) {
      game.log(Messages.get_fulltime);
      game.availableCareers.push(Careers.junior_dev);
      game.availableCareers.push(Careers.mid_dev);
      game.achievements.at_500.done = true;
    }
  },
  at_600: {
    Title: "600 Lines Of Code",
    Description: Messages.LoC600,
    done: false,
    LoC: 600,
    Do: function (game) {
      game.log(Messages.open_source);
      game.achievements.at_600.done = true;
    }
  },
  at_700: {
    Title: "700 Lines Of Code",
    Description: Messages.LoC700,
    done: false,
    LoC: 700,
    Do: function (game) {
      game.shop.push(Items.xfactor);
      game.shop.push(Items.code_studio);
      game.shop.push(Items.geralt_figure);
      game.shop.push(Items.vader_bust);
      game.achievements.at_700.done = true;
    }
  },
  at_800: {
    Title: "800 Lines Of Code",
    Description: Messages.LoC800,
    done: false,
    LoC: 800,
    Do: function (game) {
      game.achievements.at_800.done = true;
      game.shop.push(Items.gamerArmChair);
      game.shop.push(Items.cthulhuFigurine);
    }
  },
  at_900: {
    Title: "900 Lines Of Code",
    Description: Messages.LoC900,
    done: false,
    LoC: 900,
    Do: function (game) {
      game.achievements.at_900.done = true;
    }
  },
  at_1000: {
    Title: "1000 Lines Of Code",
    Description: Messages.LoC1000,
    done: false,
    LoC: 1000,
    Do: function (game) {
      game.achievements.at_1000.done = true;
    }
  },
  at_1500: {
    Title: "1500 Lines Of Code",
    Description: Messages.LoC1500,
    done: false,
    LoC: 1500,
    Do: function (game) {
      game.achievements.at_1500.done = true;
    }
  },
  at_5000: {
    Title: "5000 Lines Of Code",
    Description: Messages.LoC5000,
    done: false,
    LoC: 5000,
    Do: function (game) {
      game.achievements.at_5000.done = true;
      alert(Messages.ThanksForPlaying);
    }
  }
}

var Assignments = {
  FixTheBug: {
    title: Messages.FixTheBug,
    LoC: 50,
    deadline: 24,
    id: Guid.NewGuidWithoutDash(),
    chances: {
      min: 1,
      max: 33
    }
  },
  UnitTest: {
    title: Messages.WriteUnitTest,
    LoC: 50,
    deadline: 24,
    id: Guid.NewGuidWithoutDash(),
    chances: {
      min: 34,
      max: 66
    }
  },
  WriteSQLFunction: {
    title: Messages.WriteSQLFunction,
    LoC: 25,
    deadline: 24,
    id: Guid.NewGuidWithoutDash(),
    chances: {
      min: 67,
      max: 100
    }
  },
};

const ServicePaymentType = {
  Percent: 'Percent',
  Free: 'Free',
  Monthly: 'Monthly'
}

var Services = {
  FreelanceBoard: {
    paymentType: ServicePaymentType.Percent,
    amount: 10
  },
  CareerFinder: {
    paymentType: ServicePaymentType.Free
  },
  Music: {
    paymentType: ServicePaymentType.Monthly,
    amount: 5,
    boost: 0.2
  }
}
