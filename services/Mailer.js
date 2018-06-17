const sendgrid = require ('sendgrid');
const helper = sendgrid.mail;
const Keys = require('../config/dev')

class Mailer extends helper.Mail{
    constructor({ subject, recipients }, content){
        super();
        this.sgiAPI = sendgrid(Keys.sendGridKey)
        this.from_email = new helper.Email('noreply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content( 'text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body) 
        this.addLinkTracking()
        this.addRecipients()
    }    


    formatAddresses(recipients){
      return recipients.map(({email}) => {
            return new helper.Email(email)
        })
    }

    addLinkTracking() {
        const trackingSetting = new helper.TrackingSettings()
        const clickTracking = new helper.ClickTracking(true, true)

        trackingSetting.setClickTracking(clickTracking)
        this.addTrackingSettings(trackingSetting)
    }

    addRecipients() {
        const personalize = new helper.Personalization()
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        })
        this.addPersonalization(personalize)
    }

    async send() {
        const request = this.sgiAPI.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        })

        const response = await this.sgiAPI.API(request);
        return response;
    }

}

module.exports = Mailer;