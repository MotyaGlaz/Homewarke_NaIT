let max = 5;
let array = [];
let points = 0;
const cells = document.querySelectorAll('.cell');

newGame();
cells.forEach(iterator => {
    iterator.addEventListener('mousedown', () => {
        for (i=1;i<max;i++){
            if (array[i][iterator.id.charAt(1)] != 0) {
                array[i][iterator.id.charAt(1)] = 0;
                points--;
            }
            else {
                array[i][iterator.id.charAt(1)] = 1;
                points++;
            }
        }
        for (i=1;i<max;i++){
            if (array[iterator.id.charAt(0)][i] != 0) {
                array[iterator.id.charAt(0)][i] = 0;
                points--;
            }
            else {
                array[iterator.id.charAt(0)][i] = 1;
                points++;
            }
        }
        if(array[iterator.id.charAt(0)][iterator.id.charAt(1)] != 0) {
            array[iterator.id.charAt(0)][iterator.id.charAt(1)] = 0;
            points--;
        }
        else{
            array[iterator.id.charAt(0)][iterator.id.charAt(1)] = 1;
            points++;
        }
        changeCells();
    })
})

function newGame(){
    points = 0;
    array = [];
    for(i=1; i<max; i++)
    {
        array[i] = [];
    }

    for(i=1; i<max; i++){
        for(j=1; j<max; j++){
            array[i][j] = 0;
            document.getElementById(i.toString() + j).style.background = ('#f0f8ff');
        }
    }
}

function changeCells(){
    cells.forEach(iterator => {
        for (i=1; i<max; i++){
            for (j=1; j<max; j++){
                if(array[i][j] == 1){
                    document.getElementById(i.toString() + j).style.background = ('#9B4222');
                }else{
                    document.getElementById(i.toString() + j).style.background = ('#f0f8ff');
                }
            }
        }
    })
    setTimeout(checkVictory, 1);
}

function checkVictory(){
    if (points == 16){
        newGame();
        alert("Поздрвыляю с победой:)");
    }
}

function onStartGame(){
    newGame();
}