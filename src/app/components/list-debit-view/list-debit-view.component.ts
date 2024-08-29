import { Component, OnInit } from '@angular/core';
import { DebitServiceService } from '../../services/debit-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-debit-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-debit-view.component.html',
  styleUrl: './list-debit-view.component.css'
})
export class ListDebitViewComponent {
  debitos: any[] = [];

  constructor(private debitService: DebitServiceService) { }

  ngOnInit(): void {
    this.debitService.getAllDebits().subscribe({
      next: (response: any) => {
        this.debitos = response;
        console.log("debitos:", this.debitos);
        
      },
      error: (erro) => {
        console.log('Error:', erro);
      }
    });
  }
}
