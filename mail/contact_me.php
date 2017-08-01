


<?php

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")) {
    $to = 'galifax94@gmail.com';
//    $to = 'info@rjgroup.com.ua';
    $subject = 'Повідомлення з сайту';
    $message = ' <html>
	                    <head>
	                        <title>'.$subject.'</title>
	                    </head>
	                    <body>
	                        <p>Iм\'я: '.$_POST['name'].'</p>
	                        <p>Телефон: '.$_POST['phone'].'</p>
	                        <p>Електронна адреса: '.$_POST['email'].'</p>
	                        <p>Повiдомлення: '.$_POST['message'].'</p>
	                    </body>
	                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From:  Форма зворотнього зв'язку <galifax94@gmail.com\r\n";
    mail($to, $subject, $message, $headers);
}