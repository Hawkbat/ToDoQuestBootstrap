import { Component, OnInit } from '@angular/core'
import { StoreService } from '../store.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor(public store: StoreService) { }

	ngOnInit() {
	}

}
