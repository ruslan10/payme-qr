import {NextFunction, Request, Response} from 'express';
import HttpError from '../../config/error';
import {QRCode} from 'qrcode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function getQr(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // const users: IUserModel[] = await UserService.findAll();
    res.status(200).json('getQr work');
  } catch (error) {
    next(new HttpError(error.message.status, error.message));
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.status(200).json(req.params.id);
}
