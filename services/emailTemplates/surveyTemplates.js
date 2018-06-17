const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div>
                    <h3>${survey.subject}<h3>
                    <div>${survey.body}</div>
                    <div><a href='${keys.redirectDomain}/api/surveys/success'>Yes</a></div>
                    <div><a href='${keys.redirectDomain}/api/surveys/success'>No</a></div>
                </div>
            </body>
        </html>
    `
}