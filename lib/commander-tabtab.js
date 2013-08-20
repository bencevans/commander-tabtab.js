var tabtab = require('tabtab');

exports.init = function (program, binName) {
  if(process.argv.slice(2)[0] === 'completion') return tabtab.complete(binName, function(err, data) {
    // simply return here if there's an error or data not provided.
    // stderr not showing on completions
    if(err || !data) return;

    // Log all Generic Long Options
    if(/^--\w?/.test(data.last)) return tabtab.log(program.options.map(function (data) {
      return data.long;
    }), data);

    // Log all Generic Short Options
    if(/^-\w?/.test(data.last)) return tabtab.log(program.options.map(function (data) {
      return data.short;
    }), data);

    // Log all inital commands

    tabtab.log(program.commands.map(function (data) {
      return data._name;
    }), data);

  });
}