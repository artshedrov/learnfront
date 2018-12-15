var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas=[];

canvas.onclick = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x);
    console.log(y);
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    mas[x][y] = 1;
    drawField();
    
}

function goLife() {
    var n = 30, m = 30;
    for (var i=0; i<m; i++){
        mas[i] = [];
        for (var j=0; j<n; j++){
            mas[i][j] = 0;
        }
    }
}
goLife();

function drawField() {
    ctx.clearRect(0, 0, 300, 300);
    for (var i=0; i<30; i++){
        for (var j=0; j<30; j++){
            if (mas[i][j]==1){
                ctx.fillRect(j*10, i*10, 10, 10);
            }
        }
    }
    
}

function startLife() {
    //моделирование жизни
    var mas = [];
    for (var i=0; i<30; i++){
        mas2[i] = [];
        for (var j=0; j<30; j++){
            var neighbor = 0;
            if (mas[fpm(i)-1][j]==1) neighbor++;
        }
    }
    
}

function fpm(i) {
    if(i==0) return 30;
    else return i;

    
}