import { Request, Response, NextFunction } from 'express';
import Event from '../../models/PlayEvent';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const event = req.body;

    try {
        await Event.create(event);
    } catch (err) {
        switch (err.name) {
        case 'ValidationError':
            return res.status(404).json({ success: false, message: 'Invalid Parameters' });
        case 'MongooseError':
            return res.status(404).json({ success: false, message: 'Invalid Event name' });
        default:
            return res.status(500).json({ success: false });
        }
    }

    res.json({
        success: true,
    });
};
