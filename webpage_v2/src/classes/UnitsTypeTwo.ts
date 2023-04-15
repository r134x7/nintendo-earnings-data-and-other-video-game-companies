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

    jumpAction(height: number, up: number, down: number): void {

            if (down === 0) {
                return
            } else if (up !== height) {
                    if (this.getY() < 11) {
                        this.setYUp();
                    }

                setTimeout(() => {
                    this.jumpAction(height, up + 1, down)
                }, 100);
            } else {
                    if (this.getY() > 0) {
                        this.setYDown();
                    }
                setTimeout(() => {
                    this.jumpAction(height, up, down -1)
                }, 200);
            }
    }
    
}