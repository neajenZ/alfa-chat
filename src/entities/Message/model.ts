type ISMessage = {
        isOutgoing: boolean,
        id: string,
        type: 'text' | 'voice' | 'reply',
        time: string,
        text?: string,
        audioUrl?: string,
        replyMessage?: string,
        duration?: string
}



export type IMessage = | (ISMessage & { type: 'voice'; duration: string; audioUrl: string })
    | (ISMessage & { type: 'reply'; replyMessage: string })
    | (ISMessage & { type: 'text', text: string; });