function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let abc = +prompt('Nechta misol yechmoqchisiz')
let minNum = +prompt('Minimal Sonni kiriting')
let maxNum = +prompt('Maximal Sonni kiriting')

for (let i = 0; i < abc; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)

    if (random(minNum, maxNum)) {
        let pr = +prompt('misol yeching: ' + num1 + ' + ' + num2 + ' =?')
        let answer = num1 + num2 == pr ? 'tori' : 'notog`ri'
        alert(answer);

        let pr2 = +prompt('misol yeching: ' + num1 + ' * ' + num2 + ' =?')
        let answer2 = num1 * num2 == pr2 ? 'tori' : 'notog`ri'
        alert(answer2);

        let pr3 = +prompt('misol yeching: ' + num1 + ' - ' + num2 + ' =?')
        let answer3 = num1 - num2 == pr3 ? 'tori' : 'notog`ri'
        alert(answer3)

        let pr4 = +prompt('misol yeching: ' + num1 + ' / ' + num2 + ' =?')
        let answer4 = num1 / num2 == pr2 ? 'tori' : 'notog`ri'
        alert(answer4);
    }






}


