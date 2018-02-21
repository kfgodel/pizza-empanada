import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  menues: Ember.A(),

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
    this.set('menu', Ember.Object.create({
      comensalElegido: null,
      cantidadDeEmpanadas: 0,
      cantidadDePorciones: 0
    }));
  },

  _agregarALaLista(menuNuevo) {
    this.get('menues').addObject(menuNuevo);
  }

});
