import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
// export class ListCardComponent implements OnInit {
export class ListCardComponent {
  @Input() coin;
  @Input() fiat;

  constructor() { }

  ngOnInit() {
  }

}
