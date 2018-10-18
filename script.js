"use strict";

//class Address Book
class AddressBook{
    constructor(){
        this.contacts = [];
    }
    //Methods
    add(info){
        this.contacts.push(info);       // Adds contact info to array
    }
    deleteAt(index){
        this.contacts.splice(index, 1); // Deletes desired contact from array
    }
    print(){
        console.log(this.contacts);     // Prints all contacts
    }
}
//class Contact
class Contact{
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook(); //creates an instance of AddressBook();
while(true){
    let choice = prompt("Would you like to add, delete, print, or quit");
    if(choice === "add"){                                            
        let name = prompt("Enter a name");
        let email = prompt("Enter an email");
        let phone = prompt("Enter a phone number");                      //loops the user through inputting their contact information
        let relation = prompt("Enter your relation to the contact");
        let info = new Contact(name, email, phone, relation);
        addressBook.add(info);
    }else if(choice==="delete"){
        let index = prompt("What index do you want to delete?");
        addressBook.deleteAt(index);
    }else if(choice ==="print"){
        addressBook.print();
    }
    else if (choice==="quit"){
        break;
    }

}