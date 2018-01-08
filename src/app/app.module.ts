import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { MessagesComponent } from './messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule} from './user/user-list/user-list.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserProfileModule} from './user/user-profile/user-profile.module';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { MessageComponent } from './message/message.component';
import { MessageModule } from './message/message.module';
import { MessageListModule } from './message/message-list/message-list.module';
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./reducers/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./effects/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavigationModule } from "./navigation/navigation.module";
import { CoreModule } from "./core/core.module";

const routes = [
  {path: '', component: MessageComponent },
  {path: 'register', loadChildren: 'app/register/register.module#RegisterModule'},
  {path: 'home', component: AppComponent},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: 'users', component: UserListComponent},
  {path: 'profile/:id', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent
    , MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    CoreModule,
    BrowserAnimationsModule,
    UserListModule,
    UserProfileModule,
    MessageModule,
    MessageListModule,
    StoreModule.forRoot({users: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    NavigationModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
