import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Stats from '../../stats/Stats';
const chance = require('chance').Chance();

const CharacterWithStats = ({ character }) => {

  const randomNum = chance.integer({ min: 200, max: 500 });
  const randomName = chance.first({ nationality: 'us' });
  const url = `http://placekitten.com/${randomNum}/${randomNum}`;

  return (
    <section>
      <Character image={url}/>
      <Stats
        name={randomName}
        health={character.health}
        attack={character.attack}
        experience={character.experience}
      />
    </section>
  );
};

CharacterWithStats.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired
  })
};

export default CharacterWithStats;
