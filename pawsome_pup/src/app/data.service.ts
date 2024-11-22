import { Injectable } from '@angular/core';
import { stdout } from 'process';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getBreedList() {
    const breedList: string[] = [];
    var url = 'https://dog.ceo/api/breeds/list/all';
    fetch(url, {
      method: 'GET',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // console.log('parsed json', json["message"])
        for (const key in json['message']) {
          if (json['message'][key].length == 0) {
            // console.log(`${key}`)
            var name = `${key}`.charAt(0).toUpperCase() + `${key}`.slice(1);
            name[0].toUpperCase();
            breedList.push(name);
          } else {
            for (var i in json['message'][key]) {
              var nameOne = `${json['message'][key][i]}`.charAt(0).toUpperCase() + `${json['message'][key][i]}`.slice(1);
              var nameTwo = `${key}`.charAt(0).toUpperCase() + `${key}`.slice(1);
              nameTwo[0].toUpperCase();
              // console.log(`${json["message"][key][i]} ${key}`)
              breedList.push(`${nameOne} ${nameTwo}`);
            }
          }
        }
        breedList.sort();
        return breedList;
      })
      .catch(function (ex) {
        console.log('parsing failed', ex);
      });
    breedList.sort();
    console.log(breedList);

    return breedList;
  }

  public static async getRandomImage(breed: String) {
    var splitStr = breed.split(' ');
    if (splitStr.length == 1) {
      var url = `https://dog.ceo/api/breed/${breed}/images/random`;
    } else {
      var url = `https://dog.ceo/api/breed/${splitStr[1]}/${splitStr[0]}/images/random`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data['message'];
    } catch (error) {
      return error;
    }
  }
}
