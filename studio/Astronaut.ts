import { Cargo } from './Cargo';
import { Payload } from './Payload';
import { Rockets } from './Rockets';

export class Astronaut implements Payload {
    massKg : number;
    name : string;
    constructor(massKg: number, name: string){
    this.massKg = massKg;
    this.name = name;
    }
}