/********************************
 * QUESTION 1.
 *******************************/
function executeQ1() {
  // Answer goes here.
  //obtengo el elemento span con id #my-name
  const my_name = document.querySelector('#my-name');

  //Le inserto texto con mi nombre
  my_name.innerHTML = 'Joel Gomez';
}

/********************************
 * QUESTION 2.
 *******************************/
var listItems = [
  'Settings',
  'Customer Support',
  'On Demand',
  'Search',
  'Widgets'
];

function executeQ2() {
  // Answer goes here.
  //obtengo el elemento OL con id #q2-list
  const q2_list = document.querySelector('#q2-list');

  //recorro el arreglo
  const arrayItems = listItems.map(item => {

    //creo un nodo html LI 
    let createLi = document.createElement('li');

    //le inserto el contenido del arreglo
    createLi.innerHTML = item;

    //por ultimo lo inserto al elemnto OL
    return q2_list.appendChild(createLi);
    
  });

}

/********************************
 * QUESTION 3.
 *******************************/
function Person() {
  var name = '';

  this.setName = function (n) {
    name = n;
  };

  this.getName = function () {
    return name;
  }
}

function executeQ3() {
  // creo dos instancias de la clase Person
  const personOne = new Person();
  const personTwo = new Person();

  //obtengo el elemento UL con id #q3-list
  const q3_list = document.querySelector('#q3-list');

  //les agrego el nombre a las personas
  personOne.setName('Scott');
  personTwo.setName('Matt');

  //los muestro en UL#q3-list 
  q3_list.innerHTML = `
    <li>${personOne.getName()}</li>
    <li>${personTwo.getName()}</li>
  `;


}

/********************************
 * QUESTION 4.
 *******************************/
async function executeQ4() {
  // Answer goes here.

  //obtengo el elemento DIV con id #q4-answer
  let q4_answer = document.querySelector('#q4-answer');
  //Hago una peticion get a la api
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  //obtengo un arreglos con informacion de personas
  const persons = await data.json();

  //recorro el array e inserto el nombre de las persona en el DIV#q4-answer
  persons.map(person => q4_answer.innerHTML += `<li>${person.name}</li>`);

}

