let names=["qww",'fgsgfsd','fdgdfg','fffg','fdsfadf','dsfsadf'];
let newNames= [];
for (let i = 0;i <names.length;i++){
    let name = names[i];
    let firstLetter = name.charAt(0).toUpperCase();
    console.log(firstLetter)
    newNames.push(firstLetter+name.slice(1));
    console.log(name.slice(1))
}
console.log(newNames);