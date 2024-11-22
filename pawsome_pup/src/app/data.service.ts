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
            breedList.push(`${key}`);
          } else {
            for (var i in json['message'][key]) {
              // console.log(`${json["message"][key][i]} ${key}`)
              breedList.push(`${json['message'][key][i]} ${key}`);
            }
          }
        }
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
    // Dog API uses primary names and secondary names. If there is no secondary name, use just primary. Otherwise, the format is /primaryName/secondaryName
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
      return 'https://ih1.redbubble.net/image.4843210264.2123/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg';
    }
  }
}
