import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: JwtPayload;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const token = req.headers['authorization']?.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'hadi Unauthorized' });
      }
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
      if (!decoded || !decoded.userId) {
        return res.status(401).json({ message: 'Unauthorized: Invalid payload' });
      }

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: '2 Unauthorized' });
    }
  }
}