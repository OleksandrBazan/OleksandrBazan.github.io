 var arr = [];
 for (i=0; i <= 4; i++ ) {
 	arr[i] = prompt('Введите имя пользователя', '');
 }
console.log('arr', arr);

var userName = prompt('Введите свое имя', '');
var flag = false;
for (var i = 0; i <=arr.length; i++){
	if (arr[i] === userName){
		flag = true;	
	}
}

if(flag){
	alert(userName + ' Вы успешно вошли');
} else{
	alert('такого пользователя не существует');
}