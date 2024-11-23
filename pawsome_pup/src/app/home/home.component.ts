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
  selectedBreed = 'My Pyreneese!';
  dogImage = 'https://lh3.googleusercontent.com/pw/AP1GczNfJ5nGSx3ykF5mfvWft0sNc8It_YtL8DWQ4OV8mee5IFrcV51Lc7c0q9Vu7xEtxlUn_OD3TcURQB5zBKKDBEEo12zz3dCFolKRSMPR4N4whSZQnZY-OjsLztfu5aE8tyuIoOGZ6sIKnNj-iqzHXcnlww=w471-h839-s-no';
  

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
