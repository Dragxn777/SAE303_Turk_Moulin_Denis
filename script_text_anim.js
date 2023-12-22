let i = 0;
let txt1 = 'l’ADEME souhaite alerter sur les impacts environnementaux';
let speed = 100;

function write1() {
    if (i < txt1.length) {
        document.getElementById("ademe").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(write1, speed);
    }

}
write1()

