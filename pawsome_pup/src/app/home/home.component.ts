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
  selectedBreed = 'Pyrenees';
  dogImage = 'https://images.dog.ceo/breeds/pyrenees/n02111500_8884.jpg';

  constructor(public dataService: DataService) {}

  // Initializes list for dropdown selection
  ngOnInit() {
    this.dogBreeds = this.dataService.getBreedList();
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
}
