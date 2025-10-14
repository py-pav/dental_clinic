import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  isAccessibilityMode: boolean;
  toggleAccessibilityMode: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);

  // Загружаем состояние из localStorage при загрузке
  useEffect(() => {
    const saved = localStorage.getItem('accessibilityMode');
    if (saved) {
      setIsAccessibilityMode(JSON.parse(saved));
    }
  }, []);

  // Сохраняем состояние в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('accessibilityMode', JSON.stringify(isAccessibilityMode));
  }, [isAccessibilityMode]);

  const toggleAccessibilityMode = () => {
    setIsAccessibilityMode(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ isAccessibilityMode, toggleAccessibilityMode }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};