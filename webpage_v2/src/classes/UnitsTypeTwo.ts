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

    setName(value: string): string {
        return this.name = value; 
    }

    getBody(): string {
        return this.body;
    }

    setBody(value: string): string {
        return this.body = value;
    }

    getHp(): number {
        return this.hp;
    }

    setHp(value: number) {
        return this.hp = value;
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

    jumpAction(height: number, up: number, down: number, stageFloor: number, stageCeiling: number, upDelayMilliseconds: number, downDelayMilliseconds: number): void {

            if (down === stageFloor) {
                return 
            } else if (up !== height) {
                    if (this.getY() < stageCeiling) {
                        this.setYUp();
                    }

                setTimeout(() => {
                    this.jumpAction(height, up + 1, down, stageFloor, stageCeiling, upDelayMilliseconds, downDelayMilliseconds)
                }, upDelayMilliseconds);
            } else {
                    if (this.getY() > stageFloor) {
                        this.setYDown();
                    }
                setTimeout(() => {
                    this.jumpAction(height, up, down -1, stageFloor, stageCeiling, upDelayMilliseconds, downDelayMilliseconds)
                }, downDelayMilliseconds);
            }
    }
    
}