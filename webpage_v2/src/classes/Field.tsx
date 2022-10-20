export class Field {
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
