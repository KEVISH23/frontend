import { Component } from '@angular/core';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  counts:any
 
  constructor(private adminService: AdminService) { }
  ngOnInit(){
    this.getCounts()
  }
  getCounts(){
    this.adminService.getCounts().subscribe((response:IRESPONSE)=>{
      if(response.status){
        this.counts = response.counts
      }
    })
  }



  changeYear(event:any){

  }
}
