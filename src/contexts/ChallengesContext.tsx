import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProvider {
  children: ReactNode;
}

export function ChallengesProvider({ children } : ChallengesProvider) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp }}>
      { children }
    </ChallengesContext.Provider>
  );
}