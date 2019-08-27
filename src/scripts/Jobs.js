import {
    Guid,
    getRandomInt,
    Randomize
  } from './doruk.js'
  
import {
    Messages
} from './Messages.js'

export {
    Jobs
}

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
            min: 50,
            max: 65
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
            min: 65,
            max: 80
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
            min: 80,
            max: 90
        }
    },
    FixMyCss: {
        title: Messages.FixMyCss,
        price: 35,
        LoC: 40,
        deadline: 72,
        id: Guid.NewGuidWithoutDash(),
        expires: 15,
        difficulty: 3,
        chances: {
            min: 90,
            max: 100
        }
    }
};