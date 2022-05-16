import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const material = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
