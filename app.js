data = [];

// fetches the data and stores in data array
const add = function (data) {
    fetch("http://demo2916921.mockable.io/tasks")
        .then(res => res.json())
        .then(res => {data = res.todo })
        .then(res => append(data)) // calls the append function and passes the todo array
};

// function called on loading the page
window.onload = () => {
    add(data);
};

const listAdd = function () {
    // gets the text value form the the input field
    let val = document.getElementById("text").value;

    // calls create element to create new task and pass the input value
    create_element(val);
};

const append = function (data) {
    // traverse through the list element and passes each element to the lambda function
    data.map(x => {
        // for each element in the list, call create element and pass the title to it
        create_element(x.title);
    })
};

const create_element = function (text) {
    // creates an li item for the ul
    let node = document.createElement("li");
    // creates a text node with the value
    let textNode = document.createTextNode(text);
    // creates button for remove
    let button = document.createElement("button");
    // creates button for done
    let strike = document.createElement("button");
    // adds button text
    strike.innerText = "done";
    button.innerText = "remove";
    // adds button onclick function to remove task
    button.addEventListener("click", function(e) {
        // removes the parent node ie the li item
        e.currentTarget.parentNode.remove()
    });

    // adds css style to the parent component when clicked
    strike.addEventListener("click", function(e) {
        e.currentTarget.parentNode.style.setProperty("text-decoration", "line-through")
    });

    // appends text node, and buttons to the li element
    node.appendChild(textNode);
    node.appendChild(button);
    node.appendChild(strike);

    // appends li element to the ul
    document.getElementById("myList").appendChild(node);
}