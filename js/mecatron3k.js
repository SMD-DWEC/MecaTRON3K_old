/**
  @file Controlador principal del Juego MecaTRON-3000
  @author Miguel Jaque <mjaque@fundacionloyola.es>
  @author Sergio Matamoros Delgado
  @license GPL v3 2021
**/

'use strict'

import { Vista } from "./vista.js";
import { Modelo } from "./modelo.js";

/**
  Controlador principal del juego.
**/
class Juego{
  /**
    Constructor de la clase Juego
  **/
  constructor(){
    this.vista = new Vista()
    this.modelo = new Modelo()
    this.generadorPalabras = null
    this.animador = null
    this.divPrincipal = null
    this.spacePressed = false;
    window.onload = this.iniciar.bind(this)
  }
  /**
    Pone en marcha el juego.
  **/
  iniciar(){
    console.log('Iniciando...')
    this.divPrincipal = document.getElementById('divPrincipal')
    this.vista.div = this.divPrincipal;

    this.generadorPalabras = window.setInterval(this.generarPalabra.bind(this), 3000) //3000
    this.animador = window.setInterval(this.vista.moverPalabras.bind(this.vista), 300)
    window.onkeypress = this.pulsar.bind(this)
  }

  generarPalabra(){
    let nuevaPalabra = this.modelo.crearPalabra()
    this.vista.dibujar(nuevaPalabra)
  }

  /**
    Evento de atención a la pulsación del teclado.

    Busca las palabras que tienen la letra pulsada y cambia su estado.
    Cambiando el estilo y moviendo las letras de un sitio a otro.
    @param {KeyboardEvent} evento Evento de pulsación del teclado.
  **/
  pulsar(evento){
    let letraPulsada = evento.key

    /*if(evento.code == "Space") {
      if(this.spacePressed) {
        this.spacePressed == false;
        this.iniciar();
        console.log("JUEGO REANUDADO");
      }
      else {
        this.spacePressed == false;
        clearInterval(this.generadorPalabras);
        clearInterval(this.animador);
        console.log("JUEGO EN PAUSA");
      }
    }*/

    //Busco todas las palabras
    let palabras = this.divPrincipal.querySelectorAll('.palabra')
    for(let palabra of palabras){
      let span = palabra.children.item(0)
      let nodoTexto = palabra.childNodes[1]
      let textoRestante = nodoTexto.nodeValue
      let primeraLetraTextoRestante = textoRestante.charAt(0)
      if (letraPulsada == primeraLetraTextoRestante){
        span.textContent += letraPulsada
        nodoTexto.nodeValue = textoRestante.substring(1)

        //Si ha completado la palabra, la elimino y sumo puntos
        if (nodoTexto.nodeValue.length == 0){
          palabra.remove()
          this.modelo.sumarPunto();
          this.vista.puntuacionClass.puntos = this.modelo.puntos;
          this.vista.puntuacionClass.mostrar();
        }
      }
      else{
        //Ha fallado, repongo el texto de la palabra
        nodoTexto.nodeValue = span.textContent + nodoTexto.nodeValue
        span.textContent = ''
      }
    }
  }
}
var app = new Juego()
