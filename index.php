<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>

    <div id="AA">
        <b>HII GUYSSSS</b>
    </div>
    <?php
    define("SEX", 69 );
    echo "HIIIII";
    echo "<br>";
    echo SEX;
    $city= Array("GW","JH","DB","TZ");
    echo count($city);
echo "<br>";
    $Age=21;
    if($Age>=18){
        echo "YOU CAN VOTE";
    } else{
        echo "YOU CANT VOTE";
    }

    for ($a=0; $a < 10 ; $a++) { 
        echo "<br>";
        echo "the value of a is: $a";
    }

    $b= 0; 
   do{
        echo "the value is: ";
        echo $b;
        $b++;
    }while ($b < 10);

    foreach( $city as $value){
        echo "the value is:";
        echo $value;
    }
    ?>

</body>
</html>