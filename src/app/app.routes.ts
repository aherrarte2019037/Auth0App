import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PricesComponent } from "./components/prices/prices.component";
import { ProtectedComponent } from "./components/protected/protected.component";
import { AuthGuard } from "./guards/auth.guard";


const APP_ROUTING: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]


export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING);