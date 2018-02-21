import Component from '@ember/component';
import {computed} from '@ember/object';
import {mapBy, sum} from '@ember/object/computed';

export default Component.extend({
  cantidadesDeEmpanadasPorMenu: mapBy('menues', 'cantidadDeEmpanadas'),
  cantidadDeEmpanadas: sum('cantidadesDeEmpanadasPorMenu'),
  cantidadDeDocenasDeEmpanadas: computed('cantidadDeEmpanadas', function () {
    return Math.ceil(this.get('cantidadDeEmpanadas') / 12);
  }),

  cantidadesDePorcionesPorMenu: mapBy('menues', 'cantidadDePorciones'),
  cantidadDePorciones: sum('cantidadesDePorcionesPorMenu'),
  cantidadDePizzas: computed('cantidadDePorciones', function () {
    return Math.ceil(this.get('cantidadDePorciones') / 8);
  }),
});
