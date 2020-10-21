import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGard} from './AuthGard';
import {ProductEditorComponent} from './productEditor.component';
import {ProductTableComponent} from './productTable.component';
import {OrderTableComponent} from './orderTable.component';

const routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent, canActivate: [AuthGard], children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" }
    ]},
  { path: "**", redirectTo: "auth" }
]);
@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGard],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule {}
