export class App {

    configureRouter(config, router) {
        this.router = router;

        config.title = "Aurelia Lab";
        config.map([
            {route:["", "home"], moduleId:"home", name:"home", nav:true, title:"Home"}
        ]);
    }
}
