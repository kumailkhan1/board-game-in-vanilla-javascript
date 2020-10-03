

export default class Player {
    // playerCoords;
    name;
    health;
    currentWeapon;
    imageUrl;
    constructor(name, health = 100, image, weapon = { name:"Stone",
    damage:5
    }) {
        this.name = name;
        this.health = health;
        this.imageUrl = image;
        this.currentWeapon = weapon;
        this.initiliazeHealth();
        this.initializeWeapon();
    }

    highlightMoves(playerNum, coords) {
        let steps = 1;
        let player_x = coords.player[playerNum][0];
        let player_y = coords.player[playerNum][1];
        let obstacleDetected = true;
        // start Highlighting movements along the row
        //Forward
        while (steps <= 3 && obstacleDetected) {
            if ((player_y + steps) <= 9) {
                if (coords.available[player_x][player_y + steps][2] !== "obstacle" && coords.available[player_x][player_y + steps][2] !== "player") {
                    const highlight = document.getElementById("gridCell" + player_x + "-" + (player_y + steps));
                    // coords.highlighted.push([player_x,(player_y + steps)])
                    if (highlight !== null) highlight.classList.add("highlight");
                }

                else {
                    obstacleDetected = false;
                }
            }
            steps++;
        }
        //backward
        steps = 1;
        obstacleDetected = true;
        while (steps <= 3 && obstacleDetected) {
            if ((player_y - steps) >= 0) {
                if (coords.available[player_x][player_y - steps][2] !== "obstacle" && coords.available[player_x][player_y - steps][2] !== "player") {
                    const highlight = document.getElementById("gridCell" + player_x + "-" + (player_y - steps));
                    // coords.highlighted.push([player_x,(player_y - steps)])
                    if (highlight !== null) highlight.classList.add("highlight");
                }

                else {
                    obstacleDetected = false;
                }
            }
            steps++;
        }

        //End highlighting along row

        //Start Highlighting along the y-axis (columns)
        steps = 1;
        obstacleDetected = true;
        while (steps <= 3 && obstacleDetected) {
            if ((player_x - steps) >= 0) {
                if (coords.available[player_x - steps][player_y][2] !== "obstacle" && coords.available[player_x - steps][player_y][2] !== "player") {
                    const highlight = document.getElementById("gridCell" + (player_x - steps) + "-" + player_y);
                    // coords.highlighted.push([(player_x-steps),player_y])
                    if (highlight !== null) highlight.classList.add("highlight");
                }

                else {
                    obstacleDetected = false;
                }
            }
            steps++;
        }

        steps = 1;
        obstacleDetected = true;
        while (steps <= 3 && obstacleDetected) {
            if ((player_x + steps) <= 9) {
                if (coords.available[player_x + steps][player_y][2] !== "obstacle" && coords.available[player_x + steps][player_y][2] !== "player") {
                    const highlight = document.getElementById("gridCell" + (player_x + steps) + "-" + player_y);
                    // coords.highlighted.push([(player_x+steps),player_y])
                    if (highlight !== null) highlight.classList.add("highlight");
                }

                else {
                    obstacleDetected = false;
                }
            }
            steps++;
        }

    }

    initiliazeHealth() {
        let playerHealth1 = document.getElementById("player1-health");
        let playerHealth2 = document.getElementById("player2-health");
        playerHealth1.innerText = this.health + "%";
        playerHealth2.innerText = this.health + "%";
    }

    initializeWeapon() {
        let playerWeapon1 = document.getElementById("player1-weapon");
        let playerWeapon2 = document.getElementById("player2-weapon");
        playerWeapon1.innerText = this.currentWeapon.name;
        playerWeapon2.innerText = this.currentWeapon.name;
    }

    
    updateWeaponAndDamage(playerName, weapon) {
        var playerWeapon;
        if (playerName === "Josh") {
            playerWeapon = document.getElementById("player1-weapon");
        }
        else if (playerName === "Hazel") {
            playerWeapon = document.getElementById("player2-weapon");
        }
        console.log(weapon);
        this.currentWeapon = weapon;
        // let img = document.createElement("img");
        // img.src = "http://localhost:8080/src/images/"+weapon+".png";
        // playerWeapon.appendChild(img);
        playerWeapon.innerText = weapon.name;
        var playerDamage;
        if (playerName === "Josh") {
            playerDamage = document.getElementById("player1-damage");
        }
        else if (playerName === "Hazel") {
            playerDamage = document.getElementById("player2-damage");
        }
        playerDamage.innerText = weapon.damage;
    }

}
