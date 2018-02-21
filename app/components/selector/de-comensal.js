import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  comensalesDisponibles: Ember.A([
    Ember.Object.create({id: 1, nombre: 'Dario'}),
    Ember.Object.create({id: 2, nombre: 'Lucas'}),
    Ember.Object.create({id: 3, nombre: 'Gise'}),
    Ember.Object.create({id: 4, nombre: 'Ludat'})
  ])

});
