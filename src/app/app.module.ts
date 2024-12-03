import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalhesLivrosComponent } from './pages/detalhes-livros/detalhes-livros.component';
import { TextOverflowEllipsisDirective } from './directives/text-overflow-ellipsis/text-overflow-ellipsis.directive';
import { CirculoCarregamentoComponent } from './components/circulo-carregamento/circulo-carregamento.component';
import { FiltrarResultadosApiPipe } from './pipes/filtrar-resultados/filtrar-resultados-api.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DetalhesLivrosComponent,
    TextOverflowEllipsisDirective,
    CirculoCarregamentoComponent,
    FiltrarResultadosApiPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
