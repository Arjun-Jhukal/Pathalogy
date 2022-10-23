 function myfunction() {
     alert("Your appointment is booked");
 }
 const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 const btn = document.getElementById(changebtn);
 changebtn.addEventListener('click', function() {
     let hexcolor = "#";
     for (let i = 0; i < 6; i++) {
         hexcolor += hex[getRandomNumber()];
     }
     document.body.style.backgroundColor = hexcolor;
 });

 function getRandomNumber() {
     return Math.floor(Math.random() * hex.length)
 }

 //  let count = 0;
 //  const value = document.getElementById("qdoctors");
 //  //  console.log("ok tested");
 //  value.addEventListener('mouseover', function() {
 //      while (count < 400) {
 //          value.textContent = count;
 //          count += 10;

 //      }
 //  });