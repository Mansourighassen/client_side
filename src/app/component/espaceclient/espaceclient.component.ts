import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-espaceclient",
  templateUrl: "./espaceclient.component.html",
  styleUrls: ["./espaceclient.component.css"],
})
export class EspaceclientComponent implements OnInit {
  dataSource: any;
  constructor() {}

  ngOnInit() {}
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
