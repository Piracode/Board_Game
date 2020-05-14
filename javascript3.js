var c = document.getElementById('canvas');

var ctx = c.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 2;

for (i=0; i<=500; i=i+50)
{
	ctx.moveTo(i,0);
	ctx.lineTo(i,500);
	ctx.stroke(); 
}

for(j=0; j<=500; j=j+50)
{
	ctx.moveTo(0,j);
	ctx.lineTo(500,j);
	ctx.stroke();
}


var tiles = [];
var numbRows = 10;
var numbCols = 10;


var Player = {
  init: function(src, life, stateName){
  this.weapon = "";
  this.life = life;
  this.tilePosition = defaultTilePosition(stateName);
  this.img = document.createElement('img');
  this.img.src = src;
},
}

var Weapon = {
  init: function(src, damagePoints, stateName){
    this.img = document.createElement('img');
    this.img.src = src;
    this.tilePosition = defaultTilePosition(stateName);
    this.damagePoints = damagePoints;
  }
}

var Obstacle = {
  init: function(src){
    this.img = document.createElement('img');
    this.img.src = src;
    this.tilePosition = defaultTilePosition("obstacle");
  }
}


var Position = {
  init: function(x,y){
    this.x = x;
    this.y = y;
  }
}

function defaultTilePosition(newState){
  let x = Math.floor(Math.random() * numbRows);
  let y =  Math.floor(Math.random() * numbCols);
  let defaultPosition = Object.create(Position);
  defaultPosition.init(x,y);
  setTile(y,x,newState);
  return defaultPosition;
}


var player1 = Object.create(Player);
player1.init("players/rsz_dancerfem.png",100,"player1");

// var player2 = Object.create(Player);
// player2.init("players/rsz_dancermale.png",100,"player2");

// var weapon1 = Object.create(Weapon);
// weapon1.init("weapons/shoes.jpg",20,"weapon1");

// var weapon2 = Object.create(Weapon);
// weapon2.init("weapons/fan.jpg",30,"weapon2");

// var weapon3 = Object.create(Weapon);
// weapon3.init("weapons/earrings.png",40,"weapon3");

// var weapon4 = Object.create(Weapon);
// weapon4.init("weapons/hat.jpg",20,"weapon4");

// var obstacle = Object.create(Obstacle);
// obstacle.init("obstacle/obstacle.jpg","obstacle");

function setGrid() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      tiles.push("empty");
    }
  }
  // console.log(tiles);
};


function getTile(col, row) {
    return tiles[row * numbCols + col];
  }
;

function setTile(col,row,newState){
tiles[row * numbCols + col] = newState;
};

function startGame(){
player1.tilePosition = defaultTilePosition("player1");
};

 // if (img){
//   var scaledWidth = 50 - (margin * 2); // Scale by width
//       var scaledHeight = (img.height * scaledWidth) / img.width;
            
//       ctx.drawImage(img, x, y, scaledWidth, scaledHeight); 
// }




// console.log(getTile(0,1));

var draw = function() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
       console.log(getTile(j,i));
      if (getTile(j,i) === "player1"){
         var margin = ctx.lineWidth - 1;
          var x = j * 50 + margin;  
          var y = i * 50 + margin;
           var scaledWidth = 50 - (margin * 2); // Scale by width
        var scaledHeight = (player1.img.height * scaledWidth) / player1.img.width;
ctx.drawImage(player1.img, x, y, scaledWidth, scaledHeight); 

console.log(player1.img.src);
console.log(player1.img.height + " " + player1.img.width);
console.log(x + " " + y + " "+ scaledWidth + " " + scaledHeight);

      }

          }
  }
};

document.getElementById("startButton").addEventListener("click",initialize);

function initialize(){
setGrid();
startGame();
draw();

};

// while loop

// player1 = object.create (open classroom course)
// to make player move : first put the player on a tile as a default. 
// Then have aaddEVeventListener() link a function that it will call for the click event on the board.
//  Inside ill check which tile was clicked, IF Else staement abourt where it is clicked.



// var getRandom = function() {
// 	return images[Math.floor(Math.random() * images.length)];
// };

// var getRandom = function() {
//   while (images.length){
//     return(images.splice(images.length * Math.random() 0,/ 1)[0]);
//   }
//   return images[Math.floor(Math.random() * images.length)];
// };

  // for(var i = images.length - 1; i>=0; i--){
  //   images.splice(Math.floor(Math.random() * images.length);






// var numberOfLoadedImages = 0;

// for (var i = 0; i < images.length; i++) {
//   var img = images[i];
//   img.onload = function() { 
//   	numberOfLoadedImages++;
//     checkIfAllAreLoaded();
//   };
// }

// var checkIfAllAreLoaded = function() {
//   if (numberOfLoadedImages === images.length) {
//     draw();
//   }
// };



      // var img = getRandom();



//       var margin = ctx.lineWidth - 1;
//       var x = j * 50 + margin;
//       var y = i * 50 + margin;
//       var img ;
// if (getTile (y, x) === "empty"){
  // img = player1;
// }
// else  if get tile is obtacle

// if (img){
//   var scaledWidth = 50 - (margin * 2); // Scale by width
//       var scaledHeight = (img.height * scaledWidth) / img.width;
            
//       ctx.drawImage(img, x, y, scaledWidth, scaledHeight); 
// }
     



// function getImage