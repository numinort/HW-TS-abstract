class Car {
    constructor(name, countryBrand) {
        this.name = name;
        this.countryBrand = countryBrand;
    }
}
class Mini extends Car {
    constructor(modelName) {
        super('Mini', 'Great Britain');
        this.modelName = modelName;
    }
    getInfo() {
        console.log(this.createInfo());
    }
    createInfo() {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`;
    }
}
class RollsRoyce extends Car {
    constructor(modelName) {
        super('RollsRoyce', 'Great Britain');
        this.modelName = modelName;
    }
    createInfo() {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`;
    }
    getInfo() {
        console.log(this.createInfo());
    }
}
class Bmw extends Car {
    constructor(modelName) {
        super('BMW', 'Germany');
        this.modelName = modelName;
    }
    createInfo() {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`;
    }
    getInfo() {
        console.log(this.createInfo());
    }
}
const x5 = new Bmw('x5');
const x7 = new Bmw('x7');
const cooper = new Mini('cooper');
const country = new Mini('country man');
const phantom = new RollsRoyce('Phantom V');
const shadow = new RollsRoyce('Silver Shadow');
x5.getInfo();
x7.getInfo();
cooper.getInfo();
country.getInfo();
phantom.getInfo();
shadow.getInfo();
//# sourceMappingURL=app.js.map