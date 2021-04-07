var pt
    var pq
    var ea
    var pn
    var pa
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
 
   
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  // database
  function db(){
    var pt=document.getElementById("pt");
    var pq=document.getElementById("pq");
    var ea=document.getElementById("Ea");
    var pn=document.getElementById("pn");
    var pa=document.getElementById("pa");
    var d=new Date()
var cData={
  productTittle:pt.value,
  productQuantity:pq.value,
  emailAddress:ea.value,
  phoneNumber:pn.value,
  DateAndTime:d.toString(),
  postalAddress:pa.value
  
}
console.log(cData.DateAndTime)
firebase.database().ref('client details').push(cData)


  }
  

function datab(){

  var person = prompt("Please enter your ID(Only for Admins)", "ID" );

if (person === "zeeali8") {
  var x = document.getElementById("myBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  firebase.database().ref('client details').on('value',(snap)=>{

    const keys = Object.keys(snap.val())
    
    keys.map(key=>{ return document.getElementById('dataS').innerHTML +=   Object.entries(snap.val()[key]).reverse() +"<br>" } )
  
   
  });
}
else{
  alert("Try Again!!!")
}
}

//   for view product
/* Open when someone clicks on the span element */
function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }
   /* Close button down*/
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }

function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
  }
  
 
  function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
  }
  function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
  }
  function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
  }
  
 
  function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
  }
  function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
  }
  function openNav4() {
    document.getElementById("myNav4").style.width = "100%";
  }
  
 
  function closeNav4() {
    document.getElementById("myNav4").style.width = "0%";
  }
  function closeNav4() {
    document.getElementById("myNav4").style.width = "0%";
  }
  function openNav5() {
    document.getElementById("myNav5").style.width = "100%";
  }
  
 
  function closeNav5() {
    document.getElementById("myNav5").style.width = "0%";
  }
  function closeNav5() {
    document.getElementById("myNav5").style.width = "0%";
  }
  function openNav6() {
    document.getElementById("myNav6").style.width = "100%";
  }
  
 
  function closeNav6() {
    document.getElementById("myNav6").style.width = "0%";
  }
  function closeNav6() {
    document.getElementById("myNav6").style.width = "0%";
  }
  function openNav7() {
    document.getElementById("myNav7").style.width = "100%";
  }
  
 
  function closeNav7() {
    document.getElementById("myNav7").style.width = "0%";
  }
  function closeNav7() {
    document.getElementById("myNav7").style.width = "0%";
  }

  function openNav8() {
    document.getElementById("myNav8").style.width = "100%";
  }
  
 
  function closeNav8() {
    document.getElementById("myNav8").style.width = "0%";
  }
  function closeNav8() {
    document.getElementById("myNav8").style.width = "0%";
  }