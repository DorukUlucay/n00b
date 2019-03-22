$(function() {
  var app = new Vue({
    el: "#app",

    data: {
      title: "Game",
      turn: 1,
      day: 1,
      money: 0,
      stock: 0,
      material: 10
    },

    methods: {
      print: function() {},
      events: function() {
        if (this.turn % 24 == 0) {
          this.day++;
          this.turn = 0;
        }
        this.turn++;
      },
      next: function() {
        game = this;
        setTimeout(function() {
          game.events();

          //your code here

          game.print();
          game.next();
        }, 1000);
      },
      make: function() {
        this.stock++;
        this.material--;
      }
    },

    mounted: function() {
      document.title = this.title;
      this.next();
    }
  });
});
