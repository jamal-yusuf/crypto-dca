import * as React from 'react';
import ReactDOM from 'react-dom';
import EditableTableCell from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditableTableCell />, div);
});
