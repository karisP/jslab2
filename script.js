"use strict";

//class Address Book
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    //Methods
    add(info) {
        this.contacts.push(info);       // Adds contact info to array
    }
    deleteAt(index) {
        this.contacts.splice(index, 1); // Deletes desired contact from array
    }
    display(contacts){
        const container = document.querySelector(".dom-container");                     //Selected the bottom of the page container
        container.innerHTML = "";                                                       //clears the page
        for (let contact of contacts) {                                                 //loops through the array and creates a container for the information
            let div = document.createElement("div");
            div.innerHTML = ` <div class = "style"> Name: ${contact.name} <br> Email: ${contact.email} <br> Phone: ${contact.phone} <br> Relation: ${contact.relation}</div> `;
            container.appendChild(div);
        }
    
    };

}
//class Contact
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook(); //creates an instance of AddressBook();


//Create an event for the delete btn
// document.querySelector("#delete-btn")
//     .addEventListener("click", () => {
//  
//         addressBook.deleteAt(index);
//         addressBook.display(addressBook.contacts);
//     });


//Create an event for the add btn
document.querySelector("#add-btn")
    .addEventListener("click", () => {
        const inputs = document.querySelectorAll(".item-input");
        let name = inputs[0].value;
        let email = inputs[1].value;
        let phone = inputs[2].value;
        let relation = inputs[3].value;
        let info = new Contact(name, email, phone, relation);
        addressBook.add(info);
        addressBook.display(addressBook.contacts);
    });




