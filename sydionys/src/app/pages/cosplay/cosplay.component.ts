import { Component, OnInit } from '@angular/core';
import { Cosplay } from 'src/app/models/cosplay.model';
import { CosplayService } from 'src/app/services/cosplay.services';
 

@Component({
  selector: 'app-cosplay',
  templateUrl: './cosplay.component.html',
  styleUrls: ['./cosplay.component.scss']
})
export class CosplayComponent implements OnInit {
  cosplay!: Cosplay[];

  constructor(private cosplayService: CosplayService) { }

  ngOnInit(): void {
    this.cosplay = this.cosplayService.getAllCosplay();
  }

}
