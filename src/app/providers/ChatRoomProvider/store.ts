import { makeAutoObservable } from 'mobx';
import {IUserDrawer} from "@providers/ChatRoomProvider/model.ts";

type IDrawers = 'user' | 'sticker' | 'gif' | 'reply'

type Drawers = Record<IDrawers, boolean>

class ChatRoomStore {
  drawers: Drawers = {
    gif: false,
    reply: false,
    sticker: false,
    user: false
  };
  mode: 'default' | 'edit' = 'default';
  selectedMessages: string[] = [];
  isSearchSticker: boolean = false;
  drawerActive: IUserDrawer | null = null;
  inputMessage: string = ''
  inputImages: FileList | null = null
  inputFiles: FileList | null = null

  constructor() {
    makeAutoObservable(this);
  }

  addSelectedMessages = (value: string) => {
    console.log(value)
    this.selectedMessages.push(value)
  }

  deleteSelectedMessages = (value: string) => {
    const index = this.selectedMessages.indexOf(value);
    if (index !== -1) {
      this.selectedMessages.splice(index, 1);
    }
  }

  handleOpenDrawers = (type: IDrawers, value: boolean)  => {
    const keys: Array<keyof Drawers> = Object.keys(this.drawers) as Array<keyof Drawers>;
    keys.forEach((i) => {
      this.drawers[i] = i === type ? value : false
    })
  }

  setInputFiles = (value: FileList | null) => {
    this.inputFiles = value
  }

  handleOpenStickers = (value: boolean) => {
    this.isSearchSticker = value
  }

  setInputImages = (value: FileList | null) => {
    this.inputImages = value
  }

  setMessage = (value: string) => {
    this.inputMessage = value
  }

  changeMode = (value: 'edit' | 'default') => {
    this.mode = value
}

  closeDrawer = () => {
    this.drawerActive = null
  }
}

export const chatRoomStore = new ChatRoomStore();
export type IStoreType = typeof chatRoomStore;
