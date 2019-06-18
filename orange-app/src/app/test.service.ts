import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  private showTest = false;

  constructor() {}
  getShowTest() {
    return this.showTest;
  }

  setShowTest(val) {
    this.showTest = val;
  }

}
