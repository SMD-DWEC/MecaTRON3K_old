/**
  @author Miguel Jaque <mjaque@fundacionloyola.es>
  @author Sergio Matamoros Delgado
  @license GPL v3 2021
 * Clase puntuación, controla la puntuación y la muestra
 */
export class Puntuacion {
    constructor() {
      this.puntos = 0;
    }
    mostrar() {
      document.getElementById("puntos").textContent = "Puntuación: "+this.puntos;
    }
}