import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../users.service";
export const fibonnaci = (n: number): number => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};
@Component({
  selector: "app-users-list-element",
  templateUrl: "./users-list-element.component.html",
  styleUrls: ["./users-list-element.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListElementComponent {
  @Input() users: User[] = [];
  fibo(n: number): number {
    const fib = fibonnaci(n);
    console.log({ n, fib });

    return fib;
  }
}
