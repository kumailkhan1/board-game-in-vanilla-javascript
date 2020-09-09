import Grid from './grid.js';
import Weapon from './weapon.js';

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
    grid1.playersArray[turn].highlightMoves(turn, grid1.coords);
    //if the highlighted cell is clicked, move the current player there

    parentGrid.onclick = function (e) {
        //Removing image from current position
        if (e.target && e.target.matches("div.highlight")) {
            while (players[turn].firstChild) {
                players[turn].removeChild(players[turn].firstChild);
            }
            let highlightedCells = document.querySelectorAll(".highlight");
            highlightedCells.forEach(function (elem) {
                elem.classList.remove("highlight");
            });
            //Changing the coordinates to the new position

            let highlighted = e.target.id;

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

            }
            if ((grid1.coords.player[0][0] === grid1.coords.player[1][0]) || (grid1.coords.player[0][1] === grid1.coords.player[1][1])) {
                console.log("Players are in same row or column");
                startFight(turn);
                return;
            }

            changeTurn(turn);



        }
    };

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
            let wpn = grid1.playersArray[1].currentWeapon;
            if (wpn === "stone") {
                grid1.playersArray[0].health = grid1.playersArray[0].health - 5;
                if (grid1.playersArray[0].health <= 0) {
                    console.log("Player 2 Won!");
                }

            }
            else if (wpn === "dagger") {
                grid1.playersArray[0].health = grid1.playersArray[0].health - 10;
                if (grid1.playersArray[0].health <= 0) {
                    console.log("Player 2 Won!");
                }
            }
            else if (wpn === "pistol") {
                grid1.playersArray[0].health = grid1.playersArray[0].health - 15;
                if (grid1.playersArray[0].health <= 0) {
                    console.log("Player 2 Won!");
                }
            }
            else if (wpn === "rocket") {
                grid1.playersArray[0].health = grid1.playersArray[0].health - 35;
                if (grid1.playersArray[0].health <= 0) {
                    console.log("Player 2 Won!");
                }
            }
            else if (wpn === "grenade") {
                grid1.playersArray[0].health = grid1.playersArray[0].health - 20;
                if (grid1.playersArray[0].health <= 0) {
                    console.log("Player 2 Won!");
                }
            }

            startFight(1);
        };
        
        player2Defend.onclick = function () {
            console.log("Player 2 Defended");
            startFight(1);
        };
    }
    
    else if (turn === 1) {
        showButton(player1Attack);
        showButton(player1Defend);
        player1Attack.onclick = function () {
            console.log("Player 1 Attacked");
            let wpn = grid1.playersArray[0].currentWeapon;
            if (wpn === "stone") {
                grid1.playersArray[1].health = grid1.playersArray[1].health - 5;
                if (grid1.playersArray[1].health <= 0) {
                    console.log("Player 1 Won!");
                }
//safasf
            }
            else if (wpn === "dagger") {
                grid1.playersArray[1].health = grid1.playersArray[1].health - 10;
                if (grid1.playersArray[1].health <= 0) {
                    console.log("Player 1 Won!");
                }
            }
            else if (wpn === "pistol") {
                grid1.playersArray[1].health = grid1.playersArray[1].health - 15;
                if (grid1.playersArray[1].health <= 0) {
                    console.log("Player 1 Won!");
                }
            }
            else if (wpn === "rocket") {
                grid1.playersArray[1].health = grid1.playersArray[1].health - 35;
                if (grid1.playersArray[1].health <= 0) {
                    console.log("Player 1 Won!");
                }
            }
            else if (wpn === "grenade") {
                grid1.playersArray[1].health = grid1.playersArray[1].health - 20;
                if (grid1.playersArray[1].health <= 0) {
                    console.log("Player 1 Won!");
                }
            }
            startFight(0);
        };
        player1Defend.onclick = function () {
            console.log("Player 1 Defended");
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

startGame(turn);

