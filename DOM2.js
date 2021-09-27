const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];

//document.body.children[2].firstElementChild.style.backgroundColor = 'green'; //this has been overridden by the for loop
// console.log(h1);

//loop for children of an element
for(Element of ul.children){
    Element.style.backgroundColor = 'pink';
}

document.body.children[2].lastElementChild.style.backgroundColor = 'fuchsia';
