import { makeAutoObservable } from 'mobx';


class FoldersRoomStore {
    users: unknown[] = [];
    isSearchChat: boolean = false;
    title: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearchChat = (value: boolean) => {
        this.isSearchChat = value
    }

    setTitle = (value: string) => {
        this.title = value
    }
}

export const foldersRoomStore = new FoldersRoomStore();
export type IStoreType = typeof foldersRoomStore;
