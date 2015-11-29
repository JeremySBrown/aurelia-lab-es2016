import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Validation} from 'aurelia-validation';
import {ContactData} from '../services/contactData';

@inject(ContactData, Router, Validation)
export class ContactEdit {
    constructor(contactData, router, validation) {
        this.data = contactData;
        this.router = router;

        this.validation = validation.on(this)
            .ensure('contact.firstName')
            .hasMinLength(2)
            .isNotEmpty()
            .ensure('contact.lastName')
            .isNotEmpty()
            .hasMaxLength(10)
            .ensure('contact.email')
            .isNotEmpty()
            .isEmail()
            .withMessage('Do you know what is an email address?')
            .ensure('contact.phone')
            .matches(/\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/)
            .withMessage('Not a valid phone number. (###) ###-####');
    }

    activate(params) {
        this.data.getContact(params.id)
                .then(contact => this.contact = contact);
    }

    saveContact() {

        this.validation.validate().then(
            () => {
                this.data.updateContact(this.contact).then(contact=>{
                    var url = this.router.generate("contacts");
                    this.router.navigate(url);
                });
            },error => {
                console.log(error);
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