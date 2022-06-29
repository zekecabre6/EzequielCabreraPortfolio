var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

$(window).on('resize', function () {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

colors = ['#61E89E', '#FF8A80', '#F9ED86', '#FFB28E', '#95FFEF', '#D75A6C', '#79C4FC', '#DBDAD9', '#FF405F'];
symbols = [
  'ZEKE', 'JS', 'HTML', 'SASS', 'CSS', 'BOOTSTRAP', '//', '<>'
  //, '~', '=', '*', '#', '{', '}', '[', ']', '!', '?', '>'
]

objPack = [];
gravity = 0.1;

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function objects(x, y) {
  this.x = x = randomInt(0, width);
  this.y = y = -50 //randomInt(0, width);

  this.w = 50;
  this.h = 50;

  this.a = 1;

  this.fontSize = 42;
  this.fontWeight = '100'
  this.size = 20

  this.vx = randomInt(-1, 1);
  this.vy = randomInt(-1, 1);
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.symbols = symbols[Math.floor(Math.random() * symbols.length)];
}

objects.prototype.draw = function () {
  context.globalAlpha = this.a
  context.save()
  context.font = '100 ' + this.fontSize + 'px bt_mono'
  context.fillText(this.symbols, this.x, this.y)
  context.restore()
  context.fillStyle = this.color
  this.x += this.vx;
  this.y += this.vy;
  this.vy += gravity;
  this.vx *= 0.99;
  this.vy *= 0.99;
  this.size -= 0.05;

  this.a > 0 ? this.a -= 0.003 : this.a = 0
}

function update() {
  context.clearRect(0, 0, width, height);
  context.globalCompositeOperation = "destination-over";

  if (objPack.length < 250) objPack.push(new objects(width / 2, height / 2));

  for (var i = 0; i < objPack.length; i++) {

    objPack[i].draw();

    if (objPack[i].size < 0.1) {
      objPack.splice(0, 1);
    }
  }

  requestAnimationFrame(update);
}

update();