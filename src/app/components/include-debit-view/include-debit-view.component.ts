import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DebitServiceService } from '../../services/debit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-include-debit-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './include-debit-view.component.html',
  styleUrl: './include-debit-view.component.css'
})
export class IncludeDebitViewComponent {
  parcelas: number[] = [];
  selectedParcela: number = 1;
  userName: string = '';
  userCpf: string = '';
  juros: number = 0;
  multa: number = 0;
  valorOriginal: number = 0;


  parcelasData: { numeroParcela: number | null, valorParcela: number | null, dataVencimentoParcela: Date | null}[] = [];

  constructor(private debitService: DebitServiceService, private router: Router) {
    
    this.parcelas = this.generateParcelas(1, 2);
    this.selectedParcela = this.parcelas[0];
    this.updateParcelas();
  }

  generateParcelas(min: number, max: number): number[] {
    return Array.from({ length: max - min + 1 }, (_, i) => i + min);
  }

  updateParcelas() {
    this.parcelasData = Array.from({ length: this.selectedParcela }, () => ({
      numeroParcela: null,
      valorParcela: null,
      dataVencimentoParcela: null
    }));
  }

  getParcelasArray() {
    return Array.from({ length: this.selectedParcela }, (_, i) => i + 1);
  }

  onSubmit() {
    const debitData = {
      nomeCliente: this.userName,
      cpfCliente: this.userCpf,
      percentualJuros: this.juros,
      percentualMulta: this.multa,
      numeroDeParcelas: this.selectedParcela,
      valorOriginal: this.valorOriginal,
      modeloDeParcelamento: this.parcelasData
    };

    this.debitService.createDebit(debitData).subscribe({
      next: (response: any) => {
        this.router.navigate(['/list-debit']);        
        console.log('Success:', response);
      },
      error: (erro) => {
        console.log('Error:', erro);
      }
    }
    );
  }
}
