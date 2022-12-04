import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}
