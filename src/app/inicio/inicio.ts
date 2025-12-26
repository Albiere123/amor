
import { Component, OnInit, OnDestroy, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit, OnDestroy {
  tempoJuntos = signal("");
  timerRelogio: any;
  timeoutFrase: any;
  mostrarFrase: WritableSignal<boolean> = signal(false);
  private dataInicio = new Date('2023-07-23T20:00:00');
  fotos: string[] = [
    'mi01.jpg', 'mi02.jpg', 'mi03.jpg',
    'mi04.jpg', 'mi05.jpg', 'mi06.jpg'
  ];
  
 
  indiceAtivo: WritableSignal<number> = signal(0);
  
  timer: any;

  aoClicarNaImagem() {
   
    this.mostrarFrase.set(true);

  
    if (this.timeoutFrase) {
      clearTimeout(this.timeoutFrase);
    }

    
    this.timeoutFrase = setTimeout(() => {
       this.mostrarFrase.set(false);
    }, 2000);
  }

  ngOnInit() {
    this.iniciarCarrossel();
    this.atualizarContador();
    this.timerRelogio = setInterval(() => {
      this.atualizarContador();
    }, 1000);
  }

  iniciarCarrossel() {
  
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      this.proximaFoto();
    }, 10000);
  }

  proximaFoto() {
    this.indiceAtivo.update(valorAtual => {
      const proximo = (valorAtual + 1) % this.fotos.length;
      console.log('Trocando para índice:', proximo);
      return proximo;
    });
  }


  irParaFoto(index: number) {
    this.indiceAtivo.set(index); 
  
  
    this.iniciarCarrossel()
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.timer) clearInterval(this.timer);
    if (this.timerRelogio) clearInterval(this.timerRelogio);
    if (this.timeoutFrase) clearTimeout(this.timeoutFrase);
  }

  atualizarContador() {
    const inicio = new Date('2023-07-23T20:00:00');
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--; 
    }

    if (dias < 0) {
      meses--;

      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    const hStr = horas.toString().padStart(2, '0');
    const mStr = minutos.toString().padStart(2, '0');
    const sStr = segundos.toString().padStart(2, '0');

    this.tempoJuntos.set(
      `${anos} anos, ${meses} meses, ${dias} dias, ${hStr}:${mStr}:${sStr}`
    );
  }
}
