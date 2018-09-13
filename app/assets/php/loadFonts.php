<?php
  $json = file_get_contents('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyATc460rTq2EDcUlkNs1fH4SWnSs1zM8vI');
  die($json); // prints JSON to the screen that jQuery can use
?>
