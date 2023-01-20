import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ConfirmationFormComponent } from './components/confirmation-form/confirmation-form.component';
const routes: Routes = [{path:'',component:ProductListComponent},
                        {path:'mycart',component:MycartComponent},
                        {path:'productdetail/:id',component:ProductDetailComponent},
                        {path:'confirmationform',component:ConfirmationFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
