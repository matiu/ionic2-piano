import * as _  from 'lodash';

let notes = [
  {
    'name': "Do",
    'freq': 261.63,
  },
  {
    'name': "Re",
    'freq': 293.66,
  },

  {
    'name': "Mi",
    'freq': 329.63,
  },
  {
    'name': "Fa",
    'freq': 349.23,
  },
  {
    'name': "Sol",
    'freq': 392,
  },
  {
    'name': "La",
    'freq': 440,
  },
  {
    'name': "Si",
    'freq': 493.88,
  },
];


export let getNotes = function() {
  return ( _.map(notes, i=> (i as any) ) );
};
