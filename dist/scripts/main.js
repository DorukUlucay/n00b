!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.n00b=t():e.n00b=t()}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/scripts/",i(i.s=0)}([function(e,t,i){"use strict";function n(e,t){return null!=e&&null!=e||(e=0),null!=t&&null!=t||(t=1e6),Math.floor(Math.random()*(t-e+1)+e)}function a(e){return e[Math.floor(Math.random()*e.length)]}i.r(t);var o={Random:function(){var e=(new Date).getTime()/1e3;return((1+Math.random())*e|0).toString(16).substring(1)},NewGuid:function(){return((o.Random()+o.Random()).slice(0,8)+"-"+o.Random().slice(0,4)+("-4"+o.Random().slice(0,3))+"-"+o.Random().slice(0,4)+"-"+(o.Random()+o.Random()).slice(0,12)).toLowerCase()},NewGuidWithoutDash:function(){return o.NewGuid().split("-").join("")}};String.prototype.contains=function(e){return function(e,t){return-1!==e.indexOf(t)}(this,e)},String.prototype.format=function(){var e=arguments;return this.replace(/{(\d+)}/g,function(t,i){return void 0!==e[i]?e[i]:t})};a(["father","mother"]);const r={GameName:"Code Clicker V 0.2.2",welcome:"bilgisayar mühendisliği diplomanı aldın. iş bulmayı beklerken biraz kod yazsan iyi olur.",family_fund:"ailen ilginden memnun. bu yüzden sana biraz para verdiler. bazı eşyalar satın alabilirsin.",freelance_board:"bir arkadaşın freelance işler bulabileceğin bir mesaj panosundan bahsetti. bir baksan iyi olur.",completed_job:"freelance bir projeyi tamamladın ve {0} $ kazandın",get_books:"daha ciddi işlere girişmeden önce bazı kitaplar okusan iyi olur. internet mağazasına bak.",open_source:"bir arkadaşın open source projeler bulabileceğin bir siteden bahsetti. biraz daha pratik ve biraz da network yapmış olursun.",get_fulltime:"bir arkadaşın staj hakkında konuşuyordu. şu kariyer sitesine girme vaktin gelmedi mi ?",not_enough_money:`yeterli paran yok. ${a(["baban","annen"])} biraz verdi ama geri ödemen gerek.`,completedAssignment:"bir madde tamamladın",FixTheBug:"Bug'ı düzelt",WriteUnitTest:"Unit test yaz",MechanicKeyboard:"Mekanik Klavye",LCD_22:"22' LCD Monitör",CoffeMachine:"Filtre Kahve Makinası",LCD_27:"27' LCD Monitör",ReceivedPaycheck:"maaş yattı",FailedAssignment:"teslim etmen gereken bir maddenin süresi doldu. dikkat et.",Achievement:"Başarım",FailedProject:"bir proje başarısız oldu",YouAreHired:"işe alındın! her gün sana bazı görevler gelecek. bu görevleri süreleri dolmadan önce tamamlamalısın. Aylık maaşın {0} $",YouAreNotHired:"reddedildin. daha fazla kod yazmalısın.",BoughtA:"bir [0] satın aldın",BoughtABook:"bir [0] kitabı satın aldın",JuniorDeveloper:"Junior Developer",WriteMeAScript:"siteme script yaz",MakeMeALandingPage:"landing sayfası yap",IntegratePaymentGateway:"paypal entegrasyonu yap",BrowseOnlineStore:"İnternet Mağazası",BluetoothHeadphones:"Bluetooth Kulaklık",LoCWritten:"Yazılan Kod Satırı Sayısı",Time:"Zaman",Money:"Para",BrowseCareers:"İş İlanlarına Bak",Kindle:"E-Kitap Okuyucusu",ToggleFreelance:"Freelance Penceresini Aç/Kapa",WriteCodeButtonLabel:"Kod Yaz(1 Tık = [0] satır kod)",SubscribeToBoard:"Freelance mesaj panosuna üye ol([0] $)",Description:"Tanım",LoC:"Satır Kod",DeadlineHours:"Teslim Zamanı(saat)",NoActiveJobs:"Aktif Freelance İşin Yok",PrettyTime:"Gün: [0] Saat: [1]",NoActiveAssignments:"Aktif Görev Yok",CareersBoard:"İş İlanları",AvailableCareers:"CV'nize uygun ilanlar",ActiveJobs:"Aktif Projeler",Job:"Proje",Pay:"Ücret",Year:"Yıl",AvailableJobs:"Aktif İlanlar",NoAvailableJobs:"Aktif İlan Yok",TakeJob:"İşi Al",ActiveAssignments:"Aktif Görevler",LoC100:"100 satır kod yazıldı",LoC200:"200 satır kod yazıldı",LoC300:"300 satır kod yazıldı",LoC400:"400 satır kod yazıldı",LoC500:"500 satır kod yazıldı",LoC600:"600 satır kod yazıldı",LoC700:"700 satır kod yazıldı",LoC800:"800 satır kod yazıldı",LoC900:"900 satır kod yazıldı",LoC1000:"1000 satır kod yazıldı",LoC1500:"1500 satır kod yazıldı",LoC5000:"5000 satır kod yazıldı",YourReadList:"Okuma listeniz. Okumak için tıklayın.",ReadBefore:"Okuduğunuz kitaplar",LeaveYourJobFirst:"Yeni bir işe girmek için mevcut işinizden ayrılmalısınız",Settings:"Ayarlar",Stats:"İstatistikler",Restart:"Oyunu Sıfırla",SureToRestart:"Oyunu sıfırlamak istediğinize emin misiniz ?",WriteSQLFunction:"Bir SQL Fonksiyonu yaz",FixMyCss:"CSS dosyamı düzenle",GamerArmChair:"Oyuncu Koltuğu",CthulhuFigurine:"Cthulhu Figürü",WirelessMouse:"Kablosuz Mouse",YoureFiredFailedAssignments:"Atanan maddeleri tamamlamadığın için işine son verildi.",MidLevelDeveloper:"Mid Level Developer",PartialSalaryWired:"{0} $ (çalıştığın {1} günün karşılığı) hesabına yatırıldı.",ThanksForPlaying:"Code Clicker'ı oynadığın için teşekkürler. Şu anda 0.2.2 sürümündeyiz. Eğer ekrandaki her şeye tıkladıysan bundan sonra pek bir şey yok(şimdilik). Takipte kal."};var s={mechanic_keyboard:{id:1,type:"Hardware",name:r.MechanicKeyboard,price:20,boost:.5,bought:!1},lcd_22:{id:2,type:"Hardware",name:r.LCD_22,price:100,boost:1,bought:!1},coffee:{id:4,type:"Hardware",name:r.CoffeMachine,price:45,boost:.5,bought:!1},lcd_27:{id:5,type:"Hardware",name:r.LCD_27,price:200,boost:1.5,bought:!1},sql_01:{id:6,type:"Book",name:"SQL 101",price:15,bought:!1,pages:25,readPages:0,skills:{SQL:1}},data_and_alg:{id:7,type:"Book",name:"Data Structures and Algorithms",price:20,bought:!1,pages:25,readPages:0,skills:{Programming:1}},web_development:{id:8,type:"Book",name:"Web Design & Development",price:20,bought:!1,pages:25,readPages:0,skills:{WebDevelopment:1}},csharp:{id:9,type:"Book",name:"C# & .NET",price:20,bought:!1,pages:25,readPages:0,skills:{Programming:1}},xfactor:{id:10,type:"Software",name:"XFactor License",description:"Code better, code faster",price:300,boost:5,bought:!1},code_studio:{id:11,type:"Software",name:"ZCode Studio",description:"IDE",price:400,boost:6,bought:!1},geralt_figure:{id:12,type:"Decorative",name:"Geralt Of Rivia Figurine",description:null,price:100,boost:.1,bought:!1},vader_bust:{id:13,type:"Decorative",name:"Darth Vader Bust",description:null,price:250,boost:.3,bought:!1},bluetoothHeadphones:{id:14,type:"Hardware",name:r.BluetoothHeadphones,description:null,price:150,boost:.4,bought:!1},gamerArmChair:{id:15,type:"Furniture",name:r.GamerArmChair,description:null,price:1150,boost:2,bought:!1},cthulhuFigurine:{id:16,type:"Decorative",name:r.CthulhuFigurine,description:null,price:666,boost:.1,bought:!1},wireless_mouse:{id:17,type:"Hardware",name:r.WirelessMouse,price:25,boost:.4,bought:!1}},l={junior_dev:{id:1,title:r.JuniorDeveloper,LoC:1e3,annualSalary:15e3,failedAssignmentCount:0,monthlySalary:function(){return(this.annualSalary/12).toFixed(2)}},mid_dev:{id:2,title:r.MidLevelDeveloper,LoC:3e3,annualSalary:3e4,failedAssignmentCount:0,monthlySalary:function(){return(this.annualSalary/12).toFixed(2)}}},c={at_100:{Title:"100 Lines Of Code",Description:r.LoC100,done:!1,LoC:100,Do:function(e){e.log(r.family_fund),e.shop.push(s.mechanic_keyboard),e.shop.push(s.lcd_22),e.shop.push(s.lcd_27),e.shop.push(s.coffee),e.shop.push(s.wireless_mouse),e.money+=100,e.achievements.at_100.done=!0}},at_200:{Title:"200 Lines Of Code",Description:r.LoC200,done:!1,LoC:200,Do:function(e){e.log(r.freelance_board),e.achievements.at_200.done=!0}},boughtFreelanceSubscr:{Title:"Freelancer",Description:"Subscribed to freelance board",done:!1,Do:function(e){}},at_300:{Title:"300 Lines Of Code",Description:r.LoC300,done:!1,LoC:300,Do:function(e){e.achievements.at_300.done=!0,e.shop.push(s.bluetoothHeadphones)}},at_400:{Title:"400 Lines Of Code",Description:r.LoC400,done:!1,LoC:400,Do:function(e){e.log(r.get_books),e.shop.push(s.sql_01),e.shop.push(s.csharp),e.shop.push(s.web_development),e.shop.push(s.data_and_alg),e.achievements.at_400.done=!0}},at_500:{Title:"500 Lines Of Code",Description:r.LoC500,done:!1,LoC:500,Do:function(e){e.log(r.get_fulltime),e.availableCareers.push(l.junior_dev),e.availableCareers.push(l.mid_dev),e.achievements.at_500.done=!0}},at_600:{Title:"600 Lines Of Code",Description:r.LoC600,done:!1,LoC:600,Do:function(e){e.log(r.open_source),e.achievements.at_600.done=!0}},at_700:{Title:"700 Lines Of Code",Description:r.LoC700,done:!1,LoC:700,Do:function(e){e.shop.push(s.xfactor),e.shop.push(s.code_studio),e.shop.push(s.geralt_figure),e.shop.push(s.vader_bust),e.achievements.at_700.done=!0}},at_800:{Title:"800 Lines Of Code",Description:r.LoC800,done:!1,LoC:800,Do:function(e){e.achievements.at_800.done=!0,e.shop.push(s.gamerArmChair),e.shop.push(s.cthulhuFigurine)}},at_900:{Title:"900 Lines Of Code",Description:r.LoC900,done:!1,LoC:900,Do:function(e){e.achievements.at_900.done=!0}},at_1000:{Title:"1000 Lines Of Code",Description:r.LoC1000,done:!1,LoC:1e3,Do:function(e){e.achievements.at_1000.done=!0}},at_1500:{Title:"1500 Lines Of Code",Description:r.LoC1500,done:!1,LoC:1500,Do:function(e){e.achievements.at_1500.done=!0}},at_5000:{Title:"5000 Lines Of Code",Description:r.LoC5000,done:!1,LoC:5e3,Do:function(e){e.achievements.at_5000.done=!0,alert(r.ThanksForPlaying)}}},d={FixTheBug:{title:r.FixTheBug,LoC:50,deadline:24,id:o.NewGuidWithoutDash(),chances:{min:1,max:33}},UnitTest:{title:r.WriteUnitTest,LoC:50,deadline:24,id:o.NewGuidWithoutDash(),chances:{min:34,max:66}},WriteSQLFunction:{title:r.WriteSQLFunction,LoC:25,deadline:24,id:o.NewGuidWithoutDash(),chances:{min:67,max:100}}},u={Script:{title:r.WriteMeAScript,price:15,LoC:25,deadline:48,id:o.NewGuidWithoutDash(),expires:10,difficulty:1,chances:{min:50,max:65}},LandingPage:{title:r.MakeMeALandingPage,price:25,LoC:35,deadline:36,id:o.NewGuidWithoutDash(),expires:15,difficulty:2,chances:{min:65,max:80}},PaymentGateway:{title:r.IntegratePaymentGateway,price:45,LoC:50,deadline:72,id:o.NewGuidWithoutDash(),expires:15,difficulty:3,chances:{min:80,max:90}},FixMyCss:{title:r.FixMyCss,price:35,LoC:40,deadline:72,id:o.NewGuidWithoutDash(),expires:15,difficulty:3,chances:{min:90,max:100}}},h=900,m=2,p=!1,f={text:null,file:"",position:0,length:0,lines:[],monitorHeight:5,init:function(){jQuery.get(f.file,function(e){f.text=e.split("\n"),length=f.text.length})},addText:function(){var e=$("#console");e[0].getElementsByTagName("span").length==this.monitorHeight&&(e[0].getElementsByTagName("span")[0].remove(),e[0].getElementsByTagName("br")[0].remove()),e.html(e.html()+"<span>"+f.text[f.position++]+"</span><br/>"),f.position==f.length&&(f.position=0),$("#console").animate({scrollTop:$("#console")[0].scrollHeight},1e3)}},g=null,y=null;$(function(){new Vue({el:"#app",data:{stats:{},boardSubscriptionPrice:10,title:r.GameName,turn:1,hour:1,day:1,LoC:0,money:0,locPerTick:m,shop:[],achievements:c,freelance:[],activeFreelance:[],availableCareers:[],workedDays:0,books:{read:[],unread:[]},skills:{SQL:1,Programming:1,WebDevelopment:1},completedAchievements:[],career:null,careerAsignments:[],verbose:p,stats:{freelanceProjectsCompleted:0,freelanceMoneyEarned:0,careerDays:0,careerAssignmentsCompleted:0,careerMoneyEarned:0,moneySpent:0},M:r},methods:{print:function(){},events:function(){this.turn++,this.hour++,this.hourlyEvents(),this.turn%24==0&&(this.day++,this.hour=1,this.dailyEvents(),this.day%7==0&&this.weeklyEvents(),this.day%30==0&&this.monthlyEvents())},hourlyEvents:function(){y.boardPostExpiration(),y.failingProjects(),y.achievementCheck(),y.freelanceJobMarket(),y.sendCareerAsignments(),y.failingAsignments()},dailyEvents:function(){null!=this.career&&(this.workedDays++,this.stats.careerDays++),this.salary(),this.log("a new day",!0)},weeklyEvents:function(){this.log("a new week",!0)},monthlyEvents:function(){this.log("a new month",!0)},next:function(){y=this,g=setTimeout(function(){y.events(),y.print(),y.next(),y.saveGame()},h)},writeCode:function(){this.LoC+=this.locPerTick,this.descendLoC(),f.addText()},log:function(e,t=null){t&&this.verbose?$("#messages").prepend("<p>"+this.prettyTime()+": "+e+"</p>"):null==t&&$("#messages").prepend("<p>"+this.prettyTime()+": "+e+"</p>")},prettyTime:function(){return this.M.PrettyTime.replace("[0]",this.day).replace("[1]",this.hour)},descendLoC:function(){0!=this.careerAsignments.length?(this.careerAsignments[0].LoC-=this.locPerTick,0>=this.careerAsignments[0].LoC&&(this.log(r.completedAssignment),this.careerAsignments.splice(0,1),this.stats.careerAssignmentsCompleted++)):0!=this.activeFreelance.length&&(this.activeFreelance[0].LoC-=this.locPerTick,0>=this.activeFreelance[0].LoC&&(this.log(r.completed_job.format(this.activeFreelance[0].price)),this.money+=this.activeFreelance[0].price,this.stats.freelanceProjectsCompleted++,this.stats.freelanceMoneyEarned+=this.activeFreelance[0].price,this.activeFreelance.splice(0,1)))},subscribe:function(){this.money<this.boardSubscriptionPrice&&this.log(r.not_enough_money),this.achievements.boughtFreelanceSubscr.done=!0,this.money-=this.boardSubscriptionPrice,this.stats.moneySpent+=this.boardSubscriptionPrice},buy:function(){var e=event.toElement.id,t=jQuery.grep(this.shop,function(t){return t.id==e})[0];this.money>=t.price?(void 0!==t.boost&&(this.locPerTick+=t.boost),t.bought=!0,"Book"==t.type?(this.books.unread.push(t),this.log(r.BoughtABook.replace("[0]",t.name)),$("#storeMsg").html(r.BoughtABook.replace("[0]",t.name))):(this.log(r.BoughtA.replace("[0]",t.name)),$("#storeMsg").html(r.BoughtA.replace("[0]",t.name))),this.money-=t.price,this.stats.moneySpent+=t.price):$("#storeMsg").html("not enough money")},getJob:function(){var e=event.toElement.id,t=jQuery.grep(this.freelance,function(t){return t.id==e})[0];this.activeFreelance.push(t),this.freelance.splice(this.freelance.indexOf(t),1)},interview:function(){var e=event.toElement.id,t=jQuery.grep(this.availableCareers,function(t){return t.id==e})[0];this.LoC>=t.LoC?(this.leaveCareer(),this.career=t,this.log(r.YouAreHired.format(this.career.monthlySalary())),$("#careerMsg").html(r.YouAreHired.format(this.career.monthlySalary()))):(this.log(r.YouAreNotHired),$("#careerMsg").html(r.YouAreNotHired))},read:function(){var e=event.toElement.id,t=jQuery.grep(this.books.unread,function(t){return t.id==e})[0];if(t.readPages+=1,t.readPages==t.pages){var i=this.books.unread.indexOf(t);this.books.read.push(t),this.books.unread.splice(i,1),this.locPerTick*=1.1}},boardPostExpiration:function(){for(let e=0;e<y.freelance.length;e++){const t=y.freelance[e];0==t.expires?y.freelance.splice(e,1):t.expires--}},failingProjects:function(){for(let e=0;e<y.activeFreelance.length;e++){const t=y.activeFreelance[e];t.deadline--,0==t.deadline&&(y.activeFreelance.splice(e,1),y.log(r.FailedProject))}},achievementCheck:function(){for(const e in c)if(c.hasOwnProperty(e)){const t=c[e];t.done||-1!=y.completedAchievements.indexOf(e)||t.hasOwnProperty("LoC")&&y.LoC>=t.LoC&&(y.completedAchievements.push(e),t.Do(y),y.log(r.Achievement+" : "+t.Description))}},freelanceJobMarket:function(){if(y.achievements.boughtFreelanceSubscr.done){var e=n(1,100),t=null;for(const i in u)if(u.hasOwnProperty(i)){const n=u[i];n.chances.min<e&&n.chances.max>e&&(t=n)}null!==t&&this.freelance.length<6&&y.freelance.push(JSON.parse(JSON.stringify(t)))}},saveGame:function(){localStorage.setItem("gameData",JSON.stringify(this.$data))},loadGamex:function(){y=this;var e=localStorage.getItem("gameData");null!=e?(e=JSON.parse(e),Object.keys(this.$data).forEach(e=>this.$data[e]=null),Object.entries(e).forEach(e=>Vue.set(this.$data,e[0],e[1]))):this.log(r.welcome)},sendCareerAsignments:function(){if((8==this.hour||13==this.hour)&&null!=y.career){var e=n(1,100),t=null;for(const i in d)if(d.hasOwnProperty(i)){const n=d[i];n.chances.min<e&&n.chances.max>e&&(t=n)}null!==t&&y.careerAsignments.push(JSON.parse(JSON.stringify(t)))}},failingAsignments:function(){for(let e=0;e<y.careerAsignments.length;e++){const t=y.careerAsignments[e];t.deadline--,0==t.deadline&&(y.careerAsignments.splice(e,1),y.log(r.FailedAssignment),this.career.failedAssignmentCount++,10==this.career.failedAssignmentCount&&(y.log(r.YoureFiredFailedAssignments),this.leaveCareer()))}},salary:function(){null!=this.career&&this.workedDays>29&&this.workedDays%30==0&&(this.money+=this.career.annualSalary/12,this.money.careerMoneyEarned+=this.career.annualSalary/12,this.log(r.ReceivedPaycheck))},restart:function(){confirm(this.M.SureToRestart)&&(clearTimeout(g),localStorage.removeItem("gameData"),window.location.reload())},leaveCareer:function(){if(null!=this.career){var e=this.career.annualSalary/12/30*this.workedDays;this.money+=e,this.log(r.PartialSalaryWired.format(e,this.workedDays)),this.workedDays=0,this.failedAssignmentCount=0,this.career=null,this.careerAsignments=[]}}},mounted:function(){document.title=this.title,this.loadGamex(),this.next(),f.file="kernel.txt",f.init()},computed:{printTime:function(){return this.prettyTime()},writeCodeLabel:function(){return this.M.WriteCodeButtonLabel.replace("[0]",this.locPerTick.toFixed(2))},boardSubscriptionPriceLabel:function(){return this.M.SubscribeToBoard.replace("[0]",this.boardSubscriptionPrice.toFixed(2))},currency:function(){return"$"}}})})}])});