import {
  Messages
} from './Messages.js'

import{
    Randomize,
    Guid
} from './doruk.js'

export {
  GenerateIssue
}

var GenerateIssue = function(){
    var proj =  Randomize(OpenSourceProjects);
    var issue = Randomize(OpenSourceProjectIssueTypes);
    
    return proj + " " +issue;
}


var OpenSourceProjects = {
  gameEngine: {
    id: Guid.NewGuidWithoutDash(),
    name: "OpenPlay",
    Description: Messages.OpenSourceGameEngine
  },
  logger: {
    id: Guid.NewGuidWithoutDash(),
    name: "Loggio",
    Description: Messages.OpenSourceLogger
  },
  board: {
    id: Guid.NewGuidWithoutDash(),
    name: "TheBoard",
    Description: Messages.OpenSourceBoard
  }
}


var OpenSourceProjectIssueTypes = {
  FixTheBug: {

  },
  Refactoring: {

  },
  Feature: {

  },
  Documentation: {

  }
}
