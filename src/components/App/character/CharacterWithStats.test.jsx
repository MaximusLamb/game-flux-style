import React from 'react';
import { shallow } from 'enzyme';
import CharacterWithStats from './CharacterWithStats';

describe('CharacterwithStats component', () => {
  it('renders CharacterWithStats', () => {
    const character = {
      image: 'www.image.image',
      health: 1000000000000,
      attack: 666,
      experience: 1
    };
    const wrapper = shallow(<CharacterWithStats character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
