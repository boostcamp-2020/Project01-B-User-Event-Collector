import mongoose, { Schema } from 'mongoose';
import { IEvent, IClickEvent, ITransitionEvent } from '../types/event';

const options = {
    discriminatorKey: 'event',
    collection: 'event',
};

const eventSchema = new Schema({
    userId: { type: String },
    timestamp: { type: Date, required: true },
}, options);

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

const Event = mongoose.model<IEvent|IClickEvent|ITransitionEvent>('Event', eventSchema);
const ClickEvent = Event.discriminator<IClickEvent>('Click', new Schema(clickEventSchema, options));
const TransitionEvent = Event.discriminator<ITransitionEvent>('Transition', new Schema(transitionEventSchema, options));
const AppearEvent = Event.discriminator<ITransitionEvent>('Appear', new Schema(transitionEventSchema, options));
const DisAppearEvent = Event.discriminator<ITransitionEvent>('DisAppear', new Schema(transitionEventSchema, options));

// Event.create({
//     event: 'DisAppear',
//     timestamp: Date.now(),
//     userId: 1,
//     page: 'current page url',
//     // targetPage: 'next page url',
//     // componentId: 'component ID',
//     // data: {
//     //     id: 1,
//     //     type: 'artist',
//     // },
// });

export default Event;
