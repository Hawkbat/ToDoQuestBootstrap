import { Component, OnInit, Input } from '@angular/core'
import { StoreService, Status } from '../store.service'

@Component({
	selector: 'quest-item',
	templateUrl: './quest-item.component.html',
	styleUrls: ['./quest-item.component.css']
})
export class QuestItemComponent implements OnInit {
	@Input()
	public id: number
	constructor(public store: StoreService) { }

	ngOnInit() {
	}

	printStatus(status: Status) {
		return Status.print(this.store.state.quests[this.id].status)
	}

	getProgress() {
		let quest = this.store.state.quests[this.id]
		let totalSteps = quest.steps.length
		let completeSteps = quest.steps.reduce((prev, step) => prev + (step.complete ? 1 : 0), 0)
		return (completeSteps / totalSteps) * 100
	}
}
