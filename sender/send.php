<?php
if((isset($_POST['tel'])&&$_POST['tel']!="")){
        $to = 'nevskaja-group@yandex.ru, asmi046@gmail.com'; 
        $subject = 'Заявка с сайта НТК';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Телефон: '.$_POST['tel'].'</p> 
                        <p>Имя: '.$_POST['name'].'</p>   
                        <p>e-mail: '.$_POST['email'].'</p>   
                        <p>Сообщение: '.$_POST['message'].'</p>                   
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта НТК <noreply@ntk.ru>\r\n";
        mail($to, $subject, $message, $headers); 
}
?>