var app = new Vue ({
  el: '#app',
  data: {
    hard: false,
    medium: true,
    easy: false,
    score: 0,
    sound1: 'sounds/1.mp3',
    sound2: 'sounds/2.mp3',
    sound3: 'sounds/3.mp3',
    sound4: 'sounds/4.mp3',
    right1: false,
    right2: false,
    right3: false,
    right4: false,
    timer: null,
    hardC: 400,
    mediumC: 1000,
    easyC: 1500,
    begin: false,
    nohard: true,
    kolvoHodov: 0,
    posled: [],
    hod: 0,
    first: 0,
    copyOfPosled: 0
  },
  methods: {
    checkNoHard: function(){
      if(this.medium == false && this.hard == false && this.easy == false){
        this.nohard = true;
      } else {
        this.nohard = false
      }
    },
    changeHard: function(){
      this.checkNoHard();
      this.medium = false;
      this.easy = false;
    },
    changeMedium: function(){
      this.checkNoHard();
      this.hard = false
      this.easy = false
    },
    changeEasy: function(){
      this.checkNoHard();
      this.hard = false
      this.medium = false
    },
    playAudio1: function(){
      if(this.begin == true){
      var audio = new Audio();
      audio.src = this.sound1;
      audio.autoplay = true;
    }
    },
    playAudio2: function(){
      if (this.begin == true){
      var audio = new Audio();
      audio.src = this.sound2;
      audio.autoplay = true;
    }
    },
    playAudio3: function(){
      if (this.begin == true){
      var audio = new Audio();
      audio.src = this.sound3;
      audio.autoplay = true;
    }
    },
    playAudio4: function(){
      if (this.begin == true){
      var audio = new Audio();
      audio.src = this.sound4;
      audio.autoplay = true;
    }
    },
    randomInteger: function(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    user:function(col){
      if(this.begin==true){
      if (col== 1){
        this.right1 = true;
        this.playAudio1();
      } else if (col== 2){
        this.right2 = true;
        this.playAudio2();
      } else if (col == 3){
        this.right3 = true;
        this.playAudio3();
      } else if (col == 4){
        this.right4 = true;
        this.playAudio4();
      }
      setTimeout(()=>this.setAllRightFalse(),this.timer);
    }
    },
    game: function(){
      this.begin = true;
      if(this.hard == "hard"){
        this.timer = this.hardC;
      } else if(this.medium == "medium"){
        this.timer = this.mediumC;
      } else if(this.easy == "easy"){
        this.timer = this.easyC;
      }



      this.posled.push(this.randomInteger(1,4));
      console.log(this.posled[0]);
      let i = 0;
      let interval = setInterval(function(){
        console.log(this.posled[0]);
        this.user(this.posled[i]);
        i = i + 1;
        if (i>=this.posled.length){
          clearInterval(interval);
        }
      }, this.timer);
    },
    setRight1True: function(){
      this.right1 = true;
    },
    setRight2True: function(){
      this.right2 = true;
    },
    setRight3True: function(){
      this.right3 = true;
    },
    setRight4True: function(){
      this.right4 = true;
    },
    setAllRightFalse: function(){
      this.right1 = false;
      this.right2 = false;
      this.right3 = false;
      this.right4 = false;
    },
    beginTrue: function(){
      this.begin = true;
    },
    alertT: function(){
      alert('HEY')
    }
  }
})
