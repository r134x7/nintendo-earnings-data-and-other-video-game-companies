export class UnitTypeTwo {

    private name: string;
    private body: string;
    private xPosition: number;
    private yPosition: number;
    private hp: number;
    private attack: number;

    constructor(
     name: string,
     body: string,
     xPosition: number,
     yPosition: number,
     hp: number,
     attack: number,
    ) {
        this.name = name;
        this.attack = attack;
        this.body = body;
        this.hp = hp;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    getName(): string {
        return this.name;
    }

    getBody(): string {
        return this.body;
    }

    getHp(): number {
        return this.hp;
    }

    getX(): number {
        return this.xPosition;
    }

    setXRight(): number {
        // have to set like this or see setXLeft for increment;
        return this.xPosition = this.xPosition + 1;
    }

    setXLeft(): number {
        return this.xPosition--;
    }

    getY(): number {
        return this.yPosition;
    }

    setYUp(): number {
        return this.yPosition++;
    }

    setYDown(): number {
        return this.yPosition--;
    }

    attackOpponent(opponent: UnitTypeTwo) {
        return opponent.hp -= this.attack;
    }
    
}