var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    Player.prototype.move = function (direction) {
        console.log("Player moves ".concat(direction));
    };
    Player.prototype.attack = function () {
        console.log("Player attacks the enemy");
    };
    Player.prototype.collectItem = function (item) {
        this.inventory.push(item);
        console.log("Player collects ".concat(item));
    };
    Player.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("Health: ".concat(this.health));
        console.log("Inventory: ".concat(this.inventory));
    };
    return Player;
}());
var Enemy = /** @class */ (function () {
    function Enemy(type) {
        this.type = type;
        this.health = 50;
    }
    Enemy.prototype.attack = function () {
        console.log("Enemy ".concat(this.type, " attacks the player"));
    };
    return Enemy;
}());
var player = new Player("Hero");
var enemy = new Enemy("Goblin");
player.showStatus();
player.move("north");
player.attack();
enemy.attack();
player.collectItem("Sword");
player.showStatus();
