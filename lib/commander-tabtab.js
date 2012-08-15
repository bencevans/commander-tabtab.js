var tabtab = require('tabtab'),
_ = require('underscore');


exports.init = function (program, binName) {
  if(process.argv.slice(2)[0] === 'completion') return tabtab.complete(binName, function(err, data) {
    // simply return here if there's an error or data not provided.
    // stderr not showing on completions
    if(err || !data) return;

    // Log all Generic Long Options
    if(/^--\w?/.test(data.last)) return tabtab.log(_.map(program.options, function (data) {
      return data.long;
    }), data);

    // Log all Generic Short Options
    if(/^-\w?/.test(data.last)) return tabtab.log(_.map(program.options, function (data) {
      return data.short;
    }), data);

    // Log all inital commands

    tabtab.log(_.map(program.commands, function (data) {
      return data.name;
    }), data);

  });
}