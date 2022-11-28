var torre1 = 1;
var torre2 = 2;
var torre3 = 3;

// Numero de discos

var n = 4;

hanoi(n, torre1, torre3, torre2);

function hanoi(n, ori, des, aux) {
    if(n == 1)
        document.write("Mueva el disco " + n + " desde la Torre " + ori + " hasta la Torre " + des + "<br/>") 
    else {
        hanoi(n - 1, ori, aux, des);
        document.write("Mueva el disco "+ n + " desde la Torre " + ori + " hasta la Torre " + des + "<br/>");
        hanoi(n - 1, aux, des, ori);
    }
}
