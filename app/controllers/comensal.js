import Controller from '@ember/controller';
import {A} from '@ember/array';
import Object, {computed} from '@ember/object';

export default Controller.extend({
  menues: A(),
  menuEsAgregable: computed('menu.comensal', 'menu.cantidadDeEmpanadas', 'menu.cantidadDePorciones', function () {
    let seDefinioComensal = !!this.get('menu.comensal');
    let definioCantidadDeEmpanadas = !!this.get('menu.cantidadDeEmpanadas');
    let definioCantidadDePorciones = !!this.get('menu.cantidadDePorciones');
    return seDefinioComensal && (definioCantidadDeEmpanadas || definioCantidadDePorciones);
  }),

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
    let lista = this.get('menues');
    let menuExistente = lista.findBy('comensal', menuNuevo.get('comensal'));
    if (menuExistente) {
      menuExistente.setProperties({
        cantidadDeEmpanadas: menuNuevo.get('cantidadDeEmpanadas'),
        cantidadDePorciones: menuNuevo.get('cantidadDePorciones')
      })
    } else {
      // Es un nuevo comensal
      lista.addObject(menuNuevo);
    }
  }

});
