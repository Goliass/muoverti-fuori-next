import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile () {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/18060247" alt="Imagem do perfil de Elías"/>
      <div>
        <strong>Elías</strong>
        <p>
          <img src="icons/level.svg" alt="ícone de level"/>
          Level {level}</p>
      </div>
    </div>
  );
}