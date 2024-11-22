import { Injectable } from '@angular/core';
import { stdout } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
  }

  

  public getBreedList(){
    const breedList: string[] = [];
    var url = "https://dog.ceo/api/breeds/list/all"
    fetch('https://dog.ceo/api/breeds/list/all', {
      method: 'GET'
    })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      // console.log('parsed json', json["message"])
      for (const key in json["message"]) {
        if ((json["message"][key]).length == 0){
          // console.log(`${key}`)
          breedList.push(`${key}`)
        } else {
          for (var i in (json["message"][key])){
            // console.log(`${json["message"][key][i]} ${key}`)
            breedList.push(`${json["message"][key][i]} ${key}`)
          }
        }
        
      }
      console.log(breedList)
          return breedList
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
    console.log(breedList)
    return breedList
  }

  public getRandomImage(breed:String){
    
  }
}