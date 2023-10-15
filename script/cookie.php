<?php
session_start();


$cookie_key = 'AriasaProp_Cookie';

function check_cookie() {
    if (isset($_GLOBAL['checked_cookie']) && $_GLOBAL['checked_cookie'] === true) return true;
    if (isset($_COOKIE[$cookie_key]) && $_COOKIE[$cookie_key]) === true) {
        return true;
    } else {
        setcookie($cookie_key, true, time() + (3600*10)); // Cookie berlaku selama 10 jam
        return false;
    }
    $_GLOBAL['checked_cookie'] = true;
}
?>