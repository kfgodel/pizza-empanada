import Controller from '@ember/controller';
import {A} from '@ember/array';
import Object from '@ember/object';

export default Controller.extend({
  menues: A(),

  init() {
    this._super(...arguments);
    this._crearMenuVacio();
  },

  actions: {
    cerrarMenuYAgregar() {
      let menuDefinido = this.get('menu');
      this._agregarALaLista(menuDefinido);
      this._crearMenuVacio();
    }
  },

  _crearMenuVacio() {
    this.set('menu', Object.create({
      comensal: null,
      cantidadDeEmpanadas: 0,
      cantidadDePorciones: 0
    }));
  },

  _agregarALaLista(menuNuevo) {
    this.get('menues').addObject(menuNuevo);
  }

});