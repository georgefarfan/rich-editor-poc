import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [AppComponent, COMPONENTS],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
