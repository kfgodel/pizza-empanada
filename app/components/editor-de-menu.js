import Component from '@ember/component';
import Object, {computed} from '@ember/object';


export default Component.extend({
  menuEsAceptable: computed('menuEditado.{comensal,cantidadDeEmpanadas,cantidadDePorciones}', function () {
    let seDefinioComensal = !!this.get('menuEditado.comensal');
    let definioCantidadDeEmpanadas = !!this.get('menuEditado.cantidadDeEmpanadas');
    let definioCantidadDePorciones = !!this.get('menuEditado.cantidadDePorciones');
    return seDefinioComensal && (definioCantidadDeEmpanadas || definioCantidadDePorciones);
  }),

  init() {
    this._super(...arguments);
    this._crearMenuVacio();
  },
  actions: {
    definirMenu() {
      let menuEditado = this.get('menuEditado');
      this._dispararAccionDefinidaCon(menuEditado);
      this._crearMenuVacio()
    }
  },

  _crearMenuVacio() {
    this.set('menuEditado', Object.create({
      comensal: null,
      cantidadDeEmpanadas: 0,
      cantidadDePorciones: 0
    }));
  },

  _dispararAccionDefinidaCon(menu) {
    let accion = this.get('alAceptarEdicion');
    accion(menu);
  }
});
