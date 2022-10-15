export {}

class Field {
    // private xPosition: number[] = [0, 1, 2];
    // private yPosition: number[] = [0, 1, 2];
    // private currentPositionX: number;
    // private currentPositionY: number;
    
    private xLength: number;
    private yLength: number;

    constructor(xLength: number, yLength: number) {
        this.xLength = xLength;
        this.yLength = yLength;
    }

    get getX() {
        return this.xLength;
    }

    get getY() {
        return this.yLength;
    }
}

class X {
    // private moveX: number;
    // private moveY: number;
    private fieldBoundaries: Field;
    private currentPositionX: number;
    private currentPositionY: number;
    private hitPoints: number;
    private attackPoints: number;

    constructor(
        // moveX: number,
        // moveY: number,
        fieldBoundaries: Field,
        currentPositionX: number,
        currentPositionY: number,
        hitPoints: number,
        attackPoints: number,
    ) {
        // this.moveX = moveX;
        // this.moveY = moveY;
        this.fieldBoundaries = fieldBoundaries;
        this.currentPositionX = currentPositionX;
        this.currentPositionY = currentPositionY;
        this.hitPoints = hitPoints;
        this.attackPoints = attackPoints;
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

    get getHitPoints() {
        return this.hitPoints
    }

    get getAttackPoints() {
        return this.attackPoints
    }

    incrementPositionYPlus() {
        return (this.getCurrentPositionY < this.fieldBoundaries.getY) 
                ? this.currentPositionY++
                : this.currentPositionY
    }

    incrementPositionYMinus() {
        return (this.getCurrentPositionY > 0)
                ? this.currentPositionY--
                : this.currentPositionY
    }

    incrementPositionXPlus() {
        return (this.getCurrentPositionX < this.fieldBoundaries.getX) 
                ? this.currentPositionX++
                : this.currentPositionX
    }

    incrementPositionXMinus() {
        return (this.getCurrentPositionX > 0)
                ? this.currentPositionX--
                : this.currentPositionX
    }

    attackOpponent(opponent: X) {
        return (
            (this.getCurrentPositionX && this.getCurrentPositionY) ===
            (opponent.getCurrentPositionX && opponent.getCurrentPositionY)
        ) 
                ? opponent.hitPoints -= this.attackPoints
                : console.log("You're not in range...");
                
    }

    moveAttackPlusY(opponent: X) {
        this.incrementPositionYPlus();
        this.attackOpponent(opponent);

        return (opponent.hitPoints === 0)
                ? console.log("Not done yet...")
                : this.incrementPositionYMinus();
    }
}

test("make field and get...", () => {

        const field = new Field(0,2);
        // const field = new Field();
        // console.log(field.getX);
        // console.log(field.getY);
        // console.log(field.getCurrentPositionX);
        // console.log(field.getCurrentPositionY);
        
})

test("make X, set and get", () => {

    const field = new Field(2,2);
    const person = new X(field, field.getX, field.getY, 100, 10);
    // console.log(person.getCurrentPositionX);
    // console.log(person.getCurrentPositionY);
    // console.log(person.setCurrentPositionX = 20);
    // console.log(person.getCurrentPositionX);
    // console.log(person.setCurrrentPositionY = 0);
    // console.log(person.getCurrentPositionY);
    // console.log(person.getFieldBoundaries.getX);
    // console.log(person.getFieldBoundaries.getY);
    // console.log(person.getFieldBoundaries);
})

test("make X move only within its field", () => {

    const field = new Field(1,1);
    const person = new X(field, field.getX,field.getY, 100, 10);
    const personTwo = new X(field, 0, 0, 100, 10);

    // console.log(person.incrementPositionYPlus())
    // console.log(personTwo.incrementPositionYPlus())
    // console.log(personTwo.getCurrentPositionY);
    // console.log(personTwo.incrementPositionYPlus())
    // console.log(personTwo.getCurrentPositionY);
    // console.log(personTwo.incrementPositionYMinus());
    // console.log(personTwo.getCurrentPositionY);
    
    

    // need to set boundaries so that person only moves to 0 or 1

})

test("personOne fights personTwo but not in range", () => {

    const field = new Field(1,1);
    const person = new X(field, field.getX, field.getY, 100, 10);
    const personTwo = new X(field, 0, 0, 100, 10);

    person.attackOpponent(personTwo);
    person.attackOpponent(personTwo);
    person.attackOpponent(personTwo);
    person.attackOpponent(personTwo);
    person.attackOpponent(personTwo);

    const x = personTwo.getHitPoints;

    expect(x).toBe(100);
})

test("personOne has to get in range of personTwo to fight", () => {

    const field = new Field(1,1);
    const personOne = new X(field, 0, 0, 100, 10);
    const personTwo = new X(field, field.getX,field.getY, 100, 10);

    personOne.incrementPositionYPlus();
    personOne.attackOpponent(personTwo);
    
    personOne.incrementPositionXPlus();
    personOne.attackOpponent(personTwo);

    const x = personTwo.getHitPoints;

    expect(x).toBe(90);

})

test("moving automatically leads to attack and changing position on condition", () => {

    const field = new Field(1,1);
    const personOne = new X(field, 0, 0, 100, 10);
    const personTwo = new X(field, field.getX,field.getY, 100, 10);

    personOne.incrementPositionXPlus();
    personOne.attackOpponent(personTwo);
    
    personOne.moveAttackPlusY(personTwo);

    const x = personTwo.getHitPoints;
    const yPosition = personOne.getCurrentPositionY;

    expect(x).toBe(90);
    expect(yPosition).toBe(0);
})