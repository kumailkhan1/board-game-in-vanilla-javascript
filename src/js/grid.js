import "./../css/styles.css";
import Player from "./player.js"
import Weapon from './weapon.js';
import Coordinates from "./Coordinates.js";
import pistolImg from "../images/pistol.png"
import daggerImg from "../images/dagger.png"
import rocketImg from "../images/rocket.png"
import grenadeImg from "../images/grenade.png"
import player1Img from "../images/player1.png"
import player2Img from "../images/player2.png"

export default class Grid {
    coords = Coordinates;
    rows;
    cols;
    cellType;
    weaponsArray = [
        new Weapon("pistol", pistolImg ),
        new Weapon("dagger", daggerImg ),
        new Weapon("rocket", rocketImg ),
        new Weapon("grenade",grenadeImg)
    ];
    playersArray = [
        new Player("Josh", 100, player1Img),
        new Player("Hazel", 100, player2Img)
    ];

    constructor(rows = 10, cols = 10) {

        this.rows = rows;
        this.cols = cols;

    }
    generateGrid() {
        const gameGrid = document.getElementById("gameGrid");


        for (let i = 0; i < this.rows; i++) {
            this.coords.available.push([])
            for (let j = 0; j < this.cols; j++) {
                let gridCell = document.createElement("div");
                gridCell.setAttribute("class", "gridCell");
                gridCell.setAttribute("id", "gridCell" + i + "-" + j);
                gameGrid.appendChild(gridCell);
                this.coords.available[i].push([j, true])

            }
        }
        // console.log(this.coords.available);
    }

    setPlayersPlace() {
        let randomRow = Math.floor((Math.random() * 10));
        let randomCol = Math.floor((Math.random() * 10));
        const gridCell = document.getElementById("gridCell" + randomRow + "-" + randomCol);
        let img = document.createElement("img");
        img.src = this.playersArray[0].imageUrl;
        gridCell.appendChild(img);
        this.coords.player.push([randomRow, randomCol]);
        this.coords.available[randomRow][randomCol][1] = false;
        this.coords.available[randomRow][randomCol][2] = "player";
        let bool = true;
        while (bool) {
            let randomRow2 = Math.floor((Math.random() * 10));

            if (randomRow2 !== randomRow) {
                let randomCol2 = Math.floor((Math.random() * 10));
                if (randomCol2 !== randomCol) {
                    const gridCell = document.getElementById("gridCell" + randomRow2 + "-" + randomCol2);

                    let img = document.createElement("img");
                    img.src = this.playersArray[1].imageUrl;
                    gridCell.appendChild(img);
                    this.coords.player.push([randomRow2, randomCol2]);
                    this.coords.available[randomRow2][randomCol2][1] = false;
                    this.coords.available[randomRow][randomCol][2] = "player";
                    bool = false;
                }
            }

        }

        console.log(this.coords.player);
        
    }
    setWeaponsPlace() {
        let i = 1;
        while (i <= 4) {
            let randomRow = Math.floor((Math.random() * 10));
            let randomCol = Math.floor((Math.random() * 10));

            if (this.coords.available[randomRow][randomCol][1] === true) {
                this.coords.available[randomRow][randomCol][1] = false;
                let weapon = this.generateRandomPos(this.weaponsArray);
                this.coords.available[randomRow][randomCol][2] = weapon;
                let img = document.createElement("img");
                img.src = weapon.imageSrc;
                img.id = "gridCell" + randomRow + "-" + randomCol;
                // let text = weapon.name;
                const gridCell = document.getElementById("gridCell" + randomRow + "-" + randomCol);
                gridCell.appendChild(img);
                i++;

            }


        }
        console.log(this.coords.weapon);

    }
    //Iterating over the Weapons array to check if a weapon is already there so we dont add obstacle on top of weapon
    setObstaclePlace() {
        let i = 1;
        while (i <= 10) {
            let randomRow = Math.floor((Math.random() * 10));
            let randomCol = Math.floor((Math.random() * 10));

            if (this.coords.available[randomRow][randomCol][1] === true) {
                this.coords.available[randomRow][randomCol][1] = false;
                this.coords.available[randomRow][randomCol][2] = "obstacle";
                this.coords.obstacle.push([randomRow, randomCol]);
                const gridCell = document.getElementById("gridCell" + randomRow + "-" + randomCol);
                gridCell.classList.add("obstacle");
                i++;
            }



        }
        console.log(this.coords.available);
    }


    generateRandomPos(arr) {
        let randomIndex = Math.floor((Math.random() * arr.length));
        let randomItem = arr[randomIndex];
        return randomItem;
    }

}


