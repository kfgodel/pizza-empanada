import Component from '@ember/component';
import {computed} from '@ember/object';


export default Component.extend({

  menuesOrdenados: computed('menues.[]', function () {
    return this.get('menues').sortBy('comensal.nombre');
  }),
});
