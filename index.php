<!--****************************************************************************
****Program Title:   Maintenance Contact List                                  *
****Document Name:   default.php                                               *
****Author:          Darius Holley                                             *
****Date Deployed:   August 17, 2016                                           *
****Department:      Service Department                                        *
****Description:     This program is for adding, deleting, searching, and      *
****                 editing contacts.  The purpose is for everyone in the     *
****                 Service Department to be able to see and view everyone's  * 
****                 contacts.                                                 *
*****************************************************************************-->


<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="CSS/styles.css"/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="JS/jquery-1.12.4.js"></script>
		<script type="text/javascript" src="JS/Script.js"></script>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Maintenance Contact List</title>
	</head>
	<body>
		<div id="header">
			<header>
				<img id="bcisBuilding" src="img/newpic.jpg" height="305" width="1680" />
			</header>
		</div>
			
			<ul class='topnav' id='myTopnav' >
				<li><a id='add' onclick="modalScreen()" href="#Add">Add Contact</a></li>
				<li><a id='delete' onclick="modalScreen()" href="#Delete">Delete Contact</a></li>
				<li><a id='search' onclick="modalScreen()" href="#Search">Search Contact</a></li>
				<li><a id="allContacts" href="Pages/allContacts.php">Customer Contacts List</a></li>
				<li><a id='directory' href="Pages/directory.html">BCIS Directory</a></li>
				<li><a id="maps" href="Pages/maps.html">Customer Locations</a></li>
				<li class="icon"><a href="javascript:void(0);" onclick="myFunction()">&#9776;</a></li>
			</ul>
	<!--This form is for adding a new contact-->
	<div id="addModal" class="modal">
	<div class="addDiv" id="addDiv" >
		<span class="addClose">x</span>
		<div class="addTitle">
			<p><b>Add Contacts</b></p>
		</div>
		<form id="addForm" action="index.php" method="post">
			<table align="center" >
				<tr>
					<th><label><b>Contact Name</b></label></th>
					<th><label><b>Facility</b></label></th>
					<th><label><b>Phone Number</b></label></th>
					<th><label><b>Second Number</b></label></th>
					<th><label><b>Email</b></label></th>
				</tr>
				<tr>
					<td><input type="text" id="name" name="name" /></td>
					<td><select name="county" >
							<option></option>
							<option value="Albany County">Albany County</option>
							<option value="Anaheim">Anaheim</option>
							<option value="Bergen County">Bergen</option>
							<option value="Bermuda">Bermuda</option>
							<option value="Black Hawk County">Black Hawk County</option>
							<option value="Broome County">Broome County</option>
							<option value="Cayuga County">Cayuga County</option>
							<option value="Chambers County">Chambers County</option>
							<option value="Chemung County">Chemung County</option>
							<option value="Clayton County">Clayton County</option>
							<option value="Clinton County">Clinton County</option>
							<option value="Cobb County">Cobb County</option>
							<option value="Columbia County">Columbia County</option>
							<option value="Cuyahoga County">Cuyahoga County</option>
							<option value="Tulsa County">Tulsa County</option>
							<option value="Delaware County">Delaware County</option>
							<option value="Douglas County">Douglas County</option>
							<option value="Eaton County">Eaton County</option>
							<option value="Edmonton">Edmonton</option>
							<option value="Essex County">Essex County</option>
							<option value="Fulton County">Fulton County</option>
							<option value="Jefferson County">Jefferson County</option>
							<option value="Mecklenburg County">Mecklenburg County</option>
							<option value="Knox County">Knox County</option>
							<option value="Madison County">Madison County</option>
							<option value="Mahoning County">Mahoning County</option>
							<option value="Miami-Dade County">Miami-Dade County</option>
							<option value="Monroe County">Monroe County</option>
							<option value="Newport News">Newport News</option>
							<option value="Ocean County">Ocean County</option>
							<option value="Oneida County">Oneida County</option>
							<option value="Onondaga County">Onondaga County</option>
							<option value="Ontario County">Ontario County</option>
							<option value="Oswego County">Oswego County</option>
							<option value="Otsego County">Otsego County</option>
							<option value="Polk">Polk</option>
							<option value="Rensselaer County">Rensselaer County</option>
							<option value="Sacramento County">Sacremento County</option>
							<option value="San Diego County">San Diego County</option>
							<option value="Seneca County">Seneca County</option>
							<option value="Shelby County">Shelby County</option>
							<option value="Steuben County">Steuben County</option>
							<option value="Suffolk County">Suffolk County</option>
							<option value="Tecumseh">Tecumseh</option>
							<option value="Tioga County">Tioga County</option>
							<option value="Ulster County">Ulster County</option>
							<option value="Union County">Union County</option>
							<option value="Washington County">Washington County</option>
						</select></td>
					<td><input type="text" name="pNumber"/></td>
					<td><input type="text" name="sNumber"/></td>
					<td><input type="text" name="Email"/></td>	
			 </tr>
            </table>
            <input type="hidden" id="value"name="value"/> <!--hidden input for verification of adding contact-->
			<br/>
			<br/>
        	<div class="buttons">
				<input  type="submit" value="Submit" name="add" class="submitButtons" onclick="confirming()"/>
			</div>
		</form>
		</div>
		</div>
		<br/>
		<br/>
		
		<!--This form is for the delete section of the web app.-->
		<div id="deleteModal" class="modal">
		<div class="deleteDiv">
			<span class="deleteClose">x</span>
			<div class="deleteTitle">
				<p><b>Delete Contact</b></p>
			</div>
		<form id="deleteForm" action="index.php" method="post">
			<table align="center">
				<tr>
					<th><label><b>Contact Name</b></label></th>
					<th><label><b>Facility</b></label></th>
				<tr>
				<tr>
					<td><input type="text" name="name"/></td>
					<td><select name="county">
							<option></option>
							<option value="Albany County">Albany County</option>
							<option value="Anaheim">Anaheim</option>
							<option value="Bergen County">Bergen</option>
							<option value="Bermuda">Bermuda</option>
							<option value="Black Hawk County">Black Hawk County</option>
							<option value="Broome County">Broome County</option>
							<option value="Cayuga County">Cayuga County</option>
							<option value="Chambers County">Chambers County</option>
							<option value="Chemung County">Chemung County</option>
							<option value="Clayton County">Clayton County</option>
							<option value="Clinton County">Clinton County</option>
							<option value="Cobb County">Cobb County</option>
							<option value="Columbia County">Columbia County</option>
							<option value="Cuyahoga County">Cuyahoga County</option>
							<option value="Tulsa County">Tulsa County</option>
							<option value="Delaware County">Delaware County</option>
							<option value="Douglas County">Douglas County</option>
							<option value="Eaton County">Eaton County</option>
							<option value="Edmonton">Edmonton</option>
							<option value="Essex County">Essex County</option>
							<option value="Fulton County">Fulton County</option>
							<option value="Jefferson County">Jefferson County</option>
							<option value="Mecklenburg County">Mecklenburg County</option>
							<option value="Knox County">Knox County</option>
							<option value="Madison County">Madison County</option>
							<option value="Mahoning County">Mahoning County</option>
							<option value="Miami-Dade County">Miami-Dade County</option>
							<option value="Monroe County">Monroe County</option>
							<option value="Newport News">Newport News</option>
							<option value="Ocean County">Ocean County</option>
							<option value="Oneida County">Oneida County</option>
							<option value="Onondaga County">Onondaga County</option>
							<option value="Ontario County">Ontario County</option>
							<option value="Oswego County">Oswego County</option>
							<option value="Otsego County">Otsego County</option>
							<option value="Polk">Polk</option>
							<option value="Rensselaer County">Rensselaer County</option>
							<option value="Sacramento County">Sacremento County</option>
							<option value="San Diego County">San Diego County</option>
							<option value="Seneca County">Seneca County</option>
							<option value="Shelby County">Shelby County</option>
							<option value="Steuben County">Steuben County</option>
							<option value="Suffolk County">Suffolk County</option>
							<option value="Tecumseh">Tecumseh</option>
							<option value="Tioga County">Tioga County</option>
							<option value="Ulster County">Ulster County</option>
							<option value="Union County">Union County</option>
							<option value="Washington County">Washington County</option>
						</select></td>
				</table>
			<br/>
			<br/>
			<div class="buttons2">
				<input type="submit" value="Submit" name="delete" class="submitButtons"/>
			</div>
		</form>
		</div>
		</div>
		<br/>
		<br/>
		
		<!--This form is for searching for contacts-->
		<div id="searchModal" class="modal" >
		<div class="searchDiv">
			<span class="searchClose">x</span>
			<div class="searchTitle">
				<p><b>Search/Edit Contact</b></p>
			</div>
		<form id="searchForm" action="index.php" method="post">
			<table align="center">
				<tr>
					<th><label><b>Facility</b></label></th>
				</tr>
				<tr>
					<td>	
						<select name="county" >
								<option></option>
								<option value="Albany County">Albany County</option>
								<option value="Anaheim">Anaheim</option>
								<option value="Bergen County">Bergen</option>
								<option value="Bermuda">Bermuda</option>
								<option value="Black Hawk County">Black Hawk County</option>
								<option value="Broome County">Broome County</option>
								<option value="Cayuga County">Cayuga County</option>
								<option value="Chambers County">Chambers County</option>
								<option value="Chemung County">Chemung County</option>
								<option value="Clayton County">Clayton County</option>
								<option value="Clinton County">Clinton County</option>
								<option value="Cobb County">Cobb County</option>
								<option value="Columbia County">Columbia County</option>
								<option value="Cuyahoga County">Cuyahoga County</option>
								<option value="Tulsa County">Tulsa County</option>
								<option value="Delaware County">Delaware County</option>
								<option value="Douglas County">Douglas County</option>
								<option value="Eaton County">Eaton County</option>
								<option value="Edmonton">Edmonton</option>
								<option value="Essex County">Essex County</option>
								<option value="Fulton County">Fulton County</option>
								<option value="Jefferson County">Jefferson County</option>
								<option value="Mecklenburg County">Mecklenburg County</option>
								<option value="Knox County">Knox County</option>
								<option value="Madison County">Madison County</option>
								<option value="Mahoning County">Mahoning County</option>
								<option value="Miami-Dade County">Miami-Dade County</option>
								<option value="Monroe County">Monroe County</option>
								<option value="Newport News">Newport News</option>
								<option value="Ocean County">Ocean County</option>
								<option value="Oneida County">Oneida County</option>
								<option value="Onondaga County">Onondaga County</option>
								<option value="Ontario County">Ontario County</option>
								<option value="Oswego County">Oswego County</option>
								<option value="Otsego County">Otsego County</option>
								<option value="Polk">Polk</option>
								<option value="Rensselaer County">Rensselaer County</option>
								<option value="Sacramento County">Sacremento County</option>
								<option value="San Diego County">San Diego County</option>
								<option value="Seneca County">Seneca County</option>
								<option value="Shelby County">Shelby County</option>
								<option value="Steuben County">Steuben County</option>
								<option value="Suffolk County">Suffolk County</option>
								<option value="Tecumseh">Tecumseh</option>
								<option value="Tioga County">Tioga County</option>
								<option value="Ulster County">Ulster County</option>
								<option value="Union County">Union County</option>
								<option value="Washington County">Washington County</option>
						</select>
					</td>
				</tr>
			</table>
			<br/>
			<br/>
			<div class="buttons3">
				<input type="submit" value="Submit" name="search" id="submitButton" class="submitButtons"/>
			</div>
		</form>
		</div>
		</div>
	</body>
