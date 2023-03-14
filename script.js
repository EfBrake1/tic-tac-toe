let char = "X";
let turn = 1;
let area = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"]
];
document.querySelector("span").innerHTML = char;
document.querySelector("button").onclick = function () {
    let row = document.querySelector(".row").value - 1;
    let column = document.querySelector(".column").value - 1;
    let rows = document.querySelectorAll("tr");
    let cells = rows[row].querySelectorAll("td");
    let cell = cells[column];
    console.log(area)
    if (area[row][column] != "X" && area[row][column] != "0") {
        area[row][column] = char;
        cell.innerHTML = char;
        turn++;
        if (char == "X") {
            cell.style.backgroundColor = "red";
            cell.style.color = "yellow";
        } else if (char == "0") {
            cell.style.backgroundColor = "orange";
            cell.style.color = "white";
        }
        if (turn % 2 == 1) {
            char = "X";
        } else {
            char = 0;
        };
        document.querySelector("span").innerHTML = char;
        if (checkWinner() === "X") {
            alert("Крестики победили!")
            newGame()
        }
        if (checkWinner() === "0") {
            alert("Нолики победили!")
            newGame()
        }
    } else {
        alert("Извините, но вы не можете поставить сюда "  + char)
    } 
};
function checkWinner() {
    if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {
        return "X";
    }
    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {
        return "X";
    }
    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
        return "X";
    }
    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
        return "X";
    }
    if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
        return "X";
    }
    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
        return "X";
    }
    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
        return "X";
    }
    if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {
        return "X";
    }
    if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {
        return "0";
    }
    if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {
        return "0";
    }
    if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {
        return "0";
    }
    if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {
        return "0";
    }
    if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {
        return "0";
    }
    if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {
        return "0";
    }
    if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {
        return "0";
    }
    if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {
        return "0";
    }
    return false;
};
function newGame() {
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i]
        let cells = row.querySelectorAll("td")
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = "cyan";
            cells[j].innerHTML = "";
            area[i][j] = "*";
        }
    }
    char = "X";
    turn = 1;
    document.querySelector("span").innerHTML = char;
    document.querySelector(".row").value = "";
    document.querySelector(".column").value = "";
}
