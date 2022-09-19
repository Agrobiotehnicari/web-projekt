import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IstraziComponent } from "./istrazi/istrazi.component";
import { KvizDetailComponent } from "./kviz/kviz-detail/kviz-detail.component";
import { KvizoviUTrenduComponent } from "./kviz/kvizovi-u-trendu/kvizovi-u-trendu.component";
import { MojiKvizoviComponent } from "./kviz/moji-kvizovi/moji-kvizovi.component";
import { NoviKvizComponent } from "./kviz/novi-kviz/novi-kviz.component";
import { PlayKvizComponent } from "./kviz/play-kviz/play-kviz.component";
import { RijeseniKvizoviComponent } from "./kviz/rijeseni-kvizovi/rijeseni-kvizovi.component";
import { AuthGuard } from "./login/auth.guard";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],
    },
    { path: 'istrazi', component: IstraziComponent },
    { path: 'novi-kviz', component: NoviKvizComponent },
    { path: 'u-trendu', component: KvizoviUTrenduComponent,
    children: [
        //{ path: '', component: AlbumsStartComponent, },
        { path: ':id', component: KvizDetailComponent, },
        { path: ':id/igraj', component: PlayKvizComponent, },
    ]
    },
    { path: 'moji-kvizovi', component: MojiKvizoviComponent },
    { path: 'rijeseni-kvizovi', component: RijeseniKvizoviComponent },
    { path: 'prijava', component: LoginComponent },
    { path: 'igraj', component: PlayKvizComponent },

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}