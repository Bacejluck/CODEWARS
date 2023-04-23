let names=["qww",'fgsgfsd','fdgdfg','fffg','fdsfadf','dsfsadf'];
let newNames= [];
for (let i = 0;i <names.length;i++){
    let name = names[i];
    let firstLetter = name.charAt(0).toUpperCase();//charAT берет элемент строки по индексу toUpperCase преобразхует в верхний регистр
    newNames.push(firstLetter+name.slice(1));//push добавляет элемент в спикос slice копирует от индекса до конеца (если конец не указан)
}   
console.log(newNames);