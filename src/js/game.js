import Grid from './grid.js';
import Weapon from './weapon.js';
import Swal from 'sweetalert2';

const parentGrid = document.getElementById("gameGrid");
const grid1 = new Grid(10, 10);
grid1.generateGrid();
grid1.setPlayersPlace();
grid1.setWeaponsPlace();
grid1.setObstaclePlace();
initializeDamage();
var players = [document.getElementById("gridCell" + grid1.coords.player[0][0] + "-" + grid1.coords.player[0][1]),
document.getElementById("gridCell" + grid1.coords.player[1][0] + "-" + grid1.coords.player[1][1])];
var turn = getRandomInt(0, 2);
console.log("turn", turn + 1);

//Accessing the buttons to be used in fight sequence i.e in startFight() method
const player1Attack = document.getElementById("player1-attack");
const player1Defend = document.getElementById("player1-defend");
const player2Attack = document.getElementById("player2-attack");
const player2Defend = document.getElementById("player2-defend");
//Hiding the buttons
hideAllButtons();

//Automatically show the player positions on generation

function startGame(turn) {

    //highlight the possible moves first
    console.log(grid1.coords)
    console.log(grid1.coords.player[0])
    grid1.playersArray[turn].highlightMoves(turn, grid1.coords);
    //if the highlighted cell is clicked, move the current player there

    parentGrid.onclick = function (e) {
        //Removing image from current position
        let highlighted;
        if (e.target && e.target.matches("div.highlight")) {
            while (players[turn].firstChild) {
                players[turn].removeChild(players[turn].firstChild);
            }
            let highlightedCells = document.querySelectorAll(".highlight");
            highlightedCells.forEach(function (elem) {
                elem.classList.remove("highlight");
            });
            highlighted = e.target.id;
        }
        else if (e.target && e.target.matches("div.highlight img")) {
            while (players[turn].firstChild) {
                players[turn].removeChild(players[turn].firstChild);
            }
            let highlightedCells = document.querySelectorAll(".highlight");
            highlightedCells.forEach(function (elem) {
                elem.classList.remove("highlight");
            });
            highlighted = e.target.id;
        }

        // Before Changing the coordinates to the new position
        // Updating the available positions by the new players position
        // Deleting The old stored reference
        grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][1] = true;
        grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2] = "";
        // New positions
        grid1.coords.player[turn][0] = parseInt(highlighted.slice(8, 9));
        grid1.coords.player[turn][1] = parseInt(highlighted.slice(10));
        players = [document.getElementById("gridCell" + grid1.coords.player[0][0] + "-" + grid1.coords.player[0][1]),
        document.getElementById("gridCell" + grid1.coords.player[1][0] + "-" + grid1.coords.player[1][1])];

        //Moving the player to the new position, by moving its image
        let moveHere = document.getElementById(highlighted);
        let img = document.createElement("img");
        img.src = grid1.playersArray[turn].imageUrl;

        moveHere.appendChild(img)
        //Checking if the current position has any weapon on it, then update the weapon and damage
        if (grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2] instanceof Weapon) {

            let weapon = grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2];
            players[turn].removeChild(players[turn].childNodes[0]);
            grid1.playersArray[turn].updateWeaponAndDamage(grid1.playersArray[turn].name, weapon);

            // Adding the new reference to available array
           
        }
        grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][1] = false;
        grid1.coords.available[grid1.coords.player[turn][0]][grid1.coords.player[turn][1]][2] = "player";
        let player1_xPos = grid1.coords.player[0][0];
        let player1_yPos = grid1.coords.player[0][1];
        let player2_xPos = grid1.coords.player[1][0];
        let player2_yPos = grid1.coords.player[1][1];

        // Checking if players are in adjacent columns
        if (player1_yPos === (player2_yPos + 1) && player1_xPos === player2_xPos) {
            console.log("Players are in same row.");
            startFight(turn);
            return;
        }
        if (player1_yPos === (player2_yPos - 1) && player1_xPos === player2_xPos) {
            console.log("Players are in same row.");
            startFight(turn);
            return;
        }

        // Checking if players are in adjacent rows
        if (player1_xPos === (player2_xPos + 1) && player1_yPos === player2_yPos) {
            console.log("Players are in same column.");
            startFight(turn);
            return;
        }
        if (player1_xPos === (player2_xPos - 1) && player1_yPos === player2_yPos) {
            console.log("Players are in same column.");
            startFight(turn);
            return;
        }

        changeTurn(turn);


    };

}
var playersMoves = {
    player1Dfd: false,
    player2Dfd: false,
    player1attk: false,
    player2attk: false,
    wpn1: null,
    wpn2: null
}
function startFight(turn) {
    //Hiding all Buttons 

    hideAllButtons();
    //Checking which player has the turn, if player 1 moved last, then fight will start from player 2 and vice versa

    if (turn === 0) {
        showButton(player2Attack);
        showButton(player2Defend);
        player2Attack.onclick = function () {
            console.log("Player 2 Attacked");
            playersMoves.player2attk = true;
            playersMoves.wpn2 = grid1.playersArray[1].currentWeapon;
            checkMoves(playersMoves);
            console.log(playersMoves);
            startFight(1);
        };

        player2Defend.onclick = function () {
            console.log("Player 2 Defended");
            console.log(playersMoves);
            playersMoves.player2Dfd = true;
            playersMoves.wpn2 = grid1.playersArray[1].currentWeapon;
            checkMoves(playersMoves);
            console.log(playersMoves);
            startFight(1);
        };
    }

    else if (turn === 1) {
        showButton(player1Attack);
        showButton(player1Defend);
        player1Attack.onclick = function () {
            console.log("Player 1 Attacked");
            playersMoves.player1attk = true;
            playersMoves.wpn1 = grid1.playersArray[0].currentWeapon;
            checkMoves(playersMoves);
            console.log(playersMoves);
            startFight(0);
        };
        player1Defend.onclick = function () {
            console.log("Player 1 Defended");
            playersMoves.player1Dfd = true;
            playersMoves.wpn1 = grid1.playersArray[0].currentWeapon;
            checkMoves(playersMoves);
            startFight(0);
        };
    }


}

