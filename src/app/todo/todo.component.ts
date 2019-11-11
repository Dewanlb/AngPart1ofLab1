import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  sampleTodo: Todo[] = [
    { task: "Walk the Cats", completed: true },
    { task: "Cry", completed: false },
    { task: "Smile more than yesterday", completed: true },
    { task: "Vacuum the Lawn", completed: true },
    { task: "Eat all the food in the house", completed: false },
    { task: "Fold the Dishes", completed: true },
    { task: "Bandage hand after folding dishes", completed: false },
    { task: "Power wash the T.V", completed: true }
  ];
}
