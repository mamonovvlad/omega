<?php

$recepient = "omegasait@yandex.ru, omegann.direct@ya.ru";
$sitename = "ОМЕГА";

$tel = trim($_POST["tel"]);
$message = "Телефон: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");