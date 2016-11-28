var fs = require('fs')
var gulp = require('gulp')

module.exports = function (opts) {
  var all = require(opts.root + '/static/task.json')
  
  if (fs.existsSync(opts.cwd + '/Gulpfile.js')) {
    require(opts.cwd + '/gulpfile')

    var gulpTasks = Object.keys(gulp.tasks);
  
    console.log('available gulp task:')
    console.log(gulpTasks);

    all.tasks.gulp = {
      prefix: 'gulp',
      tasks: gulpTasks
    }

    fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
  } else {
    all.tasks.gulp = {

    }

    fs.writeFileSync(opts.root + '/static/task.json',  JSON.stringify(all, null, 4))
  }
}
