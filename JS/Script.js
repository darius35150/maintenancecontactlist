/*******************************************************************************
****Program Title:   Maintenance Contact List                                  *
****Document Name:   Script.js                                                 *
****Author:          Darius Holley                                             *
****Date Deployed:   August 17, 2016                                           *
****Department:      Service Department                                        *
****Description:     This file is made for confirming user input from          *
****                 default.php.  It provides true or false values for the    *
****                 site.                                                     *
********************************************************************************
*/

/*
 *************************************************************************
 *Function for prompting user to either add the contact or cancel action.*
 *Returns either true or false value to hidden input element.            *
 *************************************************************************
 */ 
function confirming(){//Start if confirming function
  
  var $Name = document.getElementById('name').value;
  var response = window.confirm('Add ' + $Name + ' to Contacts?');
  
  if (response){//Beginning of if statment
    
    //Sending true if the ok button is selected
    var responding = document.getElementById('value').value = true;
    
  //End of if statement  
  } else{//Start of else statement
    
    //Sending false if the cancel button is selected
    responding = document.getElementById('value').value = false;
    
  }//Endo fo else statement
  
}//End of confirming function


/*
 ***************************************************************************
 * Function for confirming if contact is to be updated.                    *
 ***************************************************************************
 */
function editing(){//Beginning of editing function
  
  var $Name = document.getElementById('searchName').value;

 //var edit = window.confirm("Updating Contact " + $Name + "?");
  var edit = window.confirm("Update Contact?");
  
  if(edit){//Beginning of if statement
    
    //Sending true if the ok button is selected
    var edited = document.getElementById('edited').value = true;
  
  //End of if statement  
  
  }else{//Beginning of else statement.
    
    //Sending false if the cancel button is selected.
    var edited = document.getElementById('edited').value = false;
    
  }//Endo of else statement.
  
}//End of editing function

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/************************************************************************
 * Functions are for the open and close side navigations on other pages.*
 * **********************************************************************
 */ 
function openNav(){
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav(){
  document.getElementById("sideNav").style.width = "0";
}


function modalScreen(){
var addModal = document.getElementById("addModal");
var addBtn = document.getElementById("add");
var addSpan = document.getElementsByClassName("addClose")[0];

var deleteModal = document.getElementById("deleteModal");
var deleteBtn = document.getElementById("delete");
var deleteSpan = document.getElementsByClassName("deleteClose")[0];

var searchModal = document.getElementById("searchModal");
var searchBtn = document.getElementById("search");
var searchSpan = document.getElementsByClassName("searchClose")[0];

addBtn.onclick = function(){
  addModal.style.display = "block";
}

addSpan.onclick = function(){
  addModal.style.display = "none";
}

deleteBtn.onclick = function(){
  deleteModal.style.display = "block";
}

deleteSpan.onclick = function(){
  deleteModal.style.display = "none";
}

searchBtn.onclick = function(){
  searchModal.style.display = "block";
}

searchSpan.onclick = function(){
  searchModal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == addModal){
    addModal.style.display = "none";
  }else if(event.target == deleteModal){
    deleteModal.style.display = "none";
  }else if(event.target == searchModal){
    searchModal.style.display = "none";
  }
}

}


/**************************************************************************
 * This section is for displaying markers on the map for Google.          *
 **************************************************************************
 */ 
