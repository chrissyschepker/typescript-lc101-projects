import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket {
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] = [];
    astronauts : Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //a
    sumMass( items: Payload[] ): number{
        let itemMass: number =0;
        for(let i = 0; i < items.length; i++){
        itemMass += items[i].massKg;
        }
        return itemMass;
    }
    //b
    currentMassKg():number {
        let mass : number = 0;
        mass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return mass;
    }
    //c
    canAdd(item: Payload): boolean{
        if(this.currentMassKg()+ item.massKg <= this.totalCapacityKg){
        return true;
        } else {
        return false;
        }
    }

    //d
    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)=== true){
        this.cargoItems.push(cargo);
        return true;
        } else {
        return false;
        }
    }

    //e
    addAstronaut(astronaut:Astronaut):boolean {
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}