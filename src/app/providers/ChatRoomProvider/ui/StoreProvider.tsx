import { createContext, ReactNode, useContext, useMemo } from 'react';
import type { IStoreType } from '../store';

const ChatRoomContext = createContext<IStoreType | null>(null);

export const useChatRoomStore = () => {
  const context = useContext(ChatRoomContext);
  if (!context) {
    throw new Error('useChatRoomStore must be used within a ChatRoomProvider');
  }
  return context;
};

type ProviderProps = {
  children: ReactNode;
  store: IStoreType;
};

export const ChatRoomProvider = ({ children, store }: ProviderProps) => {
  const returnValue = useMemo(() => store, [store]);

  return <ChatRoomContext.Provider value={returnValue}>{children}</ChatRoomContext.Provider>;
};
