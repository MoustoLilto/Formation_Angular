import { RecipeModule } from './recipe/recipe.module';
import { HeaderModule } from './header/header.module';
import { InMemoryDataService } from './in-memory-data.service';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    HeaderModule,
    RecipeModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
