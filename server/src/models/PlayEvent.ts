import mongoose, { Schema } from 'mongoose';
import {
    IEvent, IPlayEvent, IPlayNowEvent, IUpNextChangeEvent, ISaveEvent, ISubscribeEvent, IMoveTrack,
} from '../types/event';

const options = {
    discriminatorKey: 'event',
    collection: 'playEvent',
};

const eventSchema = {
    userId: { type: String },
    platform: { type: String, required: true },
    timestamp: { type: Date, required: true },
};

const playEventSchema = {
    componentId: { type: String },
    trackId: { type: Number, required: true },
    isPlay: { type: Boolean, required: true },
};

const playNowEventSchema = {
    componentId: { type: String },
    trackId: { type: Number, required: true },
    targetTrackId: { type: Number, required: true },
    playingProgress: { type: Number, required: true },
};

const upNextChangeSchema = {
    componentId: { type: String },
    trackId: { type: [Number], required: true },
};

const dataSchema = new Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
}, { _id: false });

const saveEventSchema = {
    componentId: { type: String, required: true },
    data: { type: dataSchema, required: true },
};

const moveTrackEventSchema = {
    trackId: { type: Number, required: true },
    source: { type: Number, required: true },
    destination: { type: Number, required: true },
};

const subscribeEventSchema = {
    componentId: { type: String, required: true },
};

const Event = mongoose.model<IEvent|IPlayEvent|IPlayNowEvent|IUpNextChangeEvent|ISaveEvent|ISubscribeEvent|IMoveTrack>('PlayEvent', new Schema(eventSchema, options));

// Play/Pause Event
const PlayEvent = Event.discriminator<IPlayEvent>('Play', new Schema(playEventSchema, options));

// PlayNow Event
const PlayNowEvent = Event.discriminator<IPlayNowEvent>('PlayNow', new Schema(playNowEventSchema, options));

// UpNextChange Event
const AddToUpnextEvent = Event.discriminator<IUpNextChangeEvent>('AddToUpnext', new Schema(upNextChangeSchema, options));
const RemoveFromUpnext = Event.discriminator<IUpNextChangeEvent>('RemoveFromUpnext', new Schema(upNextChangeSchema, options));

// Save Event
const SaveEvent = Event.discriminator<ISaveEvent>('Save', new Schema(saveEventSchema, options));

// MoveTrack Event
const MoveTrackEvent = Event.discriminator<IMoveTrack>('MoveTrack', new Schema(moveTrackEventSchema, options));

// Subscribe Event
const SubscribeEvent = Event.discriminator<ISubscribeEvent>('Subscribe', new Schema(subscribeEventSchema, options));

export default Event;