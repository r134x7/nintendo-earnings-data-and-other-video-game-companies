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

test("make field and get...", () => {

        const field = new Field(0,2);
        console.log(field.getX);
        console.log(field.getY);
        console.log(field.getCurrentPositionX);
        console.log(field.getCurrentPositionY);
        
        

        
})
