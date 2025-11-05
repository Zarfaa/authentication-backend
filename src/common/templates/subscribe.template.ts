export const subscribePromptTemplate = (
    username: string,
    subscribeLink: string,
    companyName: string,
    colors: { primary: string; secondary: string; background: string }
) => {
    const subject = `${companyName}: Stay in the loop with our latest updates!`;
    const html = `
    <div style="font-family: Arial, sans-serif; background-color: ${colors.background}; padding: 20px; text-align: center;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: ${colors.primary}; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: ${colors.secondary}; margin: 0;">${companyName}</h1>
        </div>

        <div style="padding: 30px;">
          <h2 style="color: ${colors.primary}; margin-bottom: 20px;">Hi ${username},</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            We’re excited to have you on board! Would you like to receive emails about 
            new features, product updates, and exclusive offers?
          </p>

          <div style="margin: 30px 0;">
            <a href="${subscribeLink}" target="_blank"
               style="background-color: ${colors.primary}; color: #fff; text-decoration: none;
                      padding: 14px 28px; font-size: 16px; font-weight: bold;
                      border-radius: 6px; display: inline-block;">
              Yes, keep me updated
            </a>
          </div>

          <p style="font-size: 14px; color: #555;">
            You can unsubscribe anytime — no hard feelings 😊
          </p>
        </div>
      </div>
    </div>
  `;
    return { subject, html };
};
