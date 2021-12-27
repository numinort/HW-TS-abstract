abstract class Car {

    protected name: string;
    protected countryBrand: string;

    protected constructor(name: string, countryBrand: string) {
        this.name = name;
        this.countryBrand = countryBrand;
    }

    abstract getInfo(): void;
}

class Mini extends Car {

    protected modelName: string;

    constructor(modelName: string) {
        super('Mini', 'Great Britain');

        this.modelName = modelName;
    }

    public getInfo(): void {
        console.log(this.createInfo());
    }

    protected createInfo(): string {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`
    }


}

class RollsRoyce extends Car {

    protected modelName: string;

    constructor(modelName: string) {
        super('RollsRoyce', 'Great Britain');

        this.modelName = modelName;
    }

    protected createInfo(): string {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`
    }

    public getInfo(): void {
        console.log(this.createInfo());
    }
}

class Bmw extends Car {

    protected modelName: string;

    constructor(modelName: string) {
        super('BMW', 'Germany');

        this.modelName = modelName;
    }

    protected createInfo(): string {
        return ` Brand Name: ${this.name}, Country brand: ${this.countryBrand}, Model name: ${this.modelName}`
    }

    public getInfo(): void {
        console.log(this.createInfo());
    }
}

const x5 = new Bmw('x5')
const x7 = new Bmw('x7')

const cooper = new Mini('cooper');
const country = new Mini('country man')

const phantom = new RollsRoyce('Phantom V')
const shadow = new RollsRoyce('Silver Shadow')

x5.getInfo()
x7.getInfo()

cooper.getInfo()
country.getInfo()

phantom.getInfo()
shadow.getInfo()
