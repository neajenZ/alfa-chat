import { createContext, useContext } from 'react';
import {foldersRoomStore, IStoreType} from '../store';
import {Folders} from "../ui/Folders";

const FoldersRoomContext = createContext<IStoreType | null>(null);

export const useFolderRoomStore = () => {
    const context = useContext(FoldersRoomContext);
    if (!context) {
        throw new Error('useFoldersRoomStore must be used within a FoldersRoomProvider');
    }
    return context;
};


export const FoldersRoomProvider = () => {
    return <FoldersRoomContext.Provider value={foldersRoomStore}><Folders /></FoldersRoomContext.Provider>;
};
