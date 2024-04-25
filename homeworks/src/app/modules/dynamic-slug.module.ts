import { CommonModule } from '@angular/common';
import { DynamicSlugComponent } from '../components/dynamic-slug/dynamic-slug.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubRouteDetailComponent } from '../components/sub-route-detail/sub-route-detail.component';

@NgModule({
  declarations: [DynamicSlugComponent, SubRouteDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class DynamicSlugModule {}
