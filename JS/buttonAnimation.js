/*******************************************************************************
****Program Title:   Maintenance Contact List                                  *
****Document Name:   Script.js                                                 *
****Author:          Darius Holley                                             *
****Date Deployed:   August 17, 2016                                           *
****Department:      Service Department                                        *
****Description:     This file is made for the animations needed to display the*
****                 different forms.  No useing input for this file.          *
********************************************************************************
*/


//Button clicks make either add, delete, or search forms appear/disappear.
$(document).ready(function(){//Start of document ready
	
	
	//Code for making the add form to toggle.
	$(".addDiv").hide(10, function(){//Begiinning of add div toggle
		$("#add").click(function(){
			$(".addDiv").toggle("slow");
		});
	});//End of add div toggle.
	
	//Code for making the delete form toggle.
	$(".deleteDiv").hide(10, function(){//Beginning of delete div toggle.
		$("#delete").click(function(){
			$(".deleteDiv").toggle("slow");
		});
	});//End of delete div toggle
	
	//Code for making the search form toggle.
	$(".searchDiv").hide(10, function(){//Beginning of search div toggle
		$("#search").click(function(){
			$(".searchDiv").toggle("slow");
		});
	});//End of search div toggle
	
	
});//End of document ready

