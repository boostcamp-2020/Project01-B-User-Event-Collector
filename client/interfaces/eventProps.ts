import React, { ReactNode, MouseEvent, ComponentType } from 'react';

export interface TransitionEventProps {
    event: string;
    _id: string;
    userId?;
    page: string;
    platform: string;
    timestamp: string;
    __v: number;
}

export interface ClickEventProps {
    event: string;
    _id: string;
    userId?;
    page: string;
    targetPage?: string;
    componentId: string;
    platform: string;
    timestamp: string;
    __v: number;
}

export interface LikeEventProps {
    event: string;
    _id: string;
    userId: string;
    isLike: boolean;
    componentId: string;
    data: {
        type: string;
        id: number;
    };
    platform: string;
    timestamp: string;
    __v: number;
}

export interface AppearEventProps {
    event: string;
    userId: string;
    componentId: string;
    page: string;
    platform: string;
    timestamp: string;
}

export interface DisappearEventProps {
    event: string;
    userId: string;
    componentId: string;
    page: string;
    platform: string;
    timestamp: string;
}

export interface TabViewTransitionEventProps {
    event: string;
    userId: string;
    componentId: string;
    page: string;
    platform: string;
    timestamp: string;
}

export interface BackgroundEventProps {
    event: string;
    userId: string;
    platform: string;
    timestamp: string;
}

export interface ActiveEventProps {
    event: string;
    userId: string;
    platform: string;
    timestamp: string;
}

export interface SearchEventProps {
    event: string;
    userId: string;
    componentId: string;
    text: string;
    platform: string;
    timestamp: string;
}

export interface SubscribeEventProps {
    event: string;
    userId: string;
    componentId: string;
    platform: string;
    timestamp: string;
}

export interface TerminateEventProps {
    event: string;
    userId: string;
    platform: string;
    timestamp: string;
}

/* 재생 관련 이벤트 */

export interface PlayEventProps {
    componentId: string;
    event: string;
    isPlay: boolean;
    platform: string;
    timestamp: string;
    trackId: number;
    userId: string;
    __v: number;
    _id: string;
}

export interface AddToUpnextEventProps {
    componentId: string;
    event: string;
    platform: string;
    timestamp: string;
    trackId: number[];
    userId: string;
    __v: number;
    _id: string;
}

export interface MoveTrackEventProps {
    destination: number;
    event: string;
    platform: string;
    source: number;
    timestamp: string;
    trackId: number;
    userId: string;
    __v: number;
    _id: string;
}

export interface RemoveFromUpnextEventProps {
    componentId: string;
    event: string;
    platform: string;
    timestamp: string;
    trackId: number[];
    userId: string;
    __v: number;
    _id: string;
}

export interface SaveEventProps {
    event: string;
    userId: number;
    componentId: string;
    data: {
        type: string;
        id: number;
    },
    timestamp: string;
}