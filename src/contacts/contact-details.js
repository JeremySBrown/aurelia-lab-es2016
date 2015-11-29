import {inject} from 'aurelia-framework';
import {ContactData} from '../services/contactData';

@inject(ContactData)
export class ContactDetails {
    constructor(contactData) {
        this.data = contactData;
    }

    activate(params) {
        return this.data.getContact(params.id)
                .then(contact => this.contact = contact);
    }    
}