     function write(txt){
  let start = 0;
  function writeOne(){
    if (start < txt.length) {
      document.getElementById('title').innerHTML += txt.charAt(start);
      start++;
    } else {
      clearInterval(int);
    }
  }
  let int = setInterval(writeOne, 100);
}
write('Donate to CTGM');

     let qrcode = new QRCode(document.getElementById("qrcode"), {
            text: "Account Number: 1012123244\nName: Christ True Gospel Mission\nBank: Zenith Bank",
            width: 200,  
            height: 200
        });
        
        function copyAccountDetails() {
    navigator.clipboard.writeText("Account Number: 1012123244\nAccount Name: Christ True Gospel Mission\nBank: Zenith Bank");
    alert("Account details copied to clipboard. You can paste them in your banking app.\nClick the OK button to continue");
  }
  
  
 