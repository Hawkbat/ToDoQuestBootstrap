import { Component, OnInit } from '@angular/core'
import { StoreService } from '../store.service'

@Component({
	selector: 'quest-info',
	templateUrl: './quest-info.component.html',
	styleUrls: ['./quest-info.component.css']
})
export class QuestInfoComponent implements OnInit {
	constructor(public store: StoreService) { }

	ngOnInit() {
	}

	getQuest() {
		if (this.store.state.editing) return this.store.state.tempQuest
		else return this.store.state.quests[this.store.state.selectedQuest]
	}

	getCompletedSteps() {
		return this.getQuest().steps.reduce((prev, step) => prev + (step.complete ? 1 : 0), 0)
	}

	getProgress() {
		let quest = this.getQuest()
		let totalSteps = quest.steps.length
		if (totalSteps == 0) return 100
		return (this.getCompletedSteps() / totalSteps) * 100
	}
}
