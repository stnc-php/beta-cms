<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('tr_dateTime'))
{


function tr_dateTime($date_,$ayrac="-"){
$tarih = explode($ayrac, $date_); 
$tarih2 = explode(" ", $tarih[2]);
return $tarih2[0].'-'.$tarih[1].'-'.$tarih[0].' '.$tarih2[1]; 
}



function tr_date($date_,$ayrac="-"){
$tarih = explode($ayrac, $date_); 
$tarih2 = explode(" ", $tarih[2]);
return $tarih2[0].'-'.$tarih[1].'-'.$tarih[0]; 
}


}