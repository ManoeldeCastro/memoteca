import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip',
    autoria: 'Manoel',
    modelo: 'modelo3'
  },
  {
    conteudo: 'I love Angular',
    autoria: 'Manoel',
    modelo: 'modelo1'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
