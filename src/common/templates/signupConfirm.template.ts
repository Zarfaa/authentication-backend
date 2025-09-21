export const signupConfirmTemplate = (
  username: string,
  link: string,
  companyName: string,
  colors: { primary: string; secondary: string; background: string }
) => {
  const subject = `${companyName}: Confirm Your Email`;
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: ${colors.background}; padding: 20px; text-align: center;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: ${colors.primary}; padding: 24px; border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: center;">
          <h1 style="color: ${colors.secondary}; font-size: 24px; font-weight: bold; margin: 0;">${companyName}</h1>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: ${colors.primary}; font-size: 20px; font-weight: bold; margin-bottom: 20px;">Hi ${username},</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            Welcome to <b>${companyName}</b>! Please confirm your email to activate your account.
          </p>
          
          <div style="margin: 30px 0;">
            <a href="${link}" target="_blank"
               style="background-color: ${colors.primary}; color: #fff; text-decoration: none; 
                      padding: 14px 28px; font-size: 16px; font-weight: bold; 
                      border-radius: 6px; display: inline-block;">
              Confirm Email
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  return { subject, html };
};
