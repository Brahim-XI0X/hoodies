<?php
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];

$errors =[
    'firstnameError' => '',
    'lastnameError'=>' ',
    'emailError'=>'',

];

if (isset($_POST['submit'])){
    //echo $firstname." ".$lastname." ".$email;
    $firstname = mysqli_real_escape_string($conn,$_POST["firstname"]);
    $lastname = mysqli_real_escape_string($conn,$_POST["lastname"]);
   $email = mysqli_real_escape_string($conn,$_POST["email"]);



   $sql = "INSERT INTO users(firstname, lastname, email) 
            VALUES ('$firstname','$lastname','$email') ";
            if (empty($firstname)){
                $errors['firstnameError']='First name Empty';
                

            }elseif (empty($lastname)){
                $errors['lastnameError']='Last name Empty';
              

            }elseif (empty($email)){
                $errors['emailError']='Email Empty';
                
            
            }
            elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors['emailError']='Email incorect';
           

            }else{
                if (mysqli_query($conn , $sql)){
                  header('Location: index.php');
                }else{
                  echo 'error :'. mysqli_error($conn);
            }
            }

}
?>