import {
    Guid
} from './doruk.js'

import {
    Messages
} from './Messages.js'

export {
    Assignments
}

var Assignments = {
    FixTheBug: {
        title: Messages.FixTheBug,
        LoC: 50,
        deadline: 24,
        id: Guid.NewGuidWithoutDash(),
        chances: {
            min: 1,
            max: 25
        }
    },
    UnitTest: {
        title: Messages.WriteUnitTest,
        LoC: 50,
        deadline: 24,
        id: Guid.NewGuidWithoutDash(),
        chances: {
            min: 26,
            max: 50
        }
    },
    WriteSQLFunction: {
        title: Messages.WriteSQLFunction,
        LoC: 25,
        deadline: 24,
        id: Guid.NewGuidWithoutDash(),
        chances: {
            min: 51,
            max: 75
        }
    },
    FixProblemInPaymentIntegration: {
        title: Messages.FixProblemInPaymentIntegration,
        LoC: 25,
        deadline: 24,
        id: Guid.NewGuidWithoutDash(),
        chances: {
            min: 76,
            max: 100
        }
    },
};