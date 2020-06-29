import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
// import { CanLoad } from './routeLoad/CanLoad'

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'list',
    loadChildren: () => import("./pages/list/list.module").then(m => m.ListModule),
    // 路由守卫，能否加载
    // canLoad: [CanLoad]
  },
  // 这个404路由又顺序问题，必须放在最后
  {
    path: '**',
    loadChildren: () => import("./pages/page404/page404.module").then(m => m.Page404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
