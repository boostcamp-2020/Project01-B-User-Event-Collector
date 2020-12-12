import mongoose, { Schema } from 'mongoose';
import {
    IEvent, IClickEvent, ITransitionEvent, ISearchEvent, ILikeEvent, IShareEvent,
    IAddToPlaylistEvent,
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
    page: { type: String },
    isLike: { type: Boolean, required: true },
};

const shareEventSchema = {
    componentId: { type: String, required: true },
    page: { type: String },
    data: { type: dataSchema, required: true },
};

const addToPlaylistSchema = {
    componentId: { type: String, required: true },
    page: { type: String },
    data: { type: dataSchema, required: true },
    playlistId: { type: Number, required: true },
};

const Event = mongoose.model<IEvent|IClickEvent|ITransitionEvent|ISearchEvent|ILikeEvent|IShareEvent|IAddToPlaylistEvent>('Event', new Schema(eventSchema, options));

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

// AddToPlaylist Event
const AddToPlaylsitEvent = Event.discriminator<IAddToPlaylistEvent>('AddToPlaylsit', new Schema(addToPlaylistSchema, options));

export default Event;
