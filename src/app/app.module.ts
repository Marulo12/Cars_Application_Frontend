import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoadInterceptor } from './interceptors/load-interceptor';
import { EffectsModule } from '@ngrx/effects';
import { carsReducer } from './store/cars/cars.reducers';
import { CarsEffects } from './store/cars/cars.effects';
import { PrimengModule } from './shared/modules/primeng/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimengModule,
    StoreModule.forRoot({ cars: carsReducer }),
    EffectsModule.forRoot(CarsEffects),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
