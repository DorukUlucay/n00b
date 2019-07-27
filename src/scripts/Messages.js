import {
    Randomize
  } from './doruk.js'

export {
    Messages_TR as Messages
}

const Messages_EN = {
    GameName: "Code Clicker V 0.1",
    welcome: "you just got your cs degree. you may as well write some code while waiting for a job.",
    family_fund: "since you look interested, your family gives you some money to get some wares",
    freelance_board: "some friend talked about a freelance site. you may want to look at it",
    completed_job: "completed a freelance project and got paid {0}$",
    get_books: "you may need to learn a few things more before taking complex jobs. buy a few books from store.",
    open_source: "a friend talked about an open source project. it will be more practice and maybe some networking.",
    get_fulltime: "a friend found an internship. may be you can put your cv on that career site.",
    not_enough_money: `not enough money. your ${Randomize([
        "father",
        "mother"
    ])} throws in some. but you need to pay back.`,
    completedAssignment: `you completed an assignment`,
    FixTheBug: `Fix The Bug`,
    WriteUnitTest: `Write a Unit Test`,
    MechanicKeyboard: `Mechanic Keyboard`,
    LCD_22: `22' LCD Monitor`,
    CoffeMachine: `Coffe Machine`,
    LCD_27: `27' LCD Monitor`,
    ReceivedPaycheck: "you receive months paycheck",
    FailedAssignment: "failed an assignment. watch out.",
    Achievement: "Achievement",
    FailedProject: "failed a project",
    YouAreHired: "you're hired! everyday, you'll be assigned with tasks. complete them before they're due.",
    YouAreNotHired: "you're turned down. you need to write more code.",
    BoughtA: "bought a ",
    JuniorDeveloper: "Junior Developer",
    WriteMeAScript: "write me a script",
    MakeMeALandingPage: "make me a landing page",
    IntegratePaymentGateway: "integrate payment gateway",
    BrowseOnlineStore : "Browse Online Store",
    BluetoothHeadphones:"Bluetooth Headphones",
    LoCWritten :"Lines-Of-Code Written",
    Time : "Time",
    Money:"Money"
};

const Messages_TR = {
    GameName: "Code Clicker V 0.1",
    welcome: "bilgisayar mühendisliği diplomanı aldın. iş bulmayı beklerken biraz kod yazsan iyi olur.",
    family_fund: "ailen ilginden memnun. bu yüzden sana biraz para verdiler. bazı eşyalar satın alabilirsin.",
    freelance_board: "bir arkadaşın freelance işler bulabileceğin bir mesaj panosundan bahsetti. bir baksan iyi olur.",
    completed_job: "freelance bir projeyi tamamladın ve {0}$ kazandın",
    get_books: "daha ciddi işlere girişmeden önce bazı kitaplar okusan iyi olur. internet mağazasına bak.",
    open_source: "bir arkadaşın open source projeler bulabileceğin bir siteden bahsetti. biraz daha pratik ve biraz da network yapmış olursun.",
    get_fulltime: "bir arkadaşın staj hakkında konuşuyordu. şu kariyer sitesine girme vaktin gelmedi mi ?",
    not_enough_money: `yeterli paran yok. ${Randomize([
        "baban",
        "annen"
    ])} biraz verdi ama geri ödemen gerek.`,
    completedAssignment: `bir madde tamamladın`,
    FixTheBug: `Bug'ı düzelt`,
    WriteUnitTest: `Unit test yaz`,
    MechanicKeyboard: `Mekanik Klavye`,
    LCD_22: `22' LCD Monitör`,
    CoffeMachine: `Filtre Kahve Makinası`,
    LCD_27: `27' LCD Monitör`,
    ReceivedPaycheck: "maaş yattı",
    FailedAssignment: "teslim etmen gereken bir maddenin süresi doldu. dikkat et.",
    Achievement: "Achievement",
    FailedProject: "bir proje başarısız oldu",
    YouAreHired: "işe alındın! her gün sana bazı görevler gelecek. bu görevleri süreleri dolmadan önce tamamlamalısın.",
    YouAreNotHired: "reddedildin. daha fazla kod yazmalısın.",
    BoughtA: "bought a ",
    JuniorDeveloper: "Junior Developer",
    WriteMeAScript: "siteme script yaz",
    MakeMeALandingPage: "landing sayfası yap",
    IntegratePaymentGateway: "paypal entegrasyonu yap",
    BrowseOnlineStore : "İnternet Mağazası",
    BluetoothHeadphones:"Bluetooth Kulaklık",
    LoCWritten :"Yazılan Kod Satırı Sayısı",
    Time : "Zaman",
    Money:"Para"
};