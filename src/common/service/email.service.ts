import sgMail, { MailDataRequired } from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is missing in .env");
}
if (!process.env.EMAIL_FROM) {
  throw new Error("EMAIL_FROM is missing in .env");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type EmailTemplateType = "SIGNUP_CONFIRM" | "FORGOT_PASSWORD" | "PASSWORD_RESET_SUCCESS";

export const sendEmail = async (
  to: string,
  username: string,
  linkOrOtp: string,
  type: EmailTemplateType
) => {
  let subject = "";
  let html = "";

  switch (type) {
    case "SIGNUP_CONFIRM":
      subject = "Analytics Auditor: Confirm Your Email";
      html = `
      <div style="font-family: Arial, sans-serif; background-color: #F8F8F8; padding: 20px; text-align: center;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #19047B; padding: 24px; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;">
            <h1 style="color: #EAE6FE; font-size: 24px; font-weight: bold; margin: 0;">Analytics Auditor</h1>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #2907CA; font-size: 20px; font-weight: bold; margin-bottom: 20px;">Hi ${username},</h2>
            <p style="font-size: 16px; color: #333; line-height: 1.5;">
              Welcome to <b>Analytics Auditor</b>! Please confirm your email to activate your account.
            </p>
            
            <div style="margin: 30px 0;">
              <a href="${linkOrOtp}" target="_blank"
                 style="background-color: #2907CA; color: #fff; text-decoration: none; 
                        padding: 14px 28px; font-size: 16px; font-weight: bold; 
                        border-radius: 6px; display: inline-block;">
                Confirm Email
              </a>
            </div>
            
            <p style="font-size: 14px; color: #555;">
              Or copy and paste this link into your browser:<br>
              <a href="${linkOrOtp}" style="color: #2306AD;">${linkOrOtp}</a>
            </p>
          </div>
          
          <div style="background-color: #F8F8F8; padding: 20px; font-size: 12px; color: #999; border-top: 1px solid #eee; border-radius: 0 0 8px 8px;">
            &copy; ${new Date().getFullYear()} Analytics Auditor. All rights reserved.
          </div>
        </div>
      </div>
      `;
      break;

    case "FORGOT_PASSWORD":
      subject = "Analytics Auditor: Your Password Reset Code";
      html = `
      <div style="font-family: Arial, sans-serif; background-color: #F8F8F8; padding: 20px; text-align: center;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #19047B; padding: 24px; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;">
            <h1 style="color: #EAE6FE; font-size: 24px; font-weight: bold; margin: 0;">Analytics Auditor</h1>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #2907CA; font-size: 20px; font-weight: bold; margin-bottom: 20px;">Hi ${username},</h2>
            <p style="font-size: 16px; color: #333; line-height: 1.5;">
              We received a request to reset your password. Use the code below to complete the process.
            </p>
            
            <div style="background-color: #EAE6FE; color: #2907CA; font-size: 32px; font-weight: bold; padding: 15px 25px; border-radius: 8px; margin: 25px auto; width: fit-content;">
              ${linkOrOtp}
            </div>
            
            <p style="font-size: 14px; color: #555; margin-top: 20px;">
              This code will expire in <b style="color: #2306AD;">10 minutes</b>.
            </p>
            <p style="font-size: 14px; color: #555;">
              If you did not request a password reset, you can safely ignore this email.
            </p>
          </div>
          
          <div style="background-color: #F8F8F8; padding: 20px; font-size: 12px; color: #999; border-top: 1px solid #eee; border-radius: 0 0 8px 8px;">
            &copy; ${new Date().getFullYear()} Analytics Auditor. All rights reserved.
          </div>
        </div>
      </div>
      `;
      break;

    case "PASSWORD_RESET_SUCCESS":
      subject = "Analytics Auditor: Password Reset Successful";
      html = `
      <div style="font-family: Arial, sans-serif; background-color: #F8F8F8; padding: 20px; text-align: center;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #19047B; padding: 24px; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;">
            <h1 style="color: #EAE6FE; font-size: 24px; font-weight: bold; margin: 0;">Analytics Auditor</h1>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #2907CA; font-size: 20px; font-weight: bold; margin-bottom: 20px;">Hi ${username},</h2>
            <p style="font-size: 16px; color: #333; line-height: 1.5;">
              Your password has been <b>reset successfully</b>. You can now log in securely using your new password.
            </p>
            
            <div style="margin: 30px 0;">
              <a href="${process.env.CLIENT_URL}/api/auth/" target="_blank"
                 style="background-color: #2907CA; color: #fff; text-decoration: none; 
                        padding: 14px 28px; font-size: 16px; font-weight: bold; 
                        border-radius: 6px; display: inline-block;">
                Go to Login
              </a>
            </div>
            
            <p style="font-size: 14px; color: #555;">
              If this wasn’t you, please reset your password immediately or contact support.
            </p>
          </div>
          
          <div style="background-color: #F8F8F8; padding: 20px; font-size: 12px; color: #999; border-top: 1px solid #eee; border-radius: 0 0 8px 8px;">
            &copy; ${new Date().getFullYear()} Analytics Auditor. All rights reserved.
          </div>
        </div>
      </div>
      `;
      break;

    default:
      throw new Error("Invalid email template type");
  }

  const msg: MailDataRequired = {
    to,
    from: process.env.EMAIL_FROM as string,
    subject,
    html,
  };

  await sgMail.send(msg);
};
