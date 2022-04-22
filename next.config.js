const fs = require('fs')

const fetchAuthor = () => {
    const {author} = JSON.parse(fs.readFileSync("./package.json"))
    return author
}

module.exports = {
    env: {
        SECRET: 'my-secret',
        AUTHOR: "mayank srivastava"
    },
  }