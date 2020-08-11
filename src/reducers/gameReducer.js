

export const initialState = {
  character: {
    image: '',
    health: '',
    attack: '',
    experience: ''
  },
  enemy: {
    image: '',
    health: '',
    attack: '',
    experience: ''
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    default:
      return state;
  }
}
