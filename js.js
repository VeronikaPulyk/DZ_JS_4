// 1
// function redFon(){
//  var r = document.querySelectorAll('p');
//  for (var i = 0; i < r.length; i++) {
// 		r[i].style.backgroundColor = 'red';
// 	}
// }
// redFon();

// 2
// function shadow(){
// 	var png = document.querySelectorAll('img');
// 	for (var i = 0; i < png.length; i++) {
// 		png[i].style.boxShadow = '20px -10px 20px gray';
// 	}
// }
// shadow();

// 3
// function number(){
//  var n = document.querySelectorAll('.three');
//  for (var i = 0; i <= n.length; i++) {
// 		n[i].insertAdjacentHTML('beforebegin', '<span>№' + (i+1) +'</span>');
// 	}
// }
// number();

// 4
// var u = 0;
// document.getElementById('bone').onclick = f4;
// document.getElementById('btwo').onclick = f4;
//  function f4 (){
// 	var p = document.getElementById('out4');
//  	u++;
//  	p.innerHTML = u;
//  }

// 5
// document.getElementById("btn").onclick=f5;
// 	function f5 (){
// 		var p = document.getElementById('out')
// 		var a = document.getElementById('number').value;
// 		var b = document.getElementById('degree').value;
// 		alert(Math.pow(a,b));
// }

// 6
// document.getElementById('und').onclick = underline;
// function underline(){
// 	var input = document.getElementById('input').value;
// 	var v = document.getElementsByTagName(input);
// 	for (var i = 0; i < v.length; i++) {
// 		v[i].style.textDecoration = 'underline';
// 	}
// }
// underline();

// 7     8
// document.getElementById('ok7').onclick = f7;
// 	function f7 (){
// 		var t = document.getElementById('year').value;
// 		t = parseInt(t);
// 		if (t>=16){
// 			alert('Добро пожаловать');
// 		}
// 		else if (t<16){
// 			alert('Вы еще молоды');
// 		}
// 		else {
// 			alert('Введите возраст');
// 		}
// 	}

// 9
// var f = [4, 2, 8, 1, 5, "apple",  "grape"];
// var out = document.getElementById('out9');
// function a(){
// 	return 'Массив: '+ f + '. '+'Его длина:' + f.length;
// }
// out.innerHTML = a(f);

// 10
// 	function f10(){
// 		var w = parseInt(document.getElementById('inp').value);
		
// 		if (w>=10){
// 			return w*w;
// 		}
// 		else if (w<7){
// 			return ('Число меньше 7');
// 		}
// 		else {
// 			return w;
// 		}
// 	}
// 	document.getElementById('ok10').onclick = function(){	
// 	document.getElementById('out10').innerHTML = f10();
// }

// 11 
// var prNum = Math.floor((Math.random() * 10)+1);
// // var tempOut = document.getElementById('temp-out11');
// // tempOut.innerHTML = prNum;
// console.log(prNum);

// document.getElementById('btn11').onclick = f11;
// function f11(){
// 	var num, out;
// 	num = document.getElementById('inp11').value;
// 	out = document.getElementById('out11');

// 	if (num==prNum){
// 		out.innerHTML = 'Вы угадали!';
// 	}
// 	else if (num>prNum){
// 		out.innerHTML = 'Вы ввели число больше, чем нужно';
// 	}
// 	if (num<prNum){
// 		out.innerHTML = 'Вы ввели число меньше, чем нужно';
// 	}

// }