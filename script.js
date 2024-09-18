document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      } else if (event.target.tagName === 'A') {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  }
});



function writeText(text) {
  let index = 0;
  function writeNextLetter() {
    if (index < text.length) {
      document.getElementById('head').innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }
  let interval = setInterval(writeNextLetter, 20);
}

const headElement = document.getElementById('head');
let textWritten = false;

window.addEventListener('scroll', () => {
  const rect = headElement.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight && !textWritten) {
    writeText("We're glad you're here! Our church is a community of believers passionate about knowing Jesus and making Him known. Join us for worship, connection, and growth.");
    textWritten = true;
  }
});


        function copyAccountDetails() {
    navigator.clipboard.writeText("Account Number: 1012123244\nName: Christ True Gospel Mission Int'l\nBank: Zenith Bank");
    alert("Account details copied to clipboard. You can paste them in your banking app.\nClick on the OK button to continue");
  }