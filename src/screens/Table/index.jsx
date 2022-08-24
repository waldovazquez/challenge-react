import React from 'react';

import Table from 'react-bootstrap/Table';

import Screen from '../../components/Screen';

import mockPeople from './mock';

export default function TableScreen() {
  return (
    <Screen safe>
      <Table hover>
        <thead>
          <tr>
            <th>Edad</th>
            <th>Nombre</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {
            mockPeople.map((item) => (
              <tr key={item.edad}>
                <td>{item.edad}</td>
                <td>{item.nombre}</td>
                <td>{item.carrera}</td>
                <td>{item.hobbie}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Screen>
  );
}
