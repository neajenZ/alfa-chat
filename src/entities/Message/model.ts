type ISMessage = {
        isOutgoing: boolean,
        id: string,
        type: 'text' | 'voice',
        time: string,
        text?: string,
        audioUrl?: string,
        duration?: string
}



export type IMessage = | (ISMessage & { type: 'voice'; duration: string; audioUrl: string })
    | (ISMessage & { type: 'text', text: string; });