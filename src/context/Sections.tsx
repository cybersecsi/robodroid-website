import { createContext, useContext, useState } from 'react';
import { INavlink } from '@robodroid/types/context';

interface ProviderInterface {
  sections: INavlink[];
  setSections: (sections: INavlink[]) => void;
  scrollToSection: (sectionRef: React.MutableRefObject<any>) => void;
}

export const SectionsContext = createContext<ProviderInterface | null>(null);

const SectionsProvider = ({ children }: any): any => {
  const [sections, setSections] = useState<INavlink[]>([]);

  const scrollToSection = (sectionRef: React.MutableRefObject<any>) => {
    const yOffset = -80;
    const element = sectionRef.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <SectionsContext.Provider value={{ sections, setSections, scrollToSection }}>
      {children}
    </SectionsContext.Provider>
  );
};

const useSections = () => {
  const context = useContext(SectionsContext);
  if (!context) {
    throw new Error('useSections must be used within SectionsProvider');
  }
  return context;
};

export { SectionsProvider, useSections };
