import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {ContactData} from '../services/contactData';

@inject(ContactData, Router)
export class ContactEdit {
    constructor(contactData, router) {
        this.data = contactData;
        this.router = router;
    }

    activate(params) {
       return this.data.getContact(params.id)
                .then(contact => this.contact = contact);
    }

    saveContact() {
        this.data.updateContact(this.contact).then(contact=>{
            var url = this.router.generate("contacts");
            this.router.navigate(url);
        });
    }

    deleteContact() {
        if (confirm('Are you sure?')) {
            this.data.deleteContact(this.contact.id).then(status=>{
                var url = this.router.generate("contacts");
                this.router.navigate(url);
            });
        }
    }
}