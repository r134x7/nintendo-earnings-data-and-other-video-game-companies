import { Field } from "./Field";

export class Unit {
    private fieldBoundaries: Field;
    private currentPositionX: number;
    private currentPositionY: number;
    private hitPoints: number;
    private attackPoints: number;

    constructor(
        fieldBoundaries: Field,
        currentPositionX: number,
        currentPositionY: number,
        hitPoints: number,
        attackPoints: number,
    ) {
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

    attackOpponent(opponent: Unit) {
        return (
            (this.getCurrentPositionX && this.getCurrentPositionY) ===
            (opponent.getCurrentPositionX && opponent.getCurrentPositionY)
        ) 
                ? opponent.hitPoints -= this.attackPoints
                : console.log("You're not in range...");
                
    }

    moveAttackPlusY(opponent: Unit) {
        this.incrementPositionYPlus();
        this.attackOpponent(opponent);

        return (opponent.hitPoints === 0)
                ? console.log("Not done yet...")
                : this.incrementPositionYMinus();
    }

    moveAttackMinusY(opponent: Unit) {
        this.incrementPositionYMinus();
        this.attackOpponent(opponent);

        return (opponent.hitPoints === 0)
                ? console.log("Not done yet...")
                : this.incrementPositionYPlus();
    }

    moveAttackPlusX(opponent: Unit) {
        this.incrementPositionXPlus();
        this.attackOpponent(opponent);

        return (opponent.hitPoints === 0)
                ? console.log("Not done yet...")
                : this.incrementPositionXMinus();
    }

    moveAttackMinusX(opponent: Unit) {
        this.incrementPositionXMinus();
        this.attackOpponent(opponent);

        return (opponent.hitPoints === 0)
                ? console.log("Not done yet...")
                : this.incrementPositionXPlus();
    }

}