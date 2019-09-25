import {NextFunction, Request, Response} from 'express';
import HttpError from '../../config/error';
import * as qrcode from 'qrcode';

/**
 * Asaf | Rotem
//https://www.npmjs.com/package/qrcode#usage
*/

// With async/await
const generateQR = async (text: string) => {
  try {
    console.log(await qrcode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function getQr(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // const q = await generateQR('test qr');

    // const users: IUserModel[] = await UserService.findAll();
    // res.status(200).json(q);
    const data = await generateQR('test qr');
    // const img = new Buffer(data, 'base64');

    res.writeHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(data);
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
