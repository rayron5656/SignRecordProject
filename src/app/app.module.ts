import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { AnimatorTableComponent } from './components/animator-table/animator-table.component';
import { IndexerComponent } from './components/indexer/indexer.component';
import { RestorePasswordComponent } from './components/restore-password/restore-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from "@angular/material/table";
import { CategoryPipePipe } from './pipes/category-pipe.pipe';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { NoOfFilesPipePipe } from './pipes/no-of-files-pipe.pipe';
import { AutoFillSelectComponent } from './components/auto-fill-select/auto-fill-select.component';
import { AutoFillCheckBoxComponent } from './components/auto-fill-check-box/auto-fill-check-box.component';
import { WordParserComponent } from './components/word-parser/word-parser.component';
import { NewLangDictionaryComponent } from './components/new-lang-dictionary/new-lang-dictionary.component';
import { UploadComponent } from './components/upload/upload.component';
import { NoFilesPipe } from './pipes/no-files.pipe';
import { SignLangPipe } from './pipes/sign-lang.pipe';
import { PfizerComponent } from './components/pfizer/pfizer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainTableComponent,
    AnimatorTableComponent,
    IndexerComponent,
    RestorePasswordComponent,
    NotFoundComponent,
    SignupComponent,
    CategoryPipePipe,
    NoOfFilesPipePipe,
    AutoFillSelectComponent,
    AutoFillCheckBoxComponent,
    WordParserComponent,
    NewLangDictionaryComponent,
    UploadComponent,
    NoFilesPipe,
    SignLangPipe,
    PfizerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    NgxCsvParserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
