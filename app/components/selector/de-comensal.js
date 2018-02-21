import Component from '@ember/component';
import {A} from '@ember/array';
import Object from '@ember/object';

export default Component.extend({

  comensalesDisponibles: A([
    Object.create({id: 1, nombre: 'Dario'}),
    Object.create({id: 2, nombre: 'Lucas'}),
    Object.create({id: 3, nombre: 'Gise'}),
    Object.create({id: 4, nombre: 'Ludat'})
  ])

});
