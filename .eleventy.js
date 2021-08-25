const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const prettyDate = require('./src/filters/prettyDate')


module.exports = config => {

  config.addPlugin(syntaxHighlight)

  config.addFilter('prettyDate', prettyDate)

  config.addCollection('posts', collection => {
    return collection.getFilteredByGlob("./src/posts/*.md")
  })

  config.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md')
  })

  config.addPassthroughCopy('./**/*.png')

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    }
  }
}