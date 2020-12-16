import { Request, Response, NextFunction } from 'express';
import Event from '../../models/Event';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const event = req.body;

    try {
        const a = await Event.create(event);
        console.log(a);
    } catch (err) {
        switch (err.name) {
        case 'ValidationError':
            return res.status(400).json({ success: false, message: 'Invalid Parameters' });
        case 'MongooseError':
            return res.status(400).json({ success: false, message: 'Invalid Event name' });
        default:
            return res.status(500).json({ success: false });
        }
    }

    return res.json({
        success: true,
    });
};

export const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await Event.find({}).sort({ timestamp: -1 });
        return res.json({
            success: true,
            data,
        });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};
