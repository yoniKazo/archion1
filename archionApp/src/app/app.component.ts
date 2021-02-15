import { Component, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './shared/common/loader.service';
import { Subscription } from 'rxjs';
//declare let config: { url: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GovernmentDecisionArchiveApp';
  loadingSubscription: Subscription| undefined;
  public loadingMask: boolean = false;
  constructor(public loaderService: LoaderService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    console.log('AppComponent:' + "config.url");

    this.loadingSubscription = this.loaderService.loaderState
      .subscribe(state => {
        this.loadingMask = state;
        this.cdRef.detectChanges();
      });

  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
