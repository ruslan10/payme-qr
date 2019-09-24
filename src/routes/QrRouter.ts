import { Router } from 'express';
import { QrComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/qr
 *
 * @swagger
 * /qr:
 *   get:
 *     description: Get qr
 *     tags: ["qr"]
 *     responses:
 *       200:
 *         description: sample
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Qr'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', QrComponent.getQr);

/**
 * GET method route
 * @example http://localhost:PORT/qr/:id
 *
 * @swagger
 * /qr:
 *   get:
 *     description: Get qr
 *     tags: ["qr"]
 *     responses:
 *       200:
 *         description: sample
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Qr'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/:id', QrComponent.findOne);

/**
 * @export {express.Router}
 */
export default router;
