import mailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";
import { logger } from "onefx/lib/integrated-gateways/logger";

type MailgunOpts = {
  retryLimit: number;
  apiKey: string;
  domain: string;
};

type Mail = {
  from: string;
  to: string | Array<string>; // An array if you have multiple recipients.
  subject: string;
  "h:Reply-To"?: string;
  html: string;
};

export class Mailgun {
  public opts: MailgunOpts;

  public transporter: mailer.Transporter;

  constructor(opts: MailgunOpts) {
    this.opts = opts;
    this.transporter = mailer.createTransport(
      mg({
        auth: {
          api_key: opts.apiKey,
          domain: opts.domain
        }
      })
    );
  }

  public async sendMail(data: Mail): Promise<void> {
    for (let i = this.opts.retryLimit; i > 0; i -= 1) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await this.transporter.sendMail(data);
        return;
      } catch (e) {
        logger.error(`failed to Mailgun.sendMail: ${e}`);
      }
    }
  }
}
