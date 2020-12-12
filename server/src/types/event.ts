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
    isLike: boolean, // like or unlike
}

interface IShareEvent extends IEvent {
    componentId: string,
    data: IData,
}

interface IAddTopUpNextEvent extends IEvent {
    componenId: string,
    data: IData,
}

interface IPlayControlEvent extends IEvent {
    trackId: number,
}

export {
    IEvent, IClickEvent, ITransitionEvent, ISearchEvent, ILikeEvent, IShareEvent,
};
