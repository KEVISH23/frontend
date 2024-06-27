import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRESPONSE } from 'src/app/core/interfaces/IResponse';
import { IUSERS } from 'src/app/core/interfaces/IUSERS';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {
  userDetails!:IUSERS
  id!:string
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id') as string
    this.getUSerById(this.id)
    

  }
  getUSerById(id:string){
    this.adminService.getParticularUser(id).subscribe((response:IRESPONSE)=>{
      if(response.status){
        this.userDetails = response.data
      }
    })
  }
  
  goBack(){
    this.location.back()
  }
}
