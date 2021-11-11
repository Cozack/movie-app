import {Injectable} from '@angular/core';
import {Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageConvertService {

  constructor() {
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };

    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }
}
