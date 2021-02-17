// // Create element
// document.createElement;

// // Replace Child with new html
// parentElement.replaceChild(newChild, oldChild);

// // Remove elements
// list = document.querySelector('ul');
// listItem = document.querySelectorAll('li');

// list.removeChild(listItem[2]);
// listItem[0].remove();

// // On Click
// document.querySelector('.button').addEventListener('click', myFunc);

// function myFunc(e) {
//     console.log('Clicked');

//     //  Get class name of clicked element
//     let = clickedItem;
//     // Single class name
//     clickedItem = e.target.className;
//     // Collection of classes
//     clickedItem = e.target.classList;

// }

// // Check if class exist

// if (e.target.parentElement.classList.contains('className')) {
//     console.log('Class exist');
// }

// // Remove an element on click

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // If clicked items parent has className
//     if (e.target.parentElement.classList.contains('className')) {
//         //  Do something
//         console.log(' Item Removed ');
//     }

//     // Remove item with class name
//     if (e.target.className === "someClass") {
//         this.remove();
//     }
// }

let name = ['Vinay', 'Mike', 'Yigit']
console.log(`Total: ${name.length} \n${name}`);


name.pop()
name.push('victor')
console.log(`Total: ${name.length} \n${name}`);



// Adding a + sign infront of this.value will convert the string to Number.