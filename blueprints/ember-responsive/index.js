/* jshint node: true */

const EOL = require('os').EOL;

module.exports = {
  description: 'Generates ember-responsive test helper',

  afterInstall: function() {

    const TEST_HELPER_PATH = 'tests/test-helper.js';
    const IMPORT_STATEMENT = EOL + "import './helpers/responsive';";
    const INSERT_AFTER = "import resolver from './helpers/resolver';";

    this.insertIntoFile(TEST_HELPER_PATH, IMPORT_STATEMENT, {
      after: INSERT_AFTER
    });

    this.insertIntoFile('tests/.jshintrc', '    "setBreakpoint",', {
      after: '"predef": [\n'
    });

    return this.addPackageToProject('ember-get-config', '^0.1.7');
  },

  normalizeEntityName: function() {}
};
