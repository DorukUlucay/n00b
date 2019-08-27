import {
    Messages
} from './Messages.js'

export {
    OpenSourceProjects
}

var OpenSourceProjects = {
    gameEngine: {
        id: Guid.NewGuidWithoutDash(),
        name: "OpenPlay",
        Description : Messages.OpenSourceGameEngine
    },
    logger : {
        id: Guid.NewGuidWithoutDash(),
        name: "Loggio",
        Description : Messages.OpenSourceLogger
    },
    board : {
        id: Guid.NewGuidWithoutDash(),
        name: "TheBoard",
        Description: Messages.OpenSourceBoard
    }
}