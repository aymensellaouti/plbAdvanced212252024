import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../users.service";

@Component({
  selector: "app-users-list-element",
  templateUrl: "./users-list-element.component.html",
  styleUrls: ["./users-list-element.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListElementComponent {
  @Input() users: User[] = [];
}
