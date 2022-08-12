"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.onPostBuild =
  exports.onPreBootstrap =
  exports.pluginOptionsSchema =
    void 0;

var _path = _interopRequireDefault(require("path"));

var fs = require("fs");
var _fsExtra = require("fs-extra");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    persistentDir: Joi.string()
      .required()
      .description("Directory where persistent cache will be stored."),
    pluginNames: Joi.array()
      .items(Joi.string())
      .required()
      .description("Names of plugins to persist."),
    enabled: Joi.boolean()
      .required()
      .description(
        "Set to false to prevent persisting, allows you to clean the persistent cache."
      ),
  });
};

exports.pluginOptionsSchema = pluginOptionsSchema;

const getPaths = (persistentDir, rootDir, pluginName) => {
  return {
    pluginPath: _path.default.join(rootDir, ".cache", "caches", pluginName),
    persistentPath: _path.default.join(persistentDir, pluginName),
  };
};

const onPreBootstrap = async function (
  { store, reporter, cache },
  { persistentDir, pluginNames, enabled, remove }
) {
  if (!enabled) {
    return;
  }

  const rootDir = store.getState().program.directory;
  const task = reporter.createProgress(
    `ez-persistent-cache`,
    pluginNames.length,
    0
  );
  task.start();

  for (const pluginName of pluginNames) {
    console.log(`Restoring cache for ${pluginName}`);
    const { pluginPath, persistentPath } = getPaths(
      persistentDir,
      rootDir,
      pluginName
    );

    const folderExists = await _fsExtra.existsSync(pluginPath);

    if (!folderExists) {
      await _fsExtra.mkdir(pluginPath, { recursive: true });
    }

    const cacheExists = await _fsExtra.existsSync(persistentPath);

    if (cacheExists) {
      await _fsExtra.copy(persistentPath, pluginPath);
    }

    task.tick(1);
  }

  console.log(`Restored cache for ${pluginNames.length} plugins`);
};

exports.onPreBootstrap = onPreBootstrap;

const onPostBuild = async function (
  { store, reporter },
  { persistentDir, pluginNames, enabled }
) {
  if (!enabled) {
    return;
  }

  const rootDir = store.getState().program.directory;
  const task = reporter.createProgress(
    `ez-persistent-cache`,
    pluginNames.length,
    0
  );
  task.start();

  for (const pluginName of pluginNames) {
    task.setStatus(`Saving cache for ${pluginName}`);
    const { pluginPath, persistentPath } = getPaths(
      persistentDir,
      rootDir,
      pluginName
    );

    await (0, _fsExtra.ensureDir)(pluginPath);
    await (0, _fsExtra.ensureDir)(persistentPath);
    await (0, _fsExtra.copy)(pluginPath, persistentPath);
    task.tick(1);
  }

  task.setStatus(
    `ez-persistent-cache: Saved cache for ${pluginNames.length} plugins`
  );
  task.done();
};

exports.onPostBuild = onPostBuild;
//# sourceMappingURL=gatsby-node.js.map
