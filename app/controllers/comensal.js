import Controller from '@ember/controller';
import {A} from '@ember/array';

export default Controller.extend({
  menues: A(),

  actions: {
    incluirEnListado(menuNuevo) {
      this._agregarALaLista(menuNuevo);
    }
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
