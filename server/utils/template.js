exports.template = (otp) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            /* Reset styles for email clients */
            body, p, h1, h2 {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: Arial, Helvetica, sans-serif;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #007BFF;
                color: #fff;
                text-align: center;
                padding: 20px 0;
            }
            h1 {
                font-size: 28px;
            }
            .message {
                padding: 20px;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 20px;
            }
            .verification-link {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007BFF;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
            }
            .footer {
                text-align: center;
                background-color: #f4f4f4;
                padding: 10px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="message">
                <p>Thank you for signing up with us. This is Your one time password ${otp}</p>
                <p>Please Do not share it any one else</p>
                <p>If you did not sign up for an account on Together please disregard this email.</p>
            </div>
            <div class="footer">
                <p>&copy; 2023 Together. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
