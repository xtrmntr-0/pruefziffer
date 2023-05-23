var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});



function berechneIsbn()
{
    let isbn = document.getElementById("ISBN").value;

    //alert(isbn);

    let summe = 0;

    for(let i = 0; i < isbn.length -1; i++) 
        {
           zahl = parseInt(isbn.substr(i, 1));
                console.log(zahl);
         if((i % 2) == 0)
        {
            summe = summe + (zahl * 1);
        }
        

        else
        {
            summe = summe + (zahl * 3);
        }
    }
   alert(summe);


        
   let pruef = 10 - (summe % 10);

   document.getElementById("pruefz").value = pruef;

    let last = isbn.substr(12, 1);
   
    if(last != pruef)
    {
        qrcode.makeCode("ungültig");
        alert("ungültig");
   }
   else{
    qrcode.makeCode("gültig");
    alert("gültig");
   }

}





