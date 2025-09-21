import { Router } from 'express';
import { register, confirmEmail, login, resendConfirmation, sendOtp, verifyOtp, resetPassword } from './auth.controller.js';
import { validateRegister } from './middleware/validation.middleware.js';

const router = Router();

router.post('/register', validateRegister, register);
router.get('/confirm', confirmEmail);
router.post('/resend-confirmation', resendConfirmation);
router.post('/login', login);
router.post('/forget-password/send-otp', sendOtp);
router.post('/forget-password/verify-otp', verifyOtp);
router.post('/forget-password/reset', resetPassword);

export default router;
