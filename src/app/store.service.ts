import { Injectable } from '@angular/core'

export enum Status {
	Editing = 1,
	InProgress = 2,
	Completed = 4
}

export namespace Status {
	export function print(status: Status) {
		if (status == Status.InProgress) return "In Progress"
		else return Status[status]
	}
}

export interface ITask {
	name: string
	info: string
}

export interface IQuest extends ITask {
	status: Status
	steps: IStep[]
	exp: number
}

export interface IStep extends ITask {
	complete: boolean
}

export interface State {
	quests: IQuest[]
	level: number
	exp: number
	selectedQuest: number
	editing: boolean
	tempQuest: IQuest
	filter: number
}

@Injectable()
export class StoreService {
	state: State

	constructor() {
		this.loadState()
	}

	addNewQuest() {
		this.state.quests.push({ name: "New Quest", info: "", status: Status.Editing, exp: 20, steps: [{ name: "Step 1", info: "", complete: false }] })
		this.state.selectedQuest = this.state.quests.length - 1
		this.setEditing(true)
		this.refresh()
	}

	selectQuest(questId: number) {
		this.state.selectedQuest = questId
		if (this.state.editing) {
			this.setEditing(false)
		}
		this.refresh()
	}

	removeCurrentQuest() {
		this.state.quests.splice(this.state.selectedQuest, 1)
		this.state.selectedQuest = -1
		this.refresh()
	}

	setCurrentQuestStatus(status: Status) {
		var quest = this.state.quests[this.state.selectedQuest]
		if (quest.status == Status.Completed && status != Status.Completed) {
			this.state.exp -= quest.exp
			while (this.state.exp < 0) {
				this.state.exp += 100
				this.state.level--
			}
		}
		quest.status = status
		if (status == Status.Completed) {
			this.state.exp += quest.exp
			while (this.state.exp >= 100) {
				this.state.exp -= 100
				this.state.level++
			}
		} else {
			for (let i = 0; i < quest.steps.length; i++) {
				quest.steps[i].complete = false
			}
		}
		this.refresh()
	}

	addNewStep() {
		this.state.tempQuest.steps.push({ name: "Step " + (this.state.tempQuest.steps.length + 1), info: "", complete: false })
		this.refresh()
	}

	removeStep(id: number) {
		this.state.tempQuest.steps.splice(id, 1)
		this.refresh()
	}

	setStepCompletion(stepId: number, complete: boolean) {
		this.state.quests[this.state.selectedQuest].steps[stepId].complete = complete
		this.refresh()
	}

	applyEdit() {
		this.state.quests.splice(this.state.selectedQuest, 1, this.state.tempQuest)
		this.setEditing(false)
		this.refresh()
	}

	setEditing(editing: boolean) {
		this.state.editing = editing
		if (editing) {
			this.state.tempQuest = JSON.parse(JSON.stringify(this.state.quests[this.state.selectedQuest]))
		} else {
			this.state.tempQuest = null
		}
		this.refresh()
	}

	toggleFilter(status: Status) {
		if ((this.state.filter & status) == status) {
			this.state.filter -= status
		} else {
			this.state.filter += status
		}
		this.refresh()
	}

	refresh() {
		this.saveState()
	}

	saveState() {
		localStorage.setItem("state", JSON.stringify(this.state))
	}

	loadState() {
		if (localStorage.getItem("state")) {
			this.state = JSON.parse(localStorage.getItem("state"))
		} else {
			this.state = {
				quests: [],
				level: 1,
				exp: 0,
				selectedQuest: -1,
				editing: false,
				tempQuest: null,
				filter: Status.Editing | Status.InProgress
			}
		}
	}
}
