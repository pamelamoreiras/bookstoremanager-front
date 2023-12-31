import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule }      from '@angular/material/form-field';
import { MatPaginatorModule }      from '@angular/material/paginator';
import { MatSnackBarModule }       from '@angular/material/snack-bar';
import { MatCheckboxModule }       from '@angular/material/checkbox';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatSidenavModule }        from '@angular/material/sidenav';
import { MatButtonModule }         from '@angular/material/button';
import { MatSelectModule }         from '@angular/material/select';
import { MatTableModule }          from '@angular/material/table';
import { MatRadioModule }          from '@angular/material/radio';
import { MatInputModule }          from '@angular/material/input';
import { MatIconModule }           from '@angular/material/icon';
import { MatListModule }           from '@angular/material/list';
import { MatCardModule }           from '@angular/material/card';
import { ReactiveFormsModule }     from '@angular/forms';
import { HttpClientModule }        from '@angular/common/http';
import { MatMenuModule}            from '@angular/material/menu';
import { FormsModule }             from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
