function stopWatch(){
    var startTime = Date.now();

    function getDelay(){
        var elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
    return getDelay;
}
let timer = stopWatch();// создает переменную которая хранит в себе дату обьявление переменной

let a = 0
for (let i = 1111000; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0){
        a += i
    }
}    
console.log(a)



timer();