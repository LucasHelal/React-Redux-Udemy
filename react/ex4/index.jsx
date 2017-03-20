import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
  <Family lastName="Helal">
      <Member name="Lucas"  />
      <Member name="Matheus"  />
      <Member name="PEdro"  />
  </Family>
, document.getElementById('app'));
