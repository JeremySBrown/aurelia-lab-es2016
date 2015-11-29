export class BindingDemo{
    constructor() {
        this.header = "Binding Demo";
        this.message = "This is the Binding Demo page.";

        this.firstName = "John";
        this.lastName = "Smith";
        this.isActive = true;

        this.numbers = ["One", "Two", "Three", "Four", "Five"];               

        this.colors = [
            {name:"Red", value:"#ff0000"},
            {name:"Green", value:"#00ff00"},
            {name:"Blue", value:"#0000ff"}
        ]; 
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toggleActive() {       
        this.isActive = !this.isActive;
    }
}