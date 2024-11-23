import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// Main Content Component for PawsomePup
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  dogBreeds: string[] = [];
  prettyNames: string[] = [];

  // Default values
  selectedBreed = 'pyrenees';
  dogImage = 'https://images.dog.ceo/breeds/pyrenees/n02111500_8884.jpg';
  

  constructor(public dataService: DataService) {}

  // Initializes list for dropdown selection
  ngOnInit() {
    this.dogBreeds = this.dataService.getBreedList();
    // this.prettyNames = this.dataService.getPrettyBreedList();
    
  }

  // Dog Image Getter
  getDogImage() {
    return this.dogImage;
  }

  // Dog Setter
  public async selectBreed(breed: string) {
    this.selectedBreed = breed;

    this.dogImage = await DataService.getRandomImage(breed);
  }

  public prettify(word: string){
    var lowercase = word.split(" ")
    if(lowercase.length == 1){
      return (`${lowercase[0][0].toUpperCase() + lowercase[0].slice(1)}`);
    } else {
      return (`${lowercase[0][0].toUpperCase() + lowercase[0].slice(1)} ${lowercase[1][0].toUpperCase()+lowercase[1].slice(1)}`);
    }
  }
}
