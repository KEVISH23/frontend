import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { ToastService } from '../services/toast.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenService)
  const location = inject(Location)
  const toastr = inject(ToastService)
  const router = inject(Router)
  const userRole = token.getRole() as string
  if(userRole && userRole==='Admin'){
    return true
  }else{
    toastr.showError('Not Authorized bhag yaha se')
    router.navigate(['/'])
    return false
  }
};