function customerMap(){
  var canvas = document.getElementById("map");
  var options = {
    center: new google.maps.LatLng(37.09, -95.71),
    zoom: 4
  };
  
  //Setting up individual makers locations.
  var albanyCoMarker = new google.maps.LatLng(42.75, -73.82);
  var albanyMarker = new google.maps.Marker({
    position: albanyCoMarker
  });
  
  var albemarleJailMarker = new google.maps.LatLng(38, -78.49);
  var albemarleMarker = new google.maps.Marker({
    position: albemarleJailMarker
  });
  
  var alexanderMaconochieCenterMarker = new google.maps.LatLng(-35.37, 149.16);
  var alexanderMarker = new google.maps.Marker({
    position: alexanderMaconochieCenterMarker
  });
  
  var alleganyCoMarker = new google.maps.LatLng(42.20, -78);
  var alleganyMarker = new google.maps.Marker({
    position: alleganyCoMarker
  });
  
  var allenCoMarker = new google.maps.LatLng(34.50, -82.65);
  var allenMarker = new google.maps.Marker({
    position: allenCoMarker
  });
  
  var anaheimPDMarker = new google.maps.LatLng(33.83, -117.91);
  var anaheimMarker = new google.maps.Marker({
    position: anaheimPDMarker
  });
  
  var bartowCountyMarker = new google.maps.LatLng(34.19, -84.77);
  var bartowMarker = new google.maps.Marker({
    position: bartowCountyMarker
  });
  
  var belleGladeMarker = new google.maps.LatLng(26.72, -80.66);
  var belleMarker = new google.maps.Marker({
    position: belleGladeMarker
  });
  
  var bergenCoMarker = new google.maps.LatLng(40.87, -74.03);
  var bergenMarker = new google.maps.Marker({
    position: bergenCoMarker
  });
  
  var bermudaWestgateFacilityMarker = new google.maps.LatLng(32.32, -64.83);
  var bermudaMarker = new google.maps.Marker({
    position: bermudaWestgateFacilityMarker
  });
  
  var blackHawkCountyMarker = new google.maps.LatLng(42.49, -92.33);
  var blackHawkMarker = new google.maps.Marker({
    position: blackHawkCountyMarker
  });
  
  var bonAirJuvenileMarker = new google.maps.LatLng(37.52, -77.56);
  var bonAirMarker = new google.maps.Marker({
    position: bonAirJuvenileMarker
  });
  
  var brooklynHouseOfDetentionMarker = new google.maps.LatLng(41.78, -71.95);
  var brooklynHouseMarker = new google.maps.Marker({
    position: brooklynHouseOfDetentionMarker
  });
  
  var broomeCoMarker = new google.maps.LatLng(42.13, -75.91);
  var broomeMarker = new google.maps.Marker({
    position: broomeMarker
  });
  
  var campbellCoMarker = new google.maps.LatLng(39.08, -84.49);
  var campbellMarker = new google.maps.Marker({
    position: campbellCoMarker
  });
  
  var cayugaCoMarker = new google.maps.LatLng(42.99, -76.54);
  var cayugaMarker = new google.maps.Marker({
    position: cayugaCoMarker 
  });
  
  var chambersCoMarker = new google.maps.LatLng(32.89, -85.40);
  var chambersMarker = new google.maps.Marker({
    position: chambersCoMarker
  });
  
  var chemungCoMarker = new google.maps.LatLng(42.09, -76.80);
  var chemungMarker = new google.maps.Marker({
    position: chemungCoMarker
  });
  
  var citrusCoMarker = new google.maps.LatLng(28.84, -82.48);
  var citrusMarker = new google.maps.Marker({
    position: citrusCoMarker
  });
  
  var clarkeCoMarker = new google.maps.LatLng(37.99, -84.17);
  var clarkeMarker = new google.maps.Marker({
    position: clarkeCoMarker
  });
  
  var claytonCoMarker = new google.maps.LatLng(33.50, -84.35);
  var claytonMarker = new google.maps.Marker({
    position: claytonCoMarker
  });
  
  var clintonCoMarker = new google.maps.LatLng(44.72, -73.46);
  var clintonMarker = new google.maps.Marker({
    position: clintonCoMarker
  });
  
  var cobbADCMarker= new google.maps.LatLng(33.90, -84.57);
  var cobbADMarker = new google.maps.Marker({
    position: cobbADCMarker
  });
  
  var cobbCourtsMarker = new google.maps.LatLng(33.95, -84.54);
  var cobbCouMarker = new google.maps.Marker({
    position: cobbCourtsMarker
  });
  
  var coffeeCoMarker = new google.maps.LatLng(31.29, -85.72);
  var coffeeMarker = new google.maps.Marker({
    position: coffeeCoMarker
  });
  
  var columbiaCoMarker = new google.maps.LatLng(42.249162,-73.755868);
  var columbiaMarker = new google.maps.Marker({
    position: columbiaCoMarker
  });
  
  var cookCoMarker = new google.maps.LatLng( 41.843105,-87.696118);
  var cookMarker = new google.maps.Marker({
    position: cookCoMarker
  });
  
  var cortlandCoMarker = new google.maps.LatLng(42.59858,-76.17579);
  var cortlandMarker = new google.maps.Marker({
    position: cortlandCoMarker
  });
  
  var covingtonCoMarker = new google.maps.LatLng(31.313247,-86.502863);
  var covingtonMarker = new google.maps.Marker({
    position: covingtonCoMarker
  });
  
  var culpepperCorrectionalMarker = new google.maps.LatLng(38.366401,-78.016579);
  var culpepperMarker = new google.maps.Marker({
    position: culpepperCorrectionalMarker 
  });
  
  var cuyahogaCoMarker = new google.maps.LatLng(41.492778,-81.620449);
  var cuyahogaMarker = new google.maps.Marker({
    position: cuyahogaCoMarker
  });
  
  var daleCoMarker = new google.maps.LatLng(32.367174,-86.300025);
  var daleMarker = new google.maps.Marker({
    position: daleCoMarker
  });
  
  var decaturCoMarker = new google.maps.LatLng(30.907519,-84.600719);
  var decaturMarker = new google.maps.Marker({
    position: decaturCoMarker
  });
  
  var delawareCoMarker = new google.maps.LatLng(42.879371,-78.87624);
  var delawareMarker = new google.maps.Marker({
    position: delawareCoMarker
  });
  
  var dixieCoMarker = new google.maps.LatLng(29.635144,-83.092855);
  var dixieMarker = new google.maps.Marker({
    position: dixieCoMarker
  });
  
  var douglasCoMarker = new google.maps.LatLng(33.74733,-84.722132);
  var douglasMarker = new google.maps.Marker({
    position: douglasCoMarker
  });
  
  var eastPointMarker = new google.maps.LatLng(33.680621,-84.442125);
  var eastPMarker = new google.maps.Marker({
    position: eastPointMarker
  });
  
  var eatonCoMarker = new google.maps.LatLng(42.581735,-84.845364);
  var eatonMarker = new google.maps.Marker({
    position: eatonCoMarker
  });
  
  var edmontonRemandCentreMarker = new google.maps.LatLng(53.645705,-113.538731);
  var edmontonMarker = new google.maps.Marker({
    position: edmontonRemandCentreMarker
  });
  
  var erieCoMarker = new google.maps.LatLng(42.88, -78.88);
  var erieMarker = new google.maps.Marker({
    position: erieCoMarker
  });
  
  var essexCoMarker = new google.maps.LatLng(44.214544,-73.595067);
  var essexMarker = new google.maps.Marker({
    position: essexCoMarker
  });
  
  var floydCoMarker = new google.maps.LatLng(37.668103,-82.770703);
  var floydMarker = new google.maps.Marker({
    position: floydCoMarker
  });
  
  var floydCoGAMarker= new google.maps.LatLng(34.280097,-85.141529);
  var floydCoMarker = new google.maps.Marker({
    position: floydCoGAMarker
  });
  
  var franklinCoMarker = new google.maps.LatLng(29.775964,-84.831055);
  var franklinMarker = new google.maps.Marker({
    position: franklinCoMarker
  });
  
  var fultonCoMarker = new google.maps.LatLng(43.018447,-74.349754);
  var fultonMarker = new google.maps.Marker({
    position: fultonCoMarker
  });
  
  var jeffersonCoMarker = new google.maps.LatLng(33.522479,-86.80923);
  var jeffersonMarker = new google.maps.Marker({
    position: jeffersonCoMarker
  });
  
  var knoxCoMarker = new google.maps.LatLng(36.085365,-83.841287);
  var knoxMarker = new google.maps.Marker({
    position: knoxCoMarker
  });
  
  var kromeProcessingCenterMarker = new google.maps.LatLng(25.754251,-80.489106);
  var kromeMarker = new google.maps.Marker({
    position: kromeProcessingCenterMarker
  });
  
  var madisonCoMarker = new google.maps.LatLng(43.080398,-75.705769);
  var madisonMarker = new google.maps.Marker({
    position: madisonCoMarker 
  });
  
  var mahoningCoMarker = new google.maps.LatLng(41.104265,-80.654984);
  var mahoningMarker = new google.maps.Marker({
    position: mahoningCoMarker
  });
  
  var marionCoIndMarker = new google.maps.LatLng(38.040243,-87.366692);
  var marionMarker = new google.maps.Marker({
    position: marionCoIndMarker
  });
  
  var marionCoVAMaker = new google.maps.LatLng(36.830348,-81.507899);
  var marionVAMarker = new google.maps.Marker({
    position: marionCoVAMaker
  });
  
  var maxeyTrainingSchoolMarker = new google.maps.LatLng(42.402273,-83.78364);
  var maxeyMarker = new google.maps.Marker({
    position: maxeyTrainingSchoolMarker 
  });
  
  var mecklenburgCoMarker = new google.maps.LatLng(35.315035,-80.845942);
  var mecklenburgMarker = new google.maps.Marker({
    position: mecklenburgCoMarker 
  });
  
  var metroWestMarker = new google.maps.LatLng(25.809507,-80.418034);
  var metroMarker = new google.maps.Marker({
    position: metroWestMarker
  });
  
  var tgkMiamiMarker = new google.maps.LatLng(25.775253,-80.196662);
  var tgkMarker = new google.maps.Marker({
    position: tgkMiamiMarker
  });
  
  var miamiDadeCoRehab = new google.maps.LatLng(25.807137,-80.3131);
  var miamiDadeMarker = new google.maps.Marker({
    position: miamiDadeCoRehab
  });
  
  var monroeCoMarker = new google.maps.LatLng(43.152503,-77.613672);
  var monroeMarker = new google.maps.Marker({
    position: monroeCoMarker
  });
  
  var newportNewsPSBMarker = new google.maps.LatLng(36.978628,-76.429443);
  var newportMarker = new google.maps.Marker({
    position: newportNewsPSBMarker
  });
  
  var oceanCoMarker = new google.maps.LatLng(39.953049,-74.194756);
  var oceanMarker = new google.maps.Marker({
    position: oceanCoMarker
  });
  
  var ohioRiverMarker = new google.maps.LatLng(38.627201,-82.843487);
  var ohioMarker = new google.maps.Marker({
    position: ohioRiverMarker
  });
  var oneidaCoMarker = new google.maps.LatLng(43.155928,-75.376811);
  var oneidaMarker = new google.maps.Marker({
    position: oneidaCoMarker
  });
  
  var onondagaCoMarker = new google.maps.LatLng(43.046182,-76.146468);
  var onondagaMarker = new google.maps.Marker({
    position: onondagaCoMarker
  });
  
  var ontarioCoMarker = new google.maps.LatLng(42.882598,-77.21186);
  var ontarioMarker = new google.maps.Marker({
    position: ontarioCoMarker
  });
  
  var orangeCoMarker = new google.maps.LatLng(28.513101,-81.354466);
  var orangeMarker = new google.maps.Marker({
    position: orangeCoMarker
  });
  
  var oswegoCoMarker = new google.maps.LatLng(43.431264,-76.479947);
  var oswegoMarker = new google.maps.Marker({
    position: oswegoCoMarker
  });
  
  var otsegoCoMarker = new google.maps.LatLng(42.594842,-74.932894);
  var otsegoMarker = new google.maps.Marker({
    position: otsegoCoMarker
  });
  
  var ouachitaCorrectionalCenterMarker = new google.maps.LatLng(32.509311,-92.119301);
  var ouachitaMarker = new google.maps.Marker({
    position: ouachitaCorrectionalCenterMarker
  });
  
  var rensselaerCoMarker = new google.maps.LatLng(42.709954,-73.700779);
  var rensselaerMarker = new google.maps.Marker({
    position: rensselaerCoMarker
  });
  
  var sacramentoCoMarker = new google.maps.LatLng(38.544633,-121.33933);
  var sacramentoMarker = new google.maps.Marker({
    position: sacramentoCoMarker
  });
  
  var sanDiegoCoMarker = new google.maps.LatLng(32.717501,-117.164472);
  var sanDiegoMarker = new google.maps.Marker({
    position: sanDiegoCoMarker
  });
  
  var saratogaCoMarker= new google.maps.LatLng(43.020316,-73.872484);
  var saratogaMarker = new google.maps.Marker({
    position: saratogaCoMarker
  });
  
  var schenectadyCoMarker = new google.maps.LatLng(42.809942,-73.939996);
  var schenectadyMarker = new google.maps.Marker({
    position: schenectadyCoMarker
  });
  
  var schoharieCoMarker = new google.maps.LatLng(42.67073,-74.310411);
  var schoharieMarker = new google.maps.Marker({
    position: schoharieCoMarker
  });
  
  var schuylerCoMarker = new google.maps.LatLng(42.377249,-76.87156);
  var schuylerMarker = new google.maps.Marker({
    position: schuylerCoMarker 
  });
  
  var senecaCoMarker = new google.maps.LatLng(42.720968,-76.824989);
  var senecaMarker = new google.maps.Marker({
    position: senecaCoMarker
  });
  
  var shelbyCoMarker = new google.maps.LatLng(35.145432,-90.039311);
  var shelbyMarker = new google.maps.Marker({
    position: shelbyCoMarker 
  });
  
  var steubenCoMarker = new google.maps.LatLng(42.350322,-77.295385);
  var steubenMarker = new google.maps.Marker({
    position: steubenCoMarker
  });
  
  var suffolkCoRiverheadMarker = new google.maps.LatLng(40.915623,-72.672621);
  var suffolkCoRMarker = new google.maps.Marker({
    position: suffolkCoRiverheadMarker
  });
  
  var suffolkCoYaphankMarker = new google.maps.LatLng(40.818976,-72.916478);
  var suffolkCoYMarker = new google.maps.Marker({
    position: suffolkCoYaphankMarker
  });
  
  var sullivanCoMarker = new google.maps.LatLng(41.656225,-74.684334);
  var sullivanMarker = new google.maps.Marker({
    position: sullivanCoMarker
  });
  
  var tecumsehMarker = new google.maps.LatLng(40.402293,-96.185268);
  var tecumMarker = new google.maps.Marker({
    position: tecumsehMarker
  });
  
  var tehamaCoMarker = new google.maps.LatLng(40.175894,-122.236403);
  var tehamaMarker = new google.maps.Marker({
    position: tehamaCoMarker
  });
  
  var tiogaCoMarker = new google.maps.LatLng(42.142664,-76.265677);
  var tiogaMarker = new google.maps.Marker({
    position: tiogaCoMarker
  });
  
  var tompkinsCoMarker = new google.maps.LatLng(42.492717,-76.467075);
  var tompkinsMarker = new google.maps.Marker({
    position: tompkinsCoMarker
  });
  
  var tulsaCoMarker = new google.maps.LatLng(36.157885,-95.998168);
  var tulsaMarker = new google.maps.Marker({
    position: tulsaCoMarker
  });
  
  var ulsterCoMarker = new google.maps.LatLng(41.914879,-74.016091);
  var ulsterMarker = new google.maps.Marker({
    position: ulsterCoMarker
  });
  
  var unionCoNCMarker = new google.maps.LatLng(34.977818,-80.465534);
  var unionMarker = new google.maps.Marker({
    position: unionCoNCMarker
  });
  
  var warrenCoMarker = new google.maps.LatLng(43.357601,-73.699037);
  var warrenMarker = new google.maps.Marker({
    position: warrenCoMarker
  });
  
  var washingtonCoMarker = new google.maps.LatLng(43.27918,-73.586415);
  var washingtonMarker = new google.maps.Marker({
    position: washingtonCoMarker
  });
  
  var wayneCoMarker = new google.maps.LatLng(43.067597,-77.032293);
  var wayneMarker = new google.maps.Marker({
    position: wayneCoMarker
  });
 

  var map = new google.maps.Map(canvas, options);
  
  albanyMarker.setMap(map);
  albemarleMarker.setMap(map);
  alexanderMarker.setMap(map);
  allenMarker.setMap(map);
  anaheimMarker.setMap(map);
  bartowMarker.setMap(map);
  belleMarker.setMap(map);
  bergenMarker.setMap(map);
  bermudaMarker.setMap(map);
  blackHawkMarker.setMap(map);
  bonAirMarker.setMap(map);
  brooklynHouseMarker.setMap(map);
  broomeMarker.setMap(map);
  campbellMarker.setMap(map);
  cayugaMarker.setMap(map);
  chambersMarker.setMap(map);
  chemungMarker.setMap(map);
  citrusMarker.setMap(map);
  clarkeMarker.setMap(map);
  claytonMarker.setMap(map);
  clintonMarker.setMap(map);
  cobbADMarker.setMap(map);
  cobbCouMarker.setMap(map);
  coffeeMarker.setMap(map);
  columbiaMarker.setMap(map);
  cookMarker.setMap(map);
  cortlandMarker.setMap(map);
  covingtonMarker.setMap(map);
  cuyahogaMarker.setMap(map);
  daleMarker.setMap(map);
  decaturMarker.setMap(map);
  delawareMarker.setMap(map);
  dixieMarker.setMap(map);
  douglasMarker.setMap(map);
  eastPMarker.setMap(map);
  eatonMarker.setMap(map);
  edmontonMarker.setMap(map);
  erieMarker.setMap(map);
  essexMarker.setMap(map);
  floydMarker.setMap(map);
  floydCoMarker.setMap(map);
  franklinMarker.setMap(map);
  fultonMarker.setMap(map);
  jeffersonMarker.setMap(map);
  knoxMarker.setMap(map);
  kromeMarker.setMap(map);
  madisonMarker.setMap(map);
  mahoningMarker.setMap(map);
  marionVAMarker.setMap(map);
  marionMarker.setMap(map);
  maxeyMarker.setMap(map);
  mecklenburgMarker.setMap(map);
  metroMarker.setMap(map);
  tgkMarker.setMap(map);
  miamiDadeMarker.setMap(map);
  monroeMarker.setMap(map);
  newportMarker.setMap(map);
  oceanMarker.setMap(map);
  ohioMarker.setMap(map);
  oneidaMarker.setMap(map);
  onondagaMarker.setMap(map);
  ontarioMarker.setMap(map);
  orangeMarker.setMap(map);
  oswegoMarker.setMap(map);
  otsegoMarker.setMap(map);
  ouachitaMarker.setMap(map);
  rensselaerMarker.setMap(map);
  sacramentoMarker.setMap(map);
  sanDiegoMarker.setMap(map);
  saratogaMarker.setMap(map);
  schenectadyMarker.setMap(map);
  schoharieMarker.setMap(map);
  schuylerMarker.setMap(map);
  senecaMarker.setMap(map);
  shelbyMarker.setMap(map);
  steubenMarker.setMap(map);
  suffolkCoRMarker.setMap(map);
  suffolkCoYMarker.setMap(map);
  sullivanMarker.setMap(map);
  tecumsehMarker.setMap(map);
  tehamaMarker.setMap(map);
  tiogaMarker.setMap(map);
  tompkinsMarker.setMap(map);
  tulsaMarker.setMap(map);
  ulsterMarker.setMap(map);
  warrenMarker.setMap(map);
  washingtonMarker.setMap(map);
  wayneMarker.setMap(map);
  
 /* google.maps.event.addListener(cayugaMarker, 'click', function(){
    var message = new google.maps.InfoWindow({
      content: "Cayuga Co Jail, 7445 County House Road, Auburn, NY 13021" 
    });
    message.open(map, cayugaMarker);
  });
  
  google.maps.event.addListener(erieMarker, 'click', function(){
    var message = new google.maps.InfoWindow({
      content: "Erie Holding Center, 40 Delaware Ave, Buffalo, NY 14202"
    });
    message.open(map, erieMarker);
  });*/
}