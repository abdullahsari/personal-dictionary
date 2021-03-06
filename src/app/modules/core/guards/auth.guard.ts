import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators/first';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

import { AuthService } from '../services/auth.service';

/**
 * This guard only allows access to a route if the user IS authenticated
 * @author Muhammed Sari <hi@muhammedsari.me>
 */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) {}

    public canActivate(): Observable<boolean> {
        return this._authService.user$.pipe(
            first(),
            map(user => !!user),
            tap(isAuthenticated => {
                if (!isAuthenticated) this._router.navigate(['/login']);
            })
        );
    }
}
