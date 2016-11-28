var fs = require('fs')
var gulp = require('gulp')

module.exports = function (opts) {
  var conf = require(opts.cwd + '/package.json')
  var all = require(opts.root + '/static/task.json')

  require(opts.cwd + '/gulpfile')

  var gulpTasks = Object.keys(gulp.tasks);
  
  console.log('available gulp task:')
  console.log(gulpTasks);
  
  
  all.gulp = {
    prefix: 'gulp',
    tasks: gulpTasks
  }

  fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
}
