class Creature {
    static number = 0;
    #id;
    name;
    healthPoints;
    damage;
    constructor(name, hp, damage) {
        this.name = name;
        this.healthPoints = hp;
        this.damage = damage;
        this.number++;
        this.#id = this.number;
    }
    get id() {
        return this.#id;
    }
    defeat() {
        alert(`Существо ${this.name} уничтожено!`);
        this.number--;
    };
}

class Player extends Creature {
    #lvl;
    get lvl() {
        return this.#lvl;
    }
    attack(other) {
        if(this.healthPoints <= 0 || other.healthPoints <= 0)
            return false;
        alert(`Игрок ${this.name} атакует существо ${other.name} и наносит ${this.damage} урона`);
        other.healthPoints -= this.damage;
        alert(`\nЗдоровье Игрока: ${this.healthPoints}\nЗдоровье существа: ${other.healthPoints}`);
        if(other.healthPoints <= 0) {
            other.defeat();
            this.#lvl++;
            return true;
        }
    };
}

class Enemy extends Creature {
    attack(other) {
        if(this.healthPoints <= 0 || other.healthPoints <= 0)
            return false;
        alert(`Существо ${this.name} атакует игрока ${other.name} и наносит ${this.damage} урона`)
        other.healthPoints -= this.damage;
        alert(`\nЗдоровье Игрока: ${other.healthPoints}\nЗдоровье существа: ${this.healthPoints}`);
        if(other.healthPoints <= 0) {
            other.defeat();
            return true;
        }
    };
}

var player = new Player('Geralt', 250, 50);
var enemy = new Enemy('Ghoul', 150, 40);

for(let i = 0, br = false; br != true ; i++) {
    if(player.healthPoints <= 0 || enemy.healthPoints <= 0)
        br = true;
    player.attack(enemy);
    enemy.attack(player);
}