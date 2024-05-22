import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-cd-fils",
  templateUrl: "./cd-fils.component.html",
  styleUrls: ["./cd-fils.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdFilsComponent {
  @Input() user!: { id: number; email: string };
  @Input() name = "";
}
