import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {ContactData} from '../services/contactData';

@inject(ContactData, Router)
export class ContactNew {
    constructor(contactData, router) {
        this.data = contactData;
        this.router = router;
    }       

    saveContact() {
        this.data.addContact(this.contact).then(contact=>{
            var url = this.router.generate("contacts");
            this.router.navigate(url);
        });
    }    
}