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
        RequiredDays: 0,
        failedAssignmentCount: 0,
        monthlySalary: function() {
            return (this.annualSalary / 12).toFixed(2)
        }
    },
    mid_dev: {
        id: 2,
        title: Messages.MidLevelDeveloper,
        LoC: 3000,
        annualSalary: 30000,
        RequiredDays: 30,
        failedAssignmentCount: 0,
        monthlySalary: function() {
            return (this.annualSalary / 12).toFixed(2)
        }
    },
    sr_dev: {
        id: 3,
        title: Messages.SeniorDeveloper,
        LoC: 5000,
        RequiredDays: 90,
        annualSalary: 50000,
        failedAssignmentCount: 0,
        monthlySalary: function() {
            return (this.annualSalary / 12).toFixed(2)
        }
    },
    team_leader: {
        id: 4,
        title: Messages.TeamLeader,
        LoC: 10000,
        RequiredDays: 150,
        annualSalary: 75000,
        failedAssignmentCount: 0,
        monthlySalary: function() {
            return (this.annualSalary / 12).toFixed(2)
        }
    },

};