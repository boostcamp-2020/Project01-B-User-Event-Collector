import mongoose from 'mongoose';

interface IData {
    id: number,
    type: string,
}

interface IEvent extends mongoose.Document {
    event: string,
    platform: string, // Web or iOS
    userId?: number,
    timestamp: Date,
}

interface IClickEvent extends IEvent {
    componentId: string,
    page: string,
    targetPage?: string,
    data: IData,
}

interface ITransitionEvent extends IEvent {
    componentId?: string,
    page: string,
}

interface ISearchEvent extends IEvent {
    componentId?: string,
    page?: string,
    text: string,
}

interface ILikeEvent extends IEvent {
    componentId: string,
    data: IData,
    page?: string,
    isLike: boolean, // like or unlike
}

interface IShareEvent extends IEvent {
    componentId: string,
    page?: string,
    data: IData,
}

interface IAddToPlaylistEvent extends IEvent {
    componentId: string,
    page?: string,
    data: IData,
    playlistId: number,
}

// play event

interface IPlayEvent extends IEvent {
    componentId?: string,
    trackId: number,
    isPlay: boolean, // play or pause
}

interface IPlayNowEvent extends IEvent {
    componentId?: string,
    trackId: number,
    targetTrackId: number,
    playingProgress: number,
}

interface IUpNextChangeEvent extends IEvent {
    componentId?: String,
    trackId: number[],
}

interface ISaveEvent extends IEvent {
    componentId: string,
    data: {
        type: string,
        id: number
    },
}

export {
    IEvent, IClickEvent, ITransitionEvent, ISearchEvent, ILikeEvent, IShareEvent, IAddToPlaylistEvent,
    IPlayEvent, IPlayNowEvent, IUpNextChangeEvent, ISaveEvent,
};
