import React, { useState } from 'react';

const categories = [
  {
    'Nome': 'Cômodo',
    'Peso': 8,
    'MultiSelecao':  false,
    'Items': [
      {
        'Id':  1,
        'Nome': 'Comodo compartilhado (várias pessoas me distraem)',
        'Peso': 1
      },
      {
        'Id': 2,
        'Nome': 'Cozinha (as pessoas me atrapalham um pouco)',
        'Peso': 2
      },
      {
        'Id': 3,
        'Nome': 'Garagem',
        'Peso': 3
      },
      {
        'Id': 4,
        'Nome': 'Quarto compartilhado',
        'Peso': 4
      },
      {
        'Id': 5,
        'Nome': 'Quarto privado',
        'Peso': 5
      },
      {
        'Id': 6,
        'Nome': 'Sala de TV',
        'Peso': 6
      },
      {
        'Id': 7,
        'Nome': 'Sala de jantar',
        'Peso': 7
      },
      {
        'Id': 8,
        'Nome': 'Dispensa',
        'Peso': 8
      },
      {
        'Id': 9,
        'Nome': 'Escritório compartilhado',
        'Peso': 9
      },
      {
        'Id': 10,
        'Nome': 'Escritório privado',
        'Peso': 10
      }
    ]
  },
  {
    'Nome': 'Assento',
    'Peso': 8,
    'MultiSelecao':  true,
    'Items': [
      {
        'Id':  1,
        'Nome': 'Não tenho lugar pra sentar',
        'Peso': 1
      },
      {
        'Id': 2,
        'Nome': 'Cama',
        'Peso': 2
      },
      {
        'Id': 3,
        'Nome': 'Sofá',
        'Peso': 3
      },
    ]
  }
];

const Form = () => {
  const [screen, setScreen] = useState(0);
  const [formData, setFormData] = useState({});

  const setItemSelected = (itemName) => ({ target: { selected } }) => {
    setFormData({
      ...formData,
      [itemName]: selected,
    });
  };

  const { Nome, Items, MultiSelecao } = categories[screen];
  const inputType = MultiSelecao ? 'checkbox' : 'radio';
  const inputName = MultiSelecao ? '' : 'group';

  const nextPage = () => {
    setScreen(Math.min(categories.length - 1, screen + 1));
  };

  const prevPage = () => {
    setScreen(Math.max(0, screen - 1));
  };

  return (
    <section key={Nome}>
      <h1>{Nome}</h1>

      <form>
        {
          Items.map(({ Nome, Peso }) => (
            <div key={Nome}>
              <label>
                <input name={inputName || Nome} value={Nome} type={inputType} onChange={setItemSelected(Nome)} />
                &nbsp;
                {Nome}
              </label>
            </div>
          ))
        }
      </form>

      <button onClick={prevPage} disabled={screen === 0}>Anterior</button>
      <button onClick={nextPage} disabled={screen === categories.length - 1}>Próximo</button>
    </section>
  );  
};

export default Form;
