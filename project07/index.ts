class Player {
    name: string;
    health: number;
    inventory: string[];

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    move(direction: string) {
        console.log(`Player moves ${direction}`);
    }

    attack() {
        console.log("Player attacks the enemy");
    }

    collectItem(item: string) {
        this.inventory.push(item);
        console.log(`Player collects ${item}`);
    }

    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Inventory: ${this.inventory}`);
    }
}

class Enemy {
    type: string;
    health: number;

    constructor(type: string) {
        this.type = type;
        this.health = 50;
    }

    attack() {
        console.log(`Enemy ${this.type} attacks the player`);
    }
}

const player = new Player("Hero");
const enemy = new Enemy("Goblin");


player.showStatus();
player.move("north");
player.attack();
enemy.attack();
player.collectItem("Sword");
player.showStatus();
