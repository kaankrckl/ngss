<?php
    include 'conn.php';

    //check if post request hast un parameter
    if(isset($_POST['un'])){

  	   $username = $_POST['un'];
       $password = $_POST['pw'];

  	   $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";

       $result=mysqli_query($conn, $query);
       $count=mysqli_num_rows($result);

       //check if the query return anything
       if($count>0){


        $row = mysqli_fetch_assoc($result);
        $name = $row['username'];
        $sonuc['username']=$name;
        $sonuc['success']="Login successful";
      
     }
     else
     {
      $sonuc['error']="Either username or password is incorrect. Please try again.";
     }

     }

	echo json_encode($sonuc);

?>