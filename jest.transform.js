const ts = require("typescript");

module.exports = {
  process(sourceText, sourcePath) {
    const { outputText } = ts.transpileModule(sourceText, {
      compilerOptions: {
        esModuleInterop: true,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2015,
      },
      fileName: sourcePath,
    });

    return { code: outputText };
  },
};
