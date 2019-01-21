import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolistboard',
  templateUrl: './todolistboard.component.html',
  styleUrls: ['./todolistboard.component.css']
})
export class TodolistboardComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {}

}
