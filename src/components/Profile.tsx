import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/46464433?s=400&u=ab72001584ad39e758f5cc92ce25dad33085a20a&v=4" alt="Luciano Silva"/>
            <div>
                <strong>Luciano Silva</strong>
                <p>
                    {/* os arquivos dentro da public ficam visiveis diretamente aqui  */}
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}