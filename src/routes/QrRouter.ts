import { Router } from 'express';
import { QrComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', QrComponent.getQr);

router.get('/:id', QrComponent.findOne);

/**
 * @export {express.Router}
 */
export default router;
