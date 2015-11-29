export class App {

    configureRouter(config, router) {
        this.router = router;

        config.title = "Aurelia Lab";
        config.map([
            {route:["", "home"], moduleId:"home", name:"home", nav:true, title:"Home"},
            {route:"bindingdemo", moduleId:"binding-demo", name:"bindingDemo", nav:true, title:"Binding Demo"},
            {route: "contacts", moduleId:"contacts/contact-list", name:"contacts", nav:true, title:"Contacts"},
            {route: "contacts/details/:id", moduleId:"contacts/contact-details", name:"contactDetails"},
            {route: "contacts/edit/:id", moduleId:"contacts/contact-edit", name:"contactEdit"},
            {route: "contacts/new", moduleId:"contacts/contact-new", name:"contactNew"}
        ]);
    }
}
