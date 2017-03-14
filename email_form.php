<?php 
    if(isset($_POST['send'])) {
        $to =      "max.zlotskiy@gmail.com";
        $subject = "Spectator Contact Form";
        $from =     strip_tags(trim($_POST["from"]));
        $name =     htmlentities(trim($_POST["sender"]));
        $message =  htmlentities(str_replace("\n.", "\n..", $_POST["message"]));

        $message .= "\r\n\r\n -- " . $name;
        
        mail($to, $subject, $message, "From: " . $from);
        header("Location: contact.html");
    }
?>