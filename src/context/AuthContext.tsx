import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  company: string;
  plan: 'Starter' | 'Professional' | 'Enterprise';
  avatar: string;
  workspace: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  signup: (name: string, email: string, pass: string, company: string) => Promise<boolean>;
  logout: () => void;
  quickDemoLogin: () => void;
  updateUser: (fields: Partial<UserProfile>) => void;
}

const STORAGE_KEY = 'ikorex_saas_user_session';

const DEFAULT_DEMO_USER: UserProfile = {
  name: 'Alex Vance',
  email: 'alex.vance@enterprise.com.au',
  role: 'Operations Lead',
  company: 'Vance Logistics Australia',
  plan: 'Professional',
  avatar: 'AV',
  workspace: 'Vance HQ (Melbourne)'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // LocalStorage access handling
    }
  }, [user]);

  const login = async (email: string, _pass: string): Promise<boolean> => {
    // Simulated authentication verification
    const newUser: UserProfile = {
      name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, c => c.toUpperCase()),
      email,
      role: 'System Administrator',
      company: 'iKOREX Enterprise Client',
      plan: 'Professional',
      avatar: email.substring(0, 2).toUpperCase(),
      workspace: 'Default Workspace'
    };
    setUser(newUser);
    return true;
  };

  const signup = async (name: string, email: string, _pass: string, company: string): Promise<boolean> => {
    const newUser: UserProfile = {
      name,
      email,
      role: 'Workspace Owner',
      company: company || 'Enterprise Team',
      plan: 'Professional',
      avatar: name.substring(0, 2).toUpperCase(),
      workspace: `${company || name}'s Workspace`
    };
    setUser(newUser);
    return true;
  };

  const quickDemoLogin = () => {
    setUser(DEFAULT_DEMO_USER);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (fields: Partial<UserProfile>) => {
    setUser(prev => (prev ? { ...prev, ...fields } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        quickDemoLogin,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
