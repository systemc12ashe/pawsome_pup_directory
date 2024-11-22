import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
    dogBreeds: string[] = [];
    selectedBreed = "Pyrenees";
    dogImage = "https://images.dog.ceo/breeds/pyrenees/n02111500_8884.jpg";

    constructor(public dataService: DataService) { }

    ngOnInit() {
      this.dogBreeds = this.dataService.getBreedList();    
      console.log(this.dogBreeds);
    }

    getDogImage(){
      return this.dogImage;
    }
    
    public async selectBreed(breed: string){
      this.selectedBreed = breed;
        this.dogImage = await DataService.getRandomImage(breed)
      
      // console.log(this.dogImage)
    }
}
