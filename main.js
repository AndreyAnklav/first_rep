// console.log("Hello java");
// console.log(123435);
// console.log('Hello' + ' java');
// console.log(12);
// console.log("декабрь");
// console.log('Добро ' + 'пожаловать ' + 'на курс, '+ 'Андрей');
// let a = "Добро пожаловать на курс, Андрей"
// console.log(a);
// alert('18 августа 2023г.'); 
// document.getElementById('one').innerHTML ='Hello World';
// console.log(5/0);
// console.log('free' - 123);
// console.log(23429883546987628634823498n);
// let a = "Дом"
// let b = 'Воли'
// let c = `Сила ${b}`
// console.log(a);
// console.log(b);
// console.log(c);
// let future = true
// let nofuture = false
// console.log(future);
// console.log(nofuture);
// let nuller = null
// console.log(nuller);
// let past = undefined;
// console.log(past);
// console.log(typeof 5);
// console.log(typeof 34664095698459086n);
// console.log(typeof false);
// console.log(typeof 'бегущаяя строка');
// console.log(typeof null);

// document.getElementById('one').innerHTML ="<h2>заголовок1</h2>"
// document.getElementById('one').innerHTML = 4567
// document.getElementById('one').innerHTML ="<h2>Текст</h2>"

// let jojo = 'jojo'
// jojo = 'Андрей'
// console.log(jojo);

// document.querySelector('#one').innerHTML = '<h2>Забава</h2>'

// document.querySelector('p').innerHTML = 'Однако, при нескольких записях подряд, информация будет выводиться сверху вниз с большой скоростью и на странице останется только последняя запись'
// let inputIN = document.querySelector(".text")
// let btn = document.querySelector('.check')
let div = document.querySelector('.out')

// btn.onclick = function(){
//     let e = inputIN.value
//     div.innerHTML += `${e}<br>`
//     console.log('Да');
//     console.log(e);
//     console.log(inputIN.value);
//     console.log(typeof e);
// }
        //   3 варианта с заданием if else

// let x = 109;
// if (x < 100){
//     console.log(x);
// } else {
//     alert(x);
// }

// let x = 42;
// if (x < 100){
//     console.log(x);
//     } else {
//         document.getElementById("one").innerHTML = x;
//     }

let x = prompt('Куда вывести число?');
if (x > 100){
    alert(x)
} else {
    console.log(x);
}

