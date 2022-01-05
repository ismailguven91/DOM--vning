const firstH2 = document.querySelector("h2");
console.log(firstH2);

const allH2 = document.querySelectorAll("h2");
console.log(allH2);

//allH2[0].style.backgroundColor = "hotpink";

//Nedan funkar inte, går inte att ändra om man inte loopar igenom listan
//allH2.style.backgroundColor="green";


const btn = document.querySelectorAll('button');
//btn.remove();
console.log(btn);

//ÖVNINGSUPPGIFTER
//Byt namn på första hoodien från Ash till Potato.
const h3 = document.querySelector("h3");
console.log(h3);
h3.innerText = "Potato";

//Byt namn på Home till Start
const a = document.querySelectorAll('a');
console.log(a);
a[0].innerText = "Start";

//Byt namn på Contact till Mail Us.
a[2].innerText = "Mail Us";

//Byt ut informationen om Sinus Hoodie - Fire.
const p = document.querySelectorAll('p');
console.log(p);
p[1].innerText = "Byt innehåll - DONE"

//Byt ut adressen i footern.
p[3].innerText = "Byt adressen - DONE"

//Ändra text på samtliga knappar till add to cart.
btn[0].innerText = "add to cart";
btn[1].innerText = "add to cart";
btn[2].innerText = "add to cart";


//Byt bakgrundsfärg på en knapp.
btn[0].style.background="hotpink";
//btn[1].style.background="hotpink";
//btn[2].style.background="hotpink";

//Byt bakgrundsfärg på 1 av produkterna.
const figuer = document.querySelector("figure");
figuer.style.backgroundColor = "hotpink";

//Byt text-färg på samtliga <p>.
p[0].style.color = "hotpink";
p[1].style.color = "hotpink";
p[2].style.color = "hotpink";
p[3].style.color = "hotpink";

//Lägg till klassen active på menyalternativet home.
const aNav = document.querySelectorAll("a");
console.log(aNav);

element.class









