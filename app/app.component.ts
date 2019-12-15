import { Component} from '@angular/core';
import { localmodelAPI } from './services/localmodelAPI.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _localmodelAPI: localmodelAPI){

  }
  // lstcomments:Comments[];
  // ngOnInit() {
  //   this._localmodelAPI.getComments()
  //   .subscribe(
  //     data=>
  //     {
  //       this.lstcomments=data;
  //     }
  //   )
  // }
}
