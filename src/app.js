export class App {

    configureRouter(config, router) {
        this.router = router;

        config.title = "Aurelia Lab";
        config.map([
            {route:["", "home"], moduleId:"home", name:"home", nav:true, title:"Home"},
            {route:"bindingdemo", moduleId:"binding-demo", name:"bindingDemo", nav:false, title:"Binding", subtitle:"DEMO!"}
        ]);
    }
}
