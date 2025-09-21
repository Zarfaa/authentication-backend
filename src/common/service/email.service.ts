import sgMail, { MailDataRequired } from "@sendgrid/mail";
import dotenv from "dotenv";
import { signupConfirmTemplate } from "../templates/signupConfirm.template.js";
import { forgotPasswordTemplate } from "../templates/forgotPassword.template.js";
import { passwordResetSuccessTemplate } from "../templates/passwordResetSuccess.template.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type EmailTemplateType = "SIGNUP_CONFIRM" | "FORGOT_PASSWORD" | "PASSWORD_RESET_SUCCESS";

export const sendEmail = async (
  to: string,
  username: string,
  linkOrOtp: string,
  type: EmailTemplateType
) => {
  const companyName = process.env.COMPANY_NAME || "My Company";

  const colors = {
    primary: process.env.COLOR_PRIMARY || "#2907CA",
    secondary: process.env.COLOR_SECONDARY || "#EAE6FE",
    background: process.env.COLOR_BACKGROUND || "#F8F8F8",
  };
  let subject = "";
  let html = "";

  switch (type) {
    case "SIGNUP_CONFIRM":
      ({ subject, html } = signupConfirmTemplate(username, linkOrOtp, companyName, colors));
      break;
    case "FORGOT_PASSWORD":
      ({ subject, html } = forgotPasswordTemplate(username, linkOrOtp, companyName, colors));
      break;
    case "PASSWORD_RESET_SUCCESS":
      ({ subject, html } = passwordResetSuccessTemplate(username, linkOrOtp, companyName, colors));
      break;
    default:
      throw new Error("Invalid email template type");
  }

  const msg: MailDataRequired = {
    to,
    from: process.env.EMAIL_FROM!,
    subject,
    html,
  };

  await sgMail.send(msg);
};
