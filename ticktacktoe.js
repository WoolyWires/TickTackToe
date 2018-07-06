turn = true;

let setup = function() {
    document.querySelectorAll('.row_box')
        .forEach(i => i.addEventListener('click', draw));
    document.querySelector('#reset')
        .addEventListener('click', reset);
}

let reset = function(){
    document.querySelectorAll('.row_box')
        .forEach(i => i.innerText = '');
    turn = true;
}

let draw = function(e){
    if(e.target.innerText == ''){
        if(turn){
            e.target.style.color = 'red';
            e.target.innerText = 'X';
            turn = !turn;
        }
        else{
            e.target.style.color = 'blue';
            e.target.innerText = 'O';
            turn = !turn;
        }
    }
    state();
}

let state = function(){
    let winner = '';

    let r1_c1 = document.getElementById('1_1').innerText;
    let r1_c2 = document.getElementById('1_2').innerText;
    let r1_c3 = document.getElementById('1_3').innerText;

        /* row 1 */
        if(r1_c1 == 'X' && r1_c2 == 'X' && r1_c3 == 'X'){
            gameover('X');
            return;
        }
        if(r1_c1 == "O" && r1_c2 == "O" && r1_c3 == "O"){
            gameover('O');
            return;
        }

        let r2_c1 = document.getElementById('2_1').innerText;
        let r2_c2 = document.getElementById('2_2').innerText;
        let r2_c3 = document.getElementById('2_3').innerText;

        /* row 2 */
        if(r2_c1 == "X" && r2_c2 == "X" && r2_c3 == "X"){
            gameover('X');
            return;
        }
        if(r2_c1 == "O" && r2_c2 == "O" && r2_c3 == "O"){
            gameover('O');
            return;
        }

        let r3_c1 = document.getElementById('3_1').innerText;
        let r3_c2 = document.getElementById('3_2').innerText;
        let r3_c3 = document.getElementById('3_3').innerText;

        /* row 3 */
        if(r3_c1 == "X" && r3_c2 == "X" && r3_c3 == "X"){
            gameover('X');
            return;
        }
        if(r3_c1 == "O" && r3_c2 == "O" && r3_c3 == "O"){
            gameover('O');
            return;
        }

        /* column 1 */
        if(r1_c1 == "X" && r2_c1 == "X" && r3_c1 == "X"){
            gameover('X');
            return;
        }
        if(r1_c1 == "O" && r2_c1 == "O" && r3_c1 == "O"){
            gameover('O');
            return;
        }

        /* column 2 */
        if(r1_c2 == "X" && r2_c2 == "X" && r3_c2 == "X"){
            gameover('X');
            return;
        }
        if(r1_c2 == "O" && r2_c2 == "O" && r3_c2 == "O"){
            gameover('O');
            return;
        }

        /* column 2 */
        if(r1_c3 == "X" && r2_c3 == "X" && r3_c3 == "X"){
            gameover('X');
            return;
        }
        if(r1_c3 == "O" && r2_c3 == "O" && r3_c3 == "O"){
            gameover('O');
            return;
        }

        /* diagnol 1 */
        if(r1_c1 == "X" && r2_c2 == "X" && r3_c3 == "X"){
            gameover('X');
            return;
        }
        if(r1_c1 == "O" && r2_c2 == "O" && r3_c3 == "O"){
            gameover('O');
            return;
        }

        /* diagnol 2 */
        if(r1_c3 == "X" && r2_c2 == "X" && r3_c1 == "X"){
            gameover('X');
            return;
        }
        if(r1_c3 == "O" && r2_c2 == "O" && r3_c1 == "O"){
            gameover('O');
            return;
        }

        if(r1_c1 != '' && r1_c2 != '' && r1_c3 != '' &&
            r2_c1 != '' && r2_c2 != '' && r2_c3 != '' &&
            r3_c1 != '' && r3_c2 != '' && r3_c3 != '')
        {
            gamedraw();
            return;
        }
}

let gameover = function(e){
    window.alert('Player ' +e+ ' wins!');
    reset();
}

let gamedraw = function(){
    window.alert('Draw!');
    reset();
}

setup();