function changeTurn(turn) {
    if (turn === 0) {
        startGame(1);
    }
    else {
        startGame(0);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function initializeDamage() {
    let playerDamage1 = document.getElementById("player1-damage");
    let playerDamage2 = document.getElementById("player2-damage");
    playerDamage1.innerText = 5;
    playerDamage2.innerText = 5;
}

function hideAllButtons() {
    player1Attack.style.display = "none";
    player1Defend.style.display = "none";
    player2Attack.style.display = "none";
    player2Defend.style.display = "none";
}
function hideButton(x) {
    x.style.display = "none";
}


function showButton(x) {
    x.style.display = "inline";

}

function checkMoves(playersMoves) {
    let player1Health = document.getElementById("player1-health");
    let player2Health = document.getElementById("player2-health");

    if (playersMoves.player1attk && playersMoves.player2attk) {
        //Both Health should decrease
        grid1.playersArray[0].health = grid1.playersArray[0].health - playersMoves.wpn2.damage; //Decreasing player 1 health
        grid1.playersArray[1].health = grid1.playersArray[1].health - playersMoves.wpn1.damage; // Decreasing player 2 health
        //Updating the UI
        if (grid1.playersArray[0].health <= 0) {
            grid1.playersArray[0].health = 0;
            // Hazel
            playerWon(grid1.playersArray[1]);
        }
        else if (grid1.playersArray[1].health <= 0) {
            grid1.playersArray[1].health = 0;
            // Josh Won
            playerWon(grid1.playersArray[0]);

        }
        console.log("Both Attacked");
        player1Health.innerText = grid1.playersArray[0].health;
        player2Health.innerText = grid1.playersArray[1].health;

        playersMoves.player1attk = false;
        playersMoves.player2attk = false;
    }
    else if (playersMoves.player1attk && playersMoves.player2Dfd) {
        //Only Player 2 health decreases by half of player 1 weopons damage
        console.log("Player 2 defended");
        grid1.playersArray[1].health = grid1.playersArray[1].health - Math.ceil(playersMoves.wpn1.damage / 2);
        if (grid1.playersArray[1].health <= 0) {
            grid1.playersArray[1].health = 0;
            // Josh Won
            playerWon(grid1.playersArray[0]);

        }
        player2Health.innerText = grid1.playersArray[1].health;

        playersMoves.player1attk = false;
        playersMoves.player2Dfd = false;
    }
    else if (playersMoves.player1Dfd && playersMoves.player2attk) {
        //Only player 1 health decreases by half
        console.log("Player 1 defended");
        grid1.playersArray[0].health = grid1.playersArray[0].health - Math.ceil(playersMoves.wpn2.damage / 2);
        if (grid1.playersArray[0].health <= 0) {
            grid1.playersArray[0].health = 0;
            // Hazel Won
            playerWon(grid1.playersArray[1]);
        }
        player1Health.innerText = grid1.playersArray[0].health;
        playersMoves.player1Dfd = false;
        playersMoves.player2attk = false;
    }
    else if (playersMoves.player1Dfd && playersMoves.player2Dfd) {
        //Nothing happens
        console.log("Both player defended!");
        playersMoves.player1Dfd = false;
        playersMoves.player2Dfd = false;
    }
}

function playerWon(player) {
    setTimeout(() => {
        Swal.fire({
            title: player.name + ' Won!',
            text: (function () {
                if (player.name === "Josh") {
                    return 'He is an assassin after all!'
                }
                if (player.name === "Hazel") {
                    return 'Looks like he got his revenge!'
                }
            })(player),
            imageUrl: (function () {
                if (player.name === "Josh") {
                    return './../images/player1.png'
                }
                if (player.name === "Hazel") {
                    return './../images/player2.png'
                }

            })(player),
            confirmButtonText: 'Play Again!',
            allowOutsideClick: true
        }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
                location.reload();
            }


        });
    }, 500);
}

startGame(turn);

