import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() name_item: string;
  list: string[]=[];

  onAddItem() {
    this.list.push(this.name_item);
  }

  onRemoveItem(val: number) {
    this.list.splice(val,1);
  }
}
