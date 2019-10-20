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