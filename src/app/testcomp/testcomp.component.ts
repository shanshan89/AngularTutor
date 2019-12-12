import { Component, OnInit } from '@angular/core';
export interface IHash {
  [details: string]: string;
}

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})

export class TestcompComponent implements OnInit {
  map = {'apple+flour': 'Apple Pie', 'potato': 'Mashed Potato', 'egg+fish+tofu': 'Fish Soup'};
  material = '';
  matArr = [];
  dish = '';
  success = false;
  showResult = false;
  addMaterial() {
    this.matArr.push(this.material);
    this.material = '';
  }

  makeDish() {
    this.showResult = true;
    let materials = '';
    let arr = [];
    let i;
    for (i = 0; i < this.matArr.length; i++) {
      arr.push(this.matArr[i]);
    }
    arr.sort();
    for (i = 0; i < arr.length; i++) {
      materials += arr[i] + '+';
    }
    materials = materials.substring(0, materials.length - 1);
    if (materials in this.map) {
      this.success = true;
      this.dish = this.map[materials];
    } else {
      this.success = false;
      this.dish = 'nothing';
    }
  }

  startOver() {
    this.showResult = false;
    this.material = '';
    this.matArr = [];
    this.dish = '';
  }
  constructor() {
  }

  ngOnInit() {
  }

}
