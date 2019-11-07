import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('content', { static: false }) content: ElementRef;
  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
  }

  openMenu(): void {
    this._setMenuWidth(this.content, '100%');
  }

  closeMenu(): void {
    this._setMenuWidth(this.content, '0');
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  private _setMenuWidth(natEl: ElementRef, value: string): void {
    this.renderer.setStyle(natEl.nativeElement, 'width', value);
  }

}