</html>

<?php
	
	/*Variables for accepting input from html forms.*/
	$Name = array_key_exists('name', $_POST) ? $_POST['name'] : NULL;
	$Facility = array_key_exists('county', $_POST) ? $_POST['county'] : NULL;
	$phone = array_key_exists('pNumber', $_POST) ? $_POST['pNumber'] : NULL;
	$secNum = array_key_exists('sNumber', $_POST) ? $_POST['sNumber'] : NULL;
	$Email = array_key_exists('Email', $_POST) ? $_POST['Email'] : NULL;
	
	
    
	//Function for adding a contact.  
	function addContact($contactName, $facility, $pNumber, $sNumber, $email)
	{//Beginning of add contact function.
		
		//Database variables for connecting to a database.
		$userName = "root";
		$password = "";
		$db = "servicecontacts";
		$server = "127.0.0.1";
		$dbConnection = mysqli_connect($server, $userName, $password, $db);
		
		//Making variable s equal to the paramenters after input.
		$Name = $contactName;
		$Facility = $facility;
		$phone = $pNumber;
		$secNum = $sNumber;
		$Email = $email;
		
		//variables for accepting the 
		$Name = array_key_exists('name', $_POST) ? $_POST['name'] : NULL;
		$Facility = array_key_exists('county', $_POST) ? $_POST['county'] : NULL;
		$phone = array_key_exists('pNumber', $_POST) ? $_POST['pNumber'] : NULL;
		$secNum = array_key_exists('sNumber', $_POST) ? $_POST['sNumber'] : NULL;
		$Email = array_key_exists('Email', $_POST) ? $_POST['Email'] : NULL;
		
		//Update variable for placing values to the database.
		$update = "Insert into contacts(contact_Name, facility, phone_number, second_number,
				   email) values ('$Name', '$Facility', '$phone', '$secNum', '$email')";
		
		//Connecting to the database.
		mysqli_query($dbConnection, $update);
		echo "<script type='text/javascript'>window.alert('Contact $Name has been added!!!')</script>";
		
	    mysqli_close($dbConnection);
	    
	}//End of add contact function
	
	/*Fucntion for deleting a contact*/
	function deleteContact($contactName, $facility)
	{//Beginning of delete contact function
		
		//Variables for connecting to the database
		$userName = "root";
		$password = "";
		$db = "servicecontacts";
		$server = "127.0.0.1";
		$dbConnection = mysqli_connect($server, $userName, $password, $db);
		
		//Variables equal to function parameters.
		$Name = $contactName;
		$Facility = $facility;
		
		//Posting variables to the server.
		$Name = array_key_exists('name', $_POST) ? $_POST['name'] : NULL;
		$Facility = array_key_exists('county', $_POST) ? $_POST['county'] : NULL;
		
		//Delete variable for deleting contacts.
		$deleteContact = "Delete from contacts where contact_name = '$Name' And facility = '$Facility'";
		
		mysqli_query($dbConnection, $deleteContact);
		
		echo "<script type='text/javascript'>window.confirm('Contact $Name Has Been Deleted')</script>";
	    mysqli_close($dbConnection);
	    
	}//End of delete contact function
	
	//Function for searching contacts.
	function searchContact($facility)
	{//Beginning of search/edit function
		
		//Variables for connecting to the database.
		$userName = "root";
		$password = "";
		$db = "servicecontacts";
		$server = "127.0.0.1";
		$dbConnection = mysqli_connect($server, $userName, $password, $db);	
		
		//Variable equaling the parameter
		$Facility = $facility;
		
		//Posting parameter values to the server.
		$Name = array_key_exists('name', $_POST) ? $_POST['name'] : NULL;
		$Facility = array_key_exists('county', $_POST) ? $_POST['county'] : NULL;
		$phone = array_key_exists('pNumber', $_POST) ? $_POST['pNumber'] : NULL;
		$secNum = array_key_exists('sNumber', $_POST) ? $_POST['sNumber'] : NULL;
		$Email = array_key_exists('Email', $_POST) ? $_POST['Email'] : NULL;
		$Edited = array_key_exists('edited', $_POST) ? $_POST['edited'] : NULL;
		$searchContact = "Select * from contacts where facility = '$Facility'";
		$editContact = "Update contacts Set phone_number='$phone', second_number='$secNum',
						Email='$Email' Where contact_name='$Name' && facility='$Facility'";
		$report = mysqli_query($dbConnection, $searchContact);
		
		
		if($dbConnection)
		{//Beginning of if statement
		
			//Creating the table for displaying contacts.
			echo "<br/>";
			echo "<br/>";
			echo "<div id='editDiv'>\n";
			echo "<form class='editForm' action='index.php' method='post'>\n";
			echo "<table align='center' id='table'>\n";
			echo "<input type='hidden' name='edited' id='edited'/>";
			echo "<tr>
					<th>Name</th>
					<th>Facility</th>
					<th>1st Number</th>
					<th>2nd Number</th>
					<th>Email</th>
				  </tr>\n";
				  
			while($Report= mysqli_fetch_row($report))
			{//Beginning of while statement.
			
				//Making content in the table editable.
				echo "<tr>
						<td contenteditable='false'><input type='text' value='{$Report[0]}' id='searchName' name='name'/></td>";
				echo   "<td contenteditable='false'><input type='text' value='{$Report[1]}' name='county'/></td>";
				echo   "<td contenteditable='true'><input type='text' value='{$Report[2]}' name='pNumber'/></td>";
				echo   "<td contenteditable='true'><input type='text' value='{$Report[3]}' name='sNumber'/></td>";
				echo   "<td contenteditable='true'><input type='text' value='{$Report[4]}' name='Email'/></td>
					   </tr>\n";	
					   
			}//End of while statement.
			
			echo "</table>";
			echo "<br/>";
			echo "<br/>";
			echo "<div class='buttons'>";
			echo "<input type='submit' value='Update' name='edit' id='edit' onclick='editing()'/>";
			echo "</div>";
			echo "</form>";
			echo "</div>";
			
			switch(strlen($Edited))
			{//Beginning of switch statement
				
				case 4:
					$report = mysqli_query($dbConnection, $editContact);//Query the database
					echo "<script type='text/javascript'>window.alert('Contact has been updated!!!')</script>";
					break;
					
				case 5:
					echo "<script type='text/javascript'>window.alert('Action Cancelled By User!!!')</script>";
					break;
			}//End of switch statement
		
		 
		mysqli_query($dbConnection, $searchContact);
		mysqli_close($dbConnection);
		
		}//End of if statement.
		
	}//End of search/edit function.
	
	//Variables for passing to if/else statements to open certain div's.
	$add = array_key_exists('add', $_POST) ? $_POST['add'] : NULL;
	$delete = array_key_exists('delete', $_POST) ? $_POST['delete'] : NULL;
	$search = array_key_exists('search', $_POST) ? $_POST['search'] : NULL;
	
	
	 
		
	if($add)
	{//Beginning of if/else statement
		
		//Receiving the hidden value from Script.js to check if adding the contact is cancelled.
        $responding = array_key_exists('value', $_POST) ? $_POST['value'] : NULL;
        
		switch(strlen($responding)){//Beginning of switch statement
			case 4:
				addContact($Name, $Facility, $phone, $secN0um, $Email);//Calling the addContact function.
				break;
			case 5:
				echo "<script type='text/javascript'>window.alert('Action Cancelled!!!')</script>";
				break;
		}//End of switch statement
	}else if($delete)
	 {//Checking if the delete button is pressed.
	
		deleteContact($Name, $Facility);//Calling the deleteContact function
		
	}else
	 {//Checking if the search button is pressed
	
		searchContact($Facility);//Calling the searchContact function
		
	}//End of if/else statment
	
	
	
			
	
	/*echo "<br/>
		  <br/>
	      <br/>
	      <br/>
	     
	    	<footer>
	    		<ul class='bottomnav'>
	    			<li><li>
	    			<li><h5><p>Created by: Darius Holley</p></h5></li>
					<li><h5><p>Email: <a href='mailto:dariusholley23@gmail.com'>
						dariusholley23@gmail.com</a></p></h5></li>
					<li><h5>
					<li><h5><p>V1.0.0.1</p></h5></li>
				</ul>
			</footer>";*/
?>
