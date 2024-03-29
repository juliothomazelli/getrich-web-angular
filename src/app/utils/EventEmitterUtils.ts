import { EventEmitter } from '@angular/core';

export class EventEmitterUtils {
  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  public static get (nomeEvento:string): EventEmitter<any> {
      if (!this.emitters[nomeEvento])
          this.emitters[nomeEvento] = new EventEmitter<any>();
      return this.emitters[nomeEvento];
  }
}