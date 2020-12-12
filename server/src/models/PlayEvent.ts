import mongoose, { Schema } from 'mongoose';
import {
    IEvent, IPlayEvent, IPlayNowEvent, IUpNextChangeEvent, ISaveEvent,
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

const Event = mongoose.model<IEvent|IPlayEvent|IPlayNowEvent|IUpNextChangeEvent|ISaveEvent>('PlayEvent', new Schema(eventSchema, options));

// Play/Pause Event
const PlayEvent = Event.discriminator<IPlayEvent>('Play', new Schema(playEventSchema, options));

// PlayNow Event
const PlayNowEvent = Event.discriminator<IPlayNowEvent>('PlayNow', new Schema(playNowEventSchema, options));

// UpNextChange Event
const AddToUpnextEvent = Event.discriminator<IUpNextChangeEvent>('AddToUpnext', new Schema(upNextChangeSchema, options));
const RemoveFromUpnext = Event.discriminator<IUpNextChangeEvent>('RemoveFromUpnext', new Schema(upNextChangeSchema, options));

// Save Event
const SaveEvent = Event.discriminator<ISaveEvent>('Save', new Schema(saveEventSchema, options));

Event.create({
    platform: 'iOS',
    event: 'Save',
    componentId: 'comp_id',
    timestamp: Date.now(),
    userId: 1,
    data: { type: 'track', id: 1 },
});

export default Event;
