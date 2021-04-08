import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Rockets } from './Rockets';

export class Cargo implements Payload {
    massKg : number;
    material : string;

    constructor(massKg: number, material: string){
    this.massKg = massKg;
    this.material = material;
    }
}