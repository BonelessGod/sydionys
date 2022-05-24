import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cosplay } from 'src/app/models/cosplay.model';
import { CosplayService } from 'src/app/services/cosplay.services';



@Component({
  selector: 'app-cosplay-obj',
  templateUrl: './cosplay-obj.component.html',
  styleUrls: ['./cosplay-obj.component.scss']
})
export class CosplayObjComponent implements OnInit {
  @Input() cosplay!: Cosplay;

  constructor(private cosplayService: CosplayService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

}
