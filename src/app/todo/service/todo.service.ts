import { inject, Inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";
import { UUID_INJECTION_TOKEN } from "../../injection tokens/uuid.injection-token";

let n = 1;

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [];
  private uuid: () => string = inject(UUID_INJECTION_TOKEN);
  private loggerService = inject(LoggerService);
  constructor /* private loggerService: LoggerService,
    @Inject(UUID_INJECTION_TOKEN) private uuid: () => string*/() {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    todo.id = this.uuid();
    if (this.todos.length == 0) {
      todo.priority = 1;
    } else {
      todo.priority = this.todos[this.todos.length - 1].priority + 1;
    }
    this.todos.push(todo);
  }

  plus(id: number) {
    this.todos[id].priority++;
    this.todos[id + 1].priority--;
    this.sortTodos();
  }
  moins(id: number) {
    this.todos[id].priority--;
    this.todos[id - 1].priority++;
    this.sortTodos();
  }

  sortTodos() {
    this.todos.sort((todo1, todo2) => todo1.priority - todo2.priority);
  }
  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.loggerService.logger(this.todos);
  }
}
