import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    RegisterRoutingModule,
  ],
})
export class RegisterModule {}
