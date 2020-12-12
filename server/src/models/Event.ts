import mongoose, { Schema } from 'mongoose';
import {
    IEvent, IClickEvent, ITransitionEvent, ISearchEvent, ILikeEvent, IShareEvent,
} from '../types/event';

const options = {
    discriminatorKey: 'event',
    collection: 'event',
};

const eventSchema = {
    userId: { type: String },
    platform: { type: String, required: true },
    timestamp: { type: Date, required: true },
};

const dataSchema = new Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
}, { _id: false });

const clickEventSchema = {
    componentId: { type: String, required: true },
    page: { type: String, required: true },
    targetPage: { type: String },
    data: { type: dataSchema, required: true },
};

const transitionEventSchema = {
    componentId: { type: String },
    page: { type: String, required: true },
};

const searchEventSchema = {
    componentId: { type: String },
    page: { type: String },
    text: { type: String, required: true },
};

const likeEventSchema = {
    componentId: { type: String, required: true },
    data: { type: dataSchema, required: true },
    isLike: { type: Boolean, required: true },
};

const shareEventSchema = {
    componentId: { type: String, required: true },
    data: { type: dataSchema, required: true },
};

const Event = mongoose.model<IEvent|IClickEvent|ITransitionEvent|ISearchEvent|ILikeEvent|IShareEvent>('Event', new Schema(eventSchema, options));

// Click Event
const ClickEvent = Event.discriminator<IClickEvent>('Click', new Schema(clickEventSchema, options));

// Transition Event
const TransitionEvent = Event.discriminator<ITransitionEvent>('Transition', new Schema(transitionEventSchema, options));
const AppearEvent = Event.discriminator<ITransitionEvent>('Appear', new Schema(transitionEventSchema, options));
const DisAppearEvent = Event.discriminator<ITransitionEvent>('DisAppear', new Schema(transitionEventSchema, options));
const TabViewTransitionEvent = Event.discriminator<ITransitionEvent>('TabViewTransition', new Schema(transitionEventSchema, options));

// Search Event
const SearchEvent = Event.discriminator<ISearchEvent>('Search', new Schema(searchEventSchema, options));

// Like Event
const LikeEvent = Event.discriminator<ILikeEvent>('Like', new Schema(likeEventSchema, options));

// Share Event
const shareEvent = Event.discriminator<IShareEvent>('Share', new Schema(shareEventSchema, options));

// Engagement Event
const ActiveEvent = Event.discriminator<IEvent>('Active', new Schema(eventSchema, options));
const BackgroundEvent = Event.discriminator<IEvent>('Background', new Schema(eventSchema, options));
const TerminateEvent = Event.discriminator<IEvent>('Terminate', new Schema(eventSchema, options));

Event.create({
    platform: 'Web',
    event: 'Share',
    componentId: 'comp_id',
    timestamp: Date.now(),
    userId: 1,
    // componentId: 'library-playlist',
    // data: { type: 'playlist', id: 1 },
    // isLike: true,
    // targetPage: 'next page url',
    // componentId: 'component ID',
    data: {
        id: 1,
        type: 'artist',
    },
});

export default Event;
