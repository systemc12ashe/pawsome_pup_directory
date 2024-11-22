import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
    dogBreeds: string[] = [];
    selectedBreed!: String;
    dogImage = "Beagle";

    constructor(public dataService: DataService) { }

    ngOnInit() {
      this.dogBreeds = this.dataService.getBreedList();    
      console.log(this.dogBreeds);
    }
    
    public selectBreed(breed: String){
      this.selectedBreed = breed; 
      // this.dataService.getRandomImage(breed)
      // this.dogImage = this.dataService.getRandomImage(breed)
      console.log(this.dogImage)
    }
}
