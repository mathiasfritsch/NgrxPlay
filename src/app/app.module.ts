import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HomeComponent } from './home/home.component';
import { reducer as userReducer } from './users/reducers/user.reducer';
import { reducer as productReducer } from './products/reducers/product.reducer';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: userReducer, products: productReducer }),
    true ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
