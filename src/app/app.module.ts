import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanGridComponent } from './kanban-grid/kanban-grid.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TaskCardComponent } from './kanban-grid/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    KanbanGridComponent,
    TaskCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
