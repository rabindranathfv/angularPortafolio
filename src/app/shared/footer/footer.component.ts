import { Component, OnInit } from '@angular/core';
import { infoPageInterface } from '../../interfaces/infoPage.interface';
import { InfoPageService } from '../../services/info-page.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor( public infoPageInterface: InfoPageService ) { }

  ngOnInit() {
  }

}
