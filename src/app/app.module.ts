import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { CardProfilComponent } from "./components/card-profil/card-profil.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";

import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass.component";

import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";

import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestFormComponent } from "./components/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./rxjs/test-observable/test-observable.component";
import { TestHttpComponent } from "./components/test-http/test-http.component";
import { AuthInterceptorProvider } from "./auth/interceptors/auth.interceptor";
import { RhComponent } from "./optimizationPattern/rh/rh.component";
import { UserListComponent } from "./optimizationPattern/user-list/user-list.component";
import { ProductsComponent } from "./products/products.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { SliderComponent } from "./rxjs/slider/slider.component";
import { LOGGER_INJECTION_TOKEN } from "./injection tokens/logger.injection-token";
import { loggerFactory } from "./provider factory/logger.factory";
import { SayHello } from "./services/sayHello.service";
import { LoggerService } from "./services/logger.service";
import { CvService } from "./cv/services/cv.service";
import { CONSTANTES } from "../config/const.config";
import { FakeCvService } from "./cv/services/fake-cv.service";
import { Logger2Service } from "./services/logger2.service";
import { v4 as uuidv4, v4 } from "uuid";
import { UUID_INJECTION_TOKEN } from "./injection tokens/uuid.injection-token";
import { FromOfComponent } from "./rxjs/from-of/from-of.component";
import { CdPereComponent } from './cd/cd-pere/cd-pere.component';
import { CdFilsComponent } from './cd/cd-fils/cd-fils.component';
import { UsersListElementComponent } from './optimizationPattern/users-list-element/users-list-element.component';
import { FiboPipe } from './pipes/fibo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardProfilComponent,
    PereComponent,
    FilsComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    TestHttpComponent,
    RhComponent,
    UserListComponent,
    ProductsComponent,
    FromOfComponent,
    CdPereComponent,
    CdFilsComponent,
    UsersListElementComponent,
    FiboPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
  providers: [
    AuthInterceptorProvider,
    {
      provide: CvService,
      useClass: CONSTANTES.env === "dev" ? FakeCvService : CvService,
    },
    {
      provide: LoggerService,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LoggerService,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: UUID_INJECTION_TOKEN,
      useValue: uuidv4,
    },

    /* {
      provide: LoggerService,
      useClass: LoggerService,
      //useFactory: loggerFactory,
    }, */
    /* {
      provide: SayHello,
      useClass: SayHello,
      //useFactory: (logger: LoggerService) => new SayHello(logger),
    }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
