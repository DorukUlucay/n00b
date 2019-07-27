import {
  Randomize,
  Guid
} from './doruk.js'

import {
  Messages
} from './Messages.js'

export {
  Messages,
  Items,
  Jobs,
  Careers,
  Achievements,
  Assignments,
  Services,
  ServicePaymentType
}

var Items = {
  mechanic_keyboard: {
    id: 1,
    type: "Hardware",
    name: Messages.MechanicKeyboard,
    price: 20,
    boost: 0.5,
    bought: false
  },
  lcd_22: {
    id: 2,
    type: "Hardware",
    name: Messages.LCD_22,
    price: 100,
    boost: 1,
    bought: false
  },
  coffee: {
    id: 4,
    type: "Hardware",
    name: Messages.CoffeMachine,
    price: 45,
    boost: 0.5,
    bought: false
  },
  lcd_27: {
    id: 5,
    type: "Hardware",
    name: Messages.LCD_27,
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
    name: Messages.BluetoothHeadphones,
    description: null,
    price: 150,
    boost: 0.4,
    bought: false
  }
};

var Jobs = {
  Script: {
    title: Messages.WriteMeAScript,
    price: 15,
    LoC: 25,
    deadline: 48,
    id: Guid.NewGuidWithoutDash(),
    expires: 10,
    difficulty: 1,
    chances: {
      min: 85,
      max: 100
    }
  },
  LandingPage: {
    title: Messages.MakeMeALandingPage,
    price: 25,
    LoC: 35,
    deadline: 36,
    id: Guid.NewGuidWithoutDash(),
    expires: 15,
    difficulty: 2,
    chances: {
      min: 70,
      max: 85
    }
  },
  PaymentGateway: {
    title: Messages.IntegratePaymentGateway,
    price: 45,
    LoC: 50,
    deadline: 72,
    id: Guid.NewGuidWithoutDash(),
    expires: 15,
    difficulty: 3,
    chances: {
      min: 60,
      max: 70
    }
  }
};

var Careers = {
  junior_dev: {
    id: 1,
    title: Messages.JuniorDeveloper,
    LoC: 1000,
    annualSalary: 15000
  }
};

var Achievements = {
  at_100: {
    Title: "100 Lines Of Code",
    Description: "Written 100 lines of code",
    done: false,
    LoC: 100,
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
    Title: "200 Lines Of Code",
    Description: "Written 200 lines of code",
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
    Description: "Written 300 lines of code",
    done: false,
    LoC: 300,
    Do: function (game) {
      game.achievements.at_300.done = true;
      game.shop.push(Items.bluetoothHeadphones);
    }
  },
  at_400: {
    Title: "400 Lines Of Code",
    Description: "Written 400 lines of code",
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
    Description: "Written 500 lines of code",
    done: false,
    LoC: 500,
    Do: function (game) {
      game.log(Messages.get_fulltime);
      game.availableCareers.push(Careers.junior_dev);
      game.achievements.at_500.done = true;
    }
  },
  at_600: {
    Title: "600 Lines Of Code",
    Description: "Written 600 lines of code",
    done: false,
    LoC: 600,
    Do: function (game) {
      game.log(Messages.open_source);
      game.achievements.at_600.done = true;
    }
  },
  at_700: {
    Title: "700 Lines Of Code",
    Description: "Written 700 lines of code",
    done: false,
    LoC: 700,
    Do: function (game) {
      game.shop.push(Items.xfactor);
      game.shop.push(Items.code_studio);
      game.shop.push(Items.geralt_figure);
      game.shop.push(Items.vader_bust);
      game.achievements.at_700.done = true;
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
      min: 50,
      max: 100
    }
  },
  UnitTest: {
    title: Messages.WriteUnitTest,
    LoC: 50,
    deadline: 24,
    id: Guid.NewGuidWithoutDash(),
    chances: {
      min: 1,
      max: 50
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
