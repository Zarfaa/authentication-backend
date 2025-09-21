export const forgotPasswordTemplate = (
  username: string,
  otp: string,
  companyName: string,
  colors: { primary: string; secondary: string; background: string }
) => {
  const subject = `${companyName}: Your Password Reset Code`;
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: ${colors.background}; padding: 20px; text-align: center;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: ${colors.primary}; padding: 24px; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;">
          <h1 style="color: ${colors.secondary}; font-size: 24px; font-weight: bold; margin: 0;">${companyName}</h1>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: ${colors.primary}; font-size: 20px; font-weight: bold; margin-bottom: 20px;">Hi ${username},</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            We received a request to reset your password. Use the code below to complete the process:
          </p>
          
          <div style="background-color: ${colors.secondary}; color: ${colors.primary}; font-size: 32px; font-weight: bold; padding: 15px 25px; border-radius: 8px; margin: 25px auto; width: fit-content;">
            ${otp}
          </div>
          
          <p style="font-size: 14px; color: #555; margin-top: 20px;">
            This code will expire in <b style="color: ${colors.primary};">10 minutes</b>.
          </p>
          <p style="font-size: 14px; color: #555;">
            If you did not request a password reset, you can safely ignore this email.
          </p>
        </div>
      </div>
    </div>
  `;
  return { subject, html };
};
