import React, {
  useState,
} from 'react';

import Screen from '../../components/Screen';
import Input from './components/Input';

import styles from './form.module.css';

export default function FormScreen() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [carrera, setCarrera] = useState('');
  const [hobbie, setHobbie] = useState('');

  return (
    <Screen safe>
      <div className={styles.container}>
        <form
          className={styles.container__form}
          onSubmit={(e) => {
            e.preventDefault();
            console.table({
              nombre,
              edad,
              carrera,
              hobbie,
            });
          }}
        >
          <Input
            name="Nombre"
            placeholder="Ingresa tu nombre"
            value={nombre}
            setValue={setNombre}
          />
          <Input
            name="Edad"
            placeholder="Ingresa tu edad"
            value={edad}
            setValue={setEdad}
          />
          <Input
            name="Carrera"
            placeholder="Ingresa tu carrera"
            value={carrera}
            setValue={setCarrera}
          />
          <Input
            name="Hobbie"
            placeholder="Ingresa tu hobbie"
            value={hobbie}
            setValue={setHobbie}
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Enviar
          </button>
        </form>
      </div>
    </Screen>
  );
}
