
<?php
echo "<strong>_POST array:</strong><br>";
print_r($_POST);
echo "<br><br><br>";


//в адресе от кого долже быть info@адрес сайт.ру, доменное имя емэйла должно совпадать с доменным именем сайта




if(!empty($_POST)){

	if( isset($_POST['passTwo']) ){
		//регистр

	}
	elseif ( isset($_POST['pass']) ){
		//вход на стр проверка
		/*if ($_POST['email'] == $userName){
		 	echo 'login is correct..<br>';
		 	echo 'проверяем пароль..<br>';

		 	if ($_POST['pass'] == $userPass){
		 		echo 'Password is correct..<br>';
		 		echo 'Добро пожаловать на сайт!<br>';
		 	} else {
				echo '<br>чувак, ты обосрался  с паролем!<br>';
				}

		} else {
				echo '<br>чувак, ты обосрался с логином!<br>';
				}*/
	}

	else {
		//remember


	$message ="Вам пришло новое сообщение с сайта: \n"
	. "Email пользователя:" .  $_POST['userEmail']. "\n"
	. "Пароль пользователя: " . " \n " . $_POST['message'] ;

	//добавление нового заголовка
	$headers = 'From: info@index.ru' ;


	$resultMail = mail("alexial1999@mail.ru", 'Restore password',$message,$headers); //(кому,тема,сообщение, необязательные параметры(заголовок(например. от кого)))

	if( $resultMail){
		echo'сообщение отправленно успешно!';
	} else{
		echo "письмо не отправленно.";
	}
 }
}
?>