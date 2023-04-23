function stopWatch(){//создаем функцию которая при вызове создаст переменную startTime и присвоей ей значение ,а текже вернет внутреннию функцию
    var startTime = Date.now();

    function getDelay(){
        var elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
    return getDelay;
}
let timer = stopWatch();//вызывает функчию создаем переменную starTime и присваевыем ей значение функции getDelay

let a = 0
for (let i = 1111010110; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0){
        a += i
    }
}    
console.log(a)



timer();// вызываем функцию getDelay создаем переменую elapsedTime и выводим её после вычеслений