/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  // The function takes an array as its only argument */

  function addChild(parent, child) {
    return parent.appendChild(child);
  }

  function select(selector) {
    return document.querySelector(selector)
  }

  const makeMenu = (data) => {

    function elementMaker(element){
      return document.createElement(element);
    }

    function addChild(parent, child) {
      return parent.appendChild(child);
    }

    function select(selector) {
      return document.querySelector(selector)
    }

    function addClass(location, name) {
      return location.classList.add(name)
    }

    const menuBox = elementMaker('div');
    console.log(menuBox)
    const list = elementMaker('ul')
    console.log(list)

    addChild(menuBox,list);

     /*Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/

    data.forEach(element => {
      const items = elementMaker('li');
      items.textContent = element;
      addChild(list, items);
    });
//   Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

    const hamburger = select('.menu-button')

    //   Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

    addClass(menuBox, 'menu');
    
    
    hamburger.addEventListener('click', event => { menuBox.classList.toggle('menu--open')
    console.log('is the hamburger yummy?')
  });
  
  //   Step 5: return the menu component.

  return menuBox;

  }

//   Step 6: add the menu component to the DOM.
  
// */

const header = select('.header');

header.appendChild(makeMenu(menuItems));