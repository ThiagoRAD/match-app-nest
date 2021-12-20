import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // every guard should implement the canActivate method
    // const request = context.switchToHttp().getRequest();
    // return authenticate(request)
    return true;
  }
}
