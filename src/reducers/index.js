const initialState = {
  bookmarks: [
    {
      title: 'www.youtube.com/watch?v=WEkSYw3o5is',
      id: '12323',
      created: '20.02.2020',
      content: 'Funny cats on youtube',
    },
    {
      title: 'www.gismeteo.pl/weather-warsaw-3196',
      id: '3323',
      created: '22.02.2020',
      content: 'Weather forecast for Warsaw',
    },
    {
      title: 'www.allegro.pl.',
      id: '123',
      created: '24.02.2020',
      content: 'Website for online shopping',
    },
    {
      title: 'www.pepper.pl.',
      id: '13',
      created: '29.02.2020',
      content: 'Website with great discount',
    },
  ],
  notes: [
    {
      title: 'note 1',
      id: '14223',
      created: '20.02.2020',
      content:
        'Lorem ip123333333333333333333sum dolor sit amet, consectetur adipisicing elit. Dolore, ea expedita. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.',
    },
    {
      title: 'note 2',
      id: '152323',
      created: '19.12.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea expedita. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.',
    },
    {
      title: 'note 3',
      id: '145322353',
      created: '14.02.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea expedita. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum pceat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta dolceat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta dolceat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta dolceat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.. Porro aspernatur, non beatae similique dicta dollaceat id, atque molestiae.. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.',
    },
    {
      title: 'note 4',
      id: '132523523',
      created: '22.12.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea expedita. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.',
    },
    {
      title: 'note 5',
      id: '1432552323',
      created: '28.62.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea expedita. Porro aspernatur, non beatae similique dicta doloremque fuga reiciendis labore iusto quidem adipisci aliquid nostrum placeat id, atque molestiae.',
    },
  ],
  todos: [
    {
      title: 'Clean my room',
      id: '123213',
      created: '20.02.2020',
      deadline: '30.09.2021',
      content: 'Clean carpets, wash windows, put all books on shelf',
    },
    {
      title: 'finish Netflix series',
      id: '12413',
      created: '21.02.2020',
      deadline: '21.05.2020',
      content: 'Finish Witcher, start El Chapo',
    },
    {
      title: 'Do some shopping',
      id: '125313',
      created: '20.02.2020',
      deadline: '30.09.2021',
      content: 'Seems like I need some food like: bread,meat,cheese,water',
    },
    {
      title: 'Do some sports',
      id: '313',
      created: '20.02.2020',
      deadline: '30.09.2021',
      content: 'Points to achieve: lose weigth, make some muscles',
    },
  ],
  timers: [
    {
      id: '2931',
      title: 'work with project',
      created: '11.04.2020',
      content: 243,
    },
    {
      id: '212',
      title: 'learning new technology',
      created: '01.04.2020',
      content: 1243,
    },
    {
      id: '131',
      title: 'work with project for client',
      created: '11.04.2020',
      content: 32243,
    },
    {
      id: '3931',
      title: 'preparing datas for client',
      created: '15.04.2020',
      content: 13243,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item.id !== action.payload.id,
          ),
        ],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
