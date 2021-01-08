import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  provinces: any[];

  constructor() { }

  ngOnInit() {
    this.provinces = [
      { id: '1', name: 'กรุงเทพ' },
      { id: '2', name: 'เชียงใหม่' },
      { id: '3', name: 'ขอนแก่น' },
      { id: '4', name: 'เลย' },
      { id: '5', name: 'ชลบุรี' },
      { id: '6', name: 'ตาก'}
    ];
  }

  onRegister(formModel: any) {

    console.log(formModel);
  }
}
