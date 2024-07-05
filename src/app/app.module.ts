import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PnfComponent } from './pnf/pnf.component';
import { provideHttpClient } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserdetailComponent,
    PnfComponent,
    PostsComponent,
    PostdetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
