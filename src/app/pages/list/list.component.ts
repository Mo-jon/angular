import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  getList() {
    console.log('获取apiService数据：')
    this.apiService.getList().subscribe(resp => {
      console.log('获取apiService数据：', resp)
    });
  }

}