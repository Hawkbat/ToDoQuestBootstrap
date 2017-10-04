import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StoreService } from './store.service'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { QuestListComponent } from './quest-list/quest-list.component'
import { QuestInfoComponent } from './quest-info/quest-info.component'
import { QuestItemComponent } from './quest-item/quest-item.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		QuestListComponent,
		QuestInfoComponent,
		QuestItemComponent
	],
	imports: [
		NgbModule.forRoot(),
		BrowserModule,
		FormsModule
	],
	providers: [
		StoreService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
