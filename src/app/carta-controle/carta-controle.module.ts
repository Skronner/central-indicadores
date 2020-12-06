import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartaControleComponent } from './carta-controle.component';
import { GraficoControleComponent } from './grafico-controle/grafico-controle.component';
import { CartaControleService } from './service/carta-controle.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: CartaControleComponent }];

@NgModule({
  declarations: [CartaControleComponent, GraficoControleComponent],
  imports: [RouterModule.forChild(routes), HttpClientModule],
  providers: [CartaControleService]
})
export class CartaControleModule {}
