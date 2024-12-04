import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalhesLivrosComponent } from './pages/detalhes-livros/detalhes-livros.component';
import { TextOverflowEllipsisDirective } from './directives/text-overflow-ellipsis/text-overflow-ellipsis.directive';
import { CirculoCarregamentoComponent } from './components/circulo-carregamento/circulo-carregamento.component';
import { FiltrarResultadosApiPipe } from './pipes/filtrar-resultados/filtrar-resultados-api.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { LivrosSalvosComponent } from './components/livros-salvos/livros-salvos.component';
import { LivrosSalvosPagComponent } from './pages/livros-salvos-pag/livros-salvos-pag.component';
import { UppercasePipe } from './pipes/uppercase/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    HeaderComponent,
    FooterComponent,
    DetalhesLivrosComponent,
    TextOverflowEllipsisDirective,
    CirculoCarregamentoComponent,
    FiltrarResultadosApiPipe,
    TooltipDirective,
    LivrosSalvosComponent,
    LivrosSalvosPagComponent,
    UppercasePipe,

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
