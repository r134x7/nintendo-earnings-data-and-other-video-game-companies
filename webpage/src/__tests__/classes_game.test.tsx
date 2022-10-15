export {}

class Field {
    private xPosition: number[] = [0, 1, 2];
    private yPosition: number[] = [0, 1, 2];
    private currentPositionX: number;
    private currentPositionY: number;
    
    constructor(currentPositionX: number, currentPositionY: number) {
        this.currentPositionX = currentPositionX;
        this.currentPositionY = currentPositionY;
    }

    get getX() {
        return this.xPosition;
    }

    get getY() {
        return this.yPosition;
    }

    get getCurrentPositionX() {
        return this.currentPositionX;
    }

    get getCurrentPositionY() {
        return this.currentPositionY;
    }
}

class X {

    // private moveX: number;
    // private moveY: number;
    private currentPositionX: number;
    private currentPositionY: number;

    constructor(
        // moveX: number,
        // moveY: number,
        currentPositionX: number,
        currentPositionY: number,
    ) {
        // this.moveX = moveX;
        // this.moveY = moveY;
        this.currentPositionX = currentPositionX;
        this.currentPositionY = currentPositionY;
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
}

test("make field and get...", () => {

        const field = new Field(0,2);
        console.log(field.getX);
        console.log(field.getY);
        console.log(field.getCurrentPositionX);
        console.log(field.getCurrentPositionY);
        
})

test("make X, set and get", () => {

    const person = new X(99, 324);
    console.log(person.getCurrentPositionX);
    console.log(person.getCurrentPositionY);
    console.log(person.setCurrentPositionX = 20);
    console.log(person.getCurrentPositionX);
    console.log(person.setCurrrentPositionY = 0);
    console.log(person.getCurrentPositionY);
})
