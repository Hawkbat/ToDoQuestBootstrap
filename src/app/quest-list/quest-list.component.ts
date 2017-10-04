import { Component, OnInit } from '@angular/core'
import { StoreService, Status } from '../store.service'

@Component({
	selector: 'quest-list',
	templateUrl: './quest-list.component.html',
	styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {
	constructor(public store: StoreService) { }

	page: number = 0
	pageSize: number = 10

	ngOnInit() {
	}

	isFiltered(status: Status) {
		return (this.store.state.filter & status) == status
	}

	getQuestCount() {
		return this.store.state.quests.reduce((prev, quest) => prev + (this.isFiltered(quest.status) ? 1 : 0), 0)
	}

	getDisplayedCount() {
		return Math.min(this.pageSize, this.getQuestCount() - (this.page - 1) * this.pageSize)
	}

}
