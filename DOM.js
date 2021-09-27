//DOCUMENT OBJECT MODELLING (DOM)

//METHODS OF ACCESSING HTML ELEMENTS VIA JS

//1. Using ID's
const demoID = document.getElementById("demo");
// console.log(demoID); this outputs the whole HTML element

//assigning css styles through js.
demoID.style.border = '2px solid purple';
demoID.style.backgroundColor = 'pink';

//2. Using ClassNames
const demo_class = document.getElementsByClassName('demo');
/* console.log(demo_class);
   demo_class[0].style.border = '4px solid orange';
   demo_class[1].style.border = '4px solid orange';*/

//using a loop to apply css styling
for (i=0; i<demo_class.length; i++){
    demo_class[i].style.border = '4px solid orange';
    demo_class[i].style.backgroundColor = 'moccasin';
}

//3. Using Tags
const demo_tag = document.getElementsByTagName('article');

for(j=0; j<demo_tag.length; j++){
    demo_tag[j].style.border = '4px dotted green';
    demo_tag[j].style.backgroundColor = 'lightgreen';
}

//4. Using Query selectors
const demoQ = document.querySelector('#demo-query');
demoQ.style.border = '4px dotted red';
demoQ.style.backgroundColor = 'coral';

//5. Using Query-all selectors
const demoQA = document.querySelectorAll('.demo-query-all');

for(m=0; m<demoQA.length; m++){
    demoQA[m].style.border = "4px solid blue";
    demoQA[m].style.backgroundColor = 'lightblue';
}