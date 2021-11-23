
/**
  @author Miguel Jaque <mjaque@fundacionloyola.es>
  @author Sergio Matamoros Delgado
  @license GPL v3 2021
  Modelo de datos del juego.
**/
export class Modelo{
    constructor(){
        this.palabras = [
          ['En', 'un', 'lugar', 'de', 'La', 'Mancha'], //Nivel 0 (inicial)
          ["ju", "fr", "fv", "jm", "fu", "jr", "jv", "fm"], //Nivel 1
          ["fre", "jui", "fui", "vie", "mi", "mery", "huy"], //Nivel 2
          ["juan", "remo", "foca", "dedo", "cate"] //Nivel 3
        ];
  
        this.puntos = 0;
        this.nivel = 0;
    }
    /**
      Devuelve una nueva palabra.
      Devuelve aleatoriamente unn elemento del array de palabras.
      @return {String} Palabra generada
    **/
    crearPalabra(){
      return this.palabras[this.nivel][Math.floor(Math.random() * this.palabras.length)]
    }
    sumarPunto() {
      this.puntos++;
  
      if(this.puntos == 10) this.subirNivel();
      
      if(this.puntos == 20) this.subirNivel();
  
      if(this.puntos == 30) this.subirNivel();
     
  
      if(this.nivel == 1 && this.puntos < 10) this.bajarNivel();
      if(this.nivel == 2 && this.puntos < 20) this.bajarNivel();
      if(this.nivel == 3 && this.puntos < 30) this.bajarNivel();
  
      console.log("Puntuación: "+this.puntos);
      console.log("Nivel: "+this.nivel);
    }
  
    /**
     * Sube de nivel
     */
    subirNivel() {
      this.nivel++;
    }
  
    bajarNivel() {
      this.nivel--;
    }
  }
  