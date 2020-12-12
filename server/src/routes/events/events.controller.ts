import { Request, Response, NextFunction } from 'express';
import Event from '../../models/Event';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const event = req.body;

    try {
        await Event.create(event);
    } catch (err) {
        switch (err.name) {
        case 'ValidationError':
        case 'MongooseError':
            return res.status(404).json({ success: false });
        default:
            return res.status(500).json({ success: false });
        }
    }

    res.json({
        success: true,
    });
};
