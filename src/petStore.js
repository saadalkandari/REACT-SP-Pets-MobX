import petsData from "../src/petsData";
import { makeAutoObservable } from "mobx";

class PetStore {
  pets = petsData;

  constructor() {
    makeAutoObservable(this);
  }

  adopt(id) {
    this.pets = this.pets.filter((pet) => +pet.id !== +id);
  }
}
const petStore = new PetStore();
export default petStore;
