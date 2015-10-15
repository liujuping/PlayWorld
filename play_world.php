<?php
    $timestamp = $_GET['timestamp'];
    $nonce     = $_GET['nonce'];
    $token     = 'liujuping';
    $signature = $_GET['signature'];
    $array     = array( $timestamp,$nonce,$token );
    sort($array);
    $tmpstr    = implode('',$array);
    $tmpstr    = shal( $tmpstr );
    if( $tmpstr == $signature){
        echo $_GET['echostr'];
        exit;
    }