import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartaControleService } from './service/carta-controle.service';

@Component({
  selector: 'app-carta-controle',
  templateUrl: './carta-controle.component.html',
  styleUrls: ['./carta-controle.component.css'],
  providers: [CartaControleService],
})
export class CartaControleComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private cartaControleService: CartaControleService) {}

  ngOnInit(): void {
    this.subscription = this.cartaControleService
      .getListaIndicadores()
      .subscribe((resposta) => {
        console.log('Resposta', resposta);
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
