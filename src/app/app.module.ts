import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./component/home/home.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CatalogeService } from "../app/services/cataloge.service";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
} from "@angular/material";

import { StoreComponent } from "./component/store/store.component";
import { ProductComponent } from "./component/product/product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { LogindiagComponent } from "./component/logindiag/logindiag.component";
import { SigninupComponent } from "./component/signinup/signinup.component";
import { EspaceclientComponent } from "./component/espaceclient/espaceclient.component";
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatIconModule } from "@angular/material/icon";
import { ShopcartComponent } from "./component/shopcart/shopcart.component";
import { SignupformComponent } from "./component/signupform/signupform.component";
import { TokenInterceptor } from "./TokenInterceptor";
import { CheckoutcompComponent } from "./component/checkoutcomp/checkoutcomp.component";
import { OrderhistoryComponent } from './component/orderhistory/orderhistory.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    ProductComponent,
    LogindiagComponent,
    SigninupComponent,
    EspaceclientComponent,
    ShopcartComponent,
    SignupformComponent,
    CheckoutcompComponent,
    OrderhistoryComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
  ],
  entryComponents: [LogindiagComponent],
  providers: [
    CatalogeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
