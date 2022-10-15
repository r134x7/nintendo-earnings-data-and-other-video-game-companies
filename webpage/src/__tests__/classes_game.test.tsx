export {}

class Field {
    private xPosition: number[] = [0, 1, 2];
    private yPosition: number[] = [0, 1, 2];
    // private currentPositionX: number;
    // private currentPositionY: number;
    
    // constructor(currentPositionX: number, currentPositionY: number) {
    //     this.currentPositionX = currentPositionX;
    //     this.currentPositionY = currentPositionY;
    // }

    get getX() {
        return this.xPosition;
    }

    get getY() {
        return this.yPosition;
    }
}

class X {

    // private moveX: number;
    // private moveY: number;
    private fieldBoundaries: Field;
    private currentPositionX: number;
    private currentPositionY: number;

    constructor(
        // moveX: number,
        // moveY: number,
        fieldBoundaries: Field,
        currentPositionX: number,
        currentPositionY: number,
    ) {
        // this.moveX = moveX;
        // this.moveY = moveY;
        this.currentPositionX = currentPositionX;
        this.currentPositionY = currentPositionY;
        this.fieldBoundaries = fieldBoundaries;
    }

    get getCurrentPositionX() {
        return this.currentPositionX
    }

    get getCurrentPositionY() {
        return this.currentPositionY
    }

    set setCurrentPositionX(x: number) {
        this.currentPositionX = x;
    }

    set setCurrrentPositionY(y: number) {
        this.currentPositionY = y;
    }

    get getFieldBoundaries() {
        return this.fieldBoundaries
    }
}

test("make field and get...", () => {

        // const field = new Field(0,2);
        const field = new Field();
        console.log(field.getX);
        console.log(field.getY);
        // console.log(field.getCurrentPositionX);
        // console.log(field.getCurrentPositionY);
        
})

test("make X, set and get", () => {

    const field = new Field();
    const person = new X(field, 10, 10);
    console.log(person.getCurrentPositionX);
    console.log(person.getCurrentPositionY);
    console.log(person.setCurrentPositionX = 20);
    console.log(person.getCurrentPositionX);
    console.log(person.setCurrrentPositionY = 0);
    console.log(person.getCurrentPositionY);
    console.log(person.getFieldBoundaries.getX);
    console.log(person.getFieldBoundaries.getY);
    console.log(person.getFieldBoundaries);
})
