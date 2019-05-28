import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  public cities = [];
  constructor(private con:ContactServiceService) { }

  ngOnInit() {
    this.con.getContacts()
        .subscribe(data => this.cities = data);
  }

}
