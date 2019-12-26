// reset the game by refreshing the page
function resetGame() {
  location.reload();
}

// Enemies our player must avoid
var Enemy = function(x, y, movement) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
  this.x = x;
  this.y = y;
  this.movement = movement;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x >= 500) {
    this.x = 0;
  }

  this.x = this.x + this.movement * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y, movement) {
  this.sprite = "images/char-boy.png";
  this.x = x;
  this.y = y;
  this.movement = movement;
};
Player.prototype.update = function(dt) {};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// handle player movements by tracking inputs keys
Player.prototype.handleInput = function(key) {


  // Changing player position logic
  if (key === "up") {
    if (player.y < 100) {
      alert("Player wins!!");
      // resetGame();
    } else {
      player.y = player.y - 90;
    }
  } else if (key === "down") {
    if (player.y >= 400) {
      return;
    } else {
      player.y = player.y + 90;
    }
  } else if (key === "right") {
    if (player.x >= 400) {
      return;
    } else {
      player.x = player.x + 100;
    }
  } else if (key === "left") {
    if (player.x < 100) {
      return;
    } else {
      player.x = player.x - 100;
    }
  }
};

// Now instantiate your objects.(Done)
// Place all enemy objects in an array called allEnemies(Done)
// Place the player object in a variable called player(Done)

var allEnemies = [];
var e1 = new Enemy(100, 220, 200);
var e2 = new Enemy(0, 130, 200);
var e3 = new Enemy(300, 40, 200);

allEnemies.push(e1);
allEnemies.push(e2);
allEnemies.push(e3);

var player = new Player(200, 400, 0);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
