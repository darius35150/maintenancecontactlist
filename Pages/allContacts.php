<!DOCTYPE html>

<html>
    
    <head>
        <link rel="stylesheet" href="/CSS/allContacts.css" type="text/css">
        <script type="text/javascript" src="/JS/jquery-1.12.4.js"></script>
        <script type="text/javascript" src="/JS/Script.js"></script>
        <meta charset="UTF-8">
        <title>Maintenance Contact List</title>
    </head>
    
    <body>
        
        <div id="sideNav" class="sideNav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="/index.php">Home</a>
            <a href="directory.html">BCIS Directory</a>
            <a href="maps.html">Customer Locations</a>
        </div>
        
        <span style="font-size: 30px; cursor: pointer" onclick="openNav()">&#9776; open</span>
      
    </body>
    

</html>

<?php
    
    $userName = "root";
	$password = "";
	$db = "servicecontacts";
	$server = "127.0.0.1";
	$dbConnection = mysqli_connect($server, $userName, $password, $db);
	$query = "Select * from contacts";
	$list = mysqli_query($dbConnection, $query);
	
	if ($dbConnection){
	    
	    	echo "<br/>";
			echo "<br/>";
			echo "<div id='list'>\n";
			echo "<form class='editForm' action='default.php' method='post'>\n";
			echo "<table align='center' border=1 id='table'>\n";
			echo "<input type='hidden' name='edited' id='edited'/>";
			echo "<tr>
					<th>Name</th>
					<th>Facility</th>
					<th>1st Number</th>
					<th>2nd Number</th>
					<th>Email</th>
				  </tr>\n";
	    
	    while($List = mysqli_fetch_row($list)){
	        
	        	echo "<tr>
						<td >{$List[0]}</td>";
				echo   "<td >{$List[1]}</td>";
				echo   "<td >{$List[2]}</td>";
				echo   "<td >{$List[3]}</td>";
				echo   "<td >{$List[4]}</td>
					   </tr>\n";	
	        
	    }
	    
	    echo "</table>";
		echo "</form>";
		echo "</div>";
	}
	
	mysqli_close($dbConnection);
	
?>