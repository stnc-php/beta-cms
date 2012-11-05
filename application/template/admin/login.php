<?php include('header.php'); ?>
<body id="login">
	
<div class="errors">
	<?php echo validation_errors(); echo $error; ?>
	</div>
	<body>

	<div id="loginbox">
		
<?php echo form_open(); ?>
<p>Kullanıcı adı <input type="text" name="username" value="admin"  /></p>
<p>Şifre <input type="password" name="password" value="admin" /></p>
<p><input type="submit" name="login" class="buttons" value="Giriş" /></p>

<?php echo form_close(); ?>

</div>
