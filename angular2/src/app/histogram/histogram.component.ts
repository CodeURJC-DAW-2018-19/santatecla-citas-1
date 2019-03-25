import { Component, ChangeDetectorRef, AfterViewInit, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { TdMediaService, TdDigitsPipe, TdLayoutManageListComponent } from '@covalent/core';
import { DatePipe } from '@angular/common';
import { HistogramService } from './histogram.service';

@Component({
  templateUrl: './histogram.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class HistogramComponent implements AfterViewInit, OnInit {

  histogram: any[];

  @ViewChild('manageList') manageList: TdLayoutManageListComponent;
  @ViewChild('dialogContent') template: TemplateRef<any>;

  name = 'UI Platform';

  miniNav: boolean = false;

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

  // Dialog
  config = {width: '50%', height: '50%'};

  constructor(public media: TdMediaService,
              public dialog: MatDialog,
              private _changeDetectorRef: ChangeDetectorRef,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
              private histogramService: HistogramService) {
              }

  ngOnInit(): void {

    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
      'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

    this.histogramService.getHistogram().subscribe((data: any[]) => {
      this.histogram = data['histogram'];
      Object.assign(this, this.histogram);
    });

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  openTemplate() {
    this.dialog.open(this.template, this.config);
  }

  // NGX Charts Axis
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }

  axisDate(val: string): string {
    return new DatePipe('en').transform(val, 'hh a');
  }

}
