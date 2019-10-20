import {
    Messages
  } from './Messages.js'

export {
    Careers
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
  