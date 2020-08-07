import {
    Guid,
    getRandomInt,
    Randomize
} from './doruk.js'

import {
    Messages
} from './Messages.js'

export {
    Items
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
    },
    gamerArmChair: {
        id: 15,
        type: "Furniture",
        name: Messages.GamerArmChair,
        description: null,
        price: 1150,
        boost: 4,
        bought: false
    },
    cthulhuFigurine: {
        id: 16,
        type: "Decorative",
        name: Messages.CthulhuFigurine,
        description: null,
        price: 666,
        boost: 0.1,
        bought: false
    },
    wireless_mouse: {
        id: 17,
        type: "Hardware",
        name: Messages.WirelessMouse,
        price: 25,
        boost: 0.4,
        bought: false
    },
};