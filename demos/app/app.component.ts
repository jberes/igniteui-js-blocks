import { Component } from "@angular/core";

@Component({
    selector: 'sample-app',
    template:`
        <h1 style="text-align: center">Ignite UI JS Blocks Samples</h1>
        <nav style="display: flex; justify-content: center; flex-wrap: wrap">
            <span igButton routerLink="/inputs">Inputs</span>
            <span igButton routerLink="/carousel">Carousel</span>
            <span igButton routerLink="/tabbar">TabBar</span>
            <span igButton routerLink="/list">List</span>
            <span igButton routerLink="/buttons">Buttons</span>
            <span igButton routerLink="/avatar">Avatar</span>
            <span igButton routerLink="/navigation-drawer">Navigation Drawer</span>
            <span igButton routerLink="/navbar">Navbar</span>
<<<<<<< HEAD
            <span igButton routerLink="/progressbar">Progressbar</span>
=======
            <span igButton routerLink="/modal">Modal</span>
>>>>>>> fc0c81ad4e2055b196b72d20cbab499aea260ecd
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}