import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
let baseUrl = "http://simple-contact-api.azurewebsites.net/api/contacts";


@inject(HttpClient)
export class ContactData {
    
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getAllContacts() {
        return this.httpClient.get(baseUrl)
                    .then(response => {
                        return response.content;
                    });
    }

    getContact(id) {
        return this.httpClient.get(baseUrl + "/" + id)
                    .then(response => {
                        return response.content;
                    });
    }

    addContact(contact) {
        var request = this.httpClient.createRequest();
        request.asPost()
               .withUrl(baseUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(contact);

        return request.send().then(response=>response.content);
    }

    updateContact(contact) {
        var request = this.httpClient.createRequest();
        request.asPut()
               .withUrl(baseUrl)
               .withHeader("Accept", "application/json")
               .withHeader("Content-Type", "application/json")
               .withContent(contact);

        return request.send().then(response=>response.content);
    }

    deleteContact(id) {
        return this.httpClient.delete(baseUrl + "/" + id)
                    .then(response => response.isSuccess);
    }
}