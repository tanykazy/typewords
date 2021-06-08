import { Component, ComponentFactoryResolver, HostBinding, HostListener, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';

import { BoardDirective } from '../../directive/board.directive';
import { WordItem } from '../../class/word-item';
import { Words } from '../../interface/words';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  @HostBinding('tabIndex') tabIndex = '0';

  @Input() ads: WordItem[] = [];
  currentAdIndex = -1;
  @ViewChild(BoardDirective, { static: true }) board!: BoardDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.board.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Words>(componentFactory);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
