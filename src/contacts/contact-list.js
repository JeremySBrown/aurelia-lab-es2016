import {inject} from 'aurelia-framework';
import {ContactData} from '../services/contactData';

@inject(ContactData)
export class ContactList {

    constructor(contactData) {
        this.data = contactData;        
        this.title = "Contact - List";
        this.message = "This is the Contacts page in list format.";

        this.contacts = [];
    }

    activate() {

        // Will not render the page until this promise is returned.
        return this.data
                .getAllContacts()
                .then(contacts => this.contacts = contacts);
    }
}