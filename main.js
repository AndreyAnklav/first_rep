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
// let div = document.querySelector('.out')

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

// let x = prompt('Куда вывести число?');
// if (x > 100){
//     alert(x)
// } else {
//     console.log(x);
// }

// Занятие #4 (Задание 1)

// let a = 5;
// let b = 100;
// if(a + b > 15) {
//     console.log('Да');
// } else if(a + b <= 15) {
//     console.log('Нет');
// } 

// Задание 2 (Вариант 1)

// let one = 45;
// let two = 45;
// let equality;
// if(one == two) {
//     equality = true;
// } else {
//     equality = false;
// }
// console.log(equality)

// Задание 2 (Вариант 2)

// let one = NaN;
// let two = 45;
// let equality = (one == two) ? true : false;
// console.log(equality)

// Задание #5-1

// let i = 1;
// while (i < 51) {
//         console.log(i);
//         i++
// }

// Задание #5-2

// for (i = 50; i > 24; i--){
//         console.log(i);
// }

// Задание#5-3

// for (let i = 2500; i <= 3000; i++){
//         if (i % 2 == 0) continue;
//         console.log(i);
// }

// Задание 6-1

// let defaultVar = 'default';
// let userInput = prompt('Введите число');
// switch (true){
// 	case defaultVar === userInput:
// 		alert('Да');
// 		break;
// 	case defaultVar !== userInput:
// 		alert('Нет');
// 		break;
// 	default:
// 		alert('Не сработало');
// }

// Задание 6-2

// let month = prompt('Введите число от 1 до 12, чтобы узнать время года');
// switch(+month){
// 	case 1:
// 	case 2:
// 	case 3:
// 		alert('Зима');
// 		break;
// 	case 4:
// 	case 5:
// 	case 6:
// 		alert('Весна');
// 		break;
// 	case 7:
// 	case 8:
// 	case 9:
// 		alert('Лето');
// 		break;
// 	case 10:
// 	case 11:
// 	case 12:
// 		alert('Осень');
// 		break;
// 	default:
// 		alert('Такого сезона нет');

// }

// Задание 6-3

// let one = null;
// let two = 'Привет, мир!';
// let three = 345678;
// console.log(one ?? two ?? three);

// Задание 7-1

// let fun = document.querySelector('.check');
// let a = 1;
// function output(){
// let b = document.querySelector('.out');
// b.innerHTML = a;
// }
// fun.onclick = output

// Задание 7-1 с выводом значения из input

// let inputIn = document.querySelector('.text');
// let lineOutput = document.querySelector('.out');
// document.querySelector(".check").onclick = function output(){
// 	lineOutput.innerHTML = inputIn.value;
// }

// задание 7-2

// let resultOutput = document.querySelector('.output');
// let x = +(document.getElementById('num_1').value);
// let y = +(document.getElementById('num_2').value);
// document.querySelector("#plus").onclick = function add(){
// 	// let x = +(document.getElementById('num_1').value);
// 	// let y = +(document.getElementById('num_2').value);
// 	resultOutput.innerHTML = x + y;
// }
// document.querySelector("#minus").onclick = function subtract(){
// 	let x = +(document.getElementById('num_1').value);
// 	let y = +(document.getElementById('num_2').value);
// 	resultOutput.innerHTML = x - y;
// }
// document.querySelector("#multiply").onclick = function multiply(){
// 	let x = +(document.getElementById('num_1').value);
// 	let y = +(document.getElementById('num_2').value);
// 	resultOutput.innerHTML = x * y;
// }
// document.querySelector("#divide").onclick = function divide(){
// 	let x = +(document.getElementById('num_1').value);
// 	let y = +(document.getElementById('num_2').value);
// 	resultOutput.innerHTML = x / y;
// 	if(y == 0){
// 		resultOutput.innerHTML = 'На 0 делить нельзя!'
// 	}
// }

// // Задание 8-1

// const element = document.querySelector('.element');
// const elementSize = document.querySelector('.elementSize');
// elementSize.onclick = function divSize(){
// 	element.classList.toggle('size')
// }

// // Задание 8-2

// let btnChange = document.querySelector('.btnChange');
// btnChange.onclick = function changes(){
// 	elementSize.classList.toggle('grey');
// 	elementSize.classList.toggle('timesNew');
// 	elementSize.classList.toggle('btnsize');
// }

// // Задание 8-3

// let cancel = document.querySelector('.cancel');
// cancel.onclick = function(){
// 	elementSize.classList.remove('grey');
// }

// // Задание 9-1

// let qwe = [1,2,3,4,'Значение',6,7,8,9,10];
// let massResult = document.querySelector('.massResult');
// document.querySelector('.mass').onclick = () =>{
// 	massResult.innerHTML = qwe[4]
// }

// // Задание 9-2

// let mas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
// let but = document.querySelector(".but");
// let result = document.querySelector(".result");
// // let cent = document.querySelector(".cent");
// let odd = document.querySelector(".odd");
// but.onclick = function(){
//   document.querySelector(".result").value= ''
//   for(i = 0; i < mas.length; i++){
//     if(i % 2 == 1) continue;
//     // cent.innerHTML += i;
//     result.value += i;
//       // console.log(i)
//   }
// }
// // Задание 9-3

//   odd.onclick = function(){
//   document.querySelector(".result").value= ''
//   for(i = 0; i < mas.length; i++){
//     if(i % 2 == 0) continue;
//     // cent.innerHTML += i;
//     result.value += i;
//       // console.log(i)
//   }
// }

// // Задание 9-4

// let inversion = document.querySelector(".inversion");
// let inversionResult = document.querySelector(".inversionResult");
// let mass2 = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// inversion.onclick = function(){
// 	document.querySelector(".inversionResult").value= ''
// 	mass2.splice(0, 3, [3,2,1], [6,5,4], [9,8,7])
// 	mass2 = mass2.reverse()
// 	for(i = 0; i < mass2.length; i++)
// 	  for(k = 0; k < mass2[i].length; k++){
// 	// console.log(mass2[i][k])
// 	inversionResult.value += mass2[i][k]
// 	}
// }

// Задание 10

let img = document.querySelector(".img");
let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let age = document.querySelector(".age");
let phone = document.querySelector(".phone");
let email = document.querySelector(".email");
let cent = document.querySelector(".cent");
for(i = 0; i < 3; i++){
fetch('https://randomuser.me/api')
.then(function(res){return res.json()})
.then(function(data){
	console.log(data);
	img.innerHTML += `<img src=${data.results[0].picture.large}>`
	name.innerHTML += data.results[0].name.first + " ";
	surname.innerHTML += data.results[0].name.last + " ";
	age.innerHTML += data.results[0].dob.age + " ";
	phone.innerHTML += data.results[0].cell + " ";
	email.innerHTML += data.results[0].email + " ";
})
}

