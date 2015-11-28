export class BindingDemo{
    constructor() {
        this.title = "Binding Demo";
        this.message = "This is the Binding Demo page.";
        this.firstName = "John";
        this.lastName = "Smith";
        this.isActive = true;
        this.favoriteNumber;
        this.favoriteNumbers;
        this.favoriteColor
        this.favoriteColors
        this.secondFavoriteNumbers = [];
        this.secondFavoriteColors = [];
        this.gottcha = 5;
        this.demoDate = new Date();
    }
        
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get isGottchaIsANumber() {
        return (typeof this.gottcha === 'number');
    }

    toggleActive() {       
        this.isActive = !this.isActive;
    }

    activate() {
        this.numbers = ["One", "Two", "Three", "Four", "Five"];               

        this.colors = [
            {name:"Red", value:"#ff0000"},
            {name:"Green", value:"#00ff00"},
            {name:"Blue", value:"#0000ff"}
        ];       
    }

    
}