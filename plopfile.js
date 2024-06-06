export default function (plop) {
  plop.setActionType("custom", function (answers, config, plop) {
    console.log({ answers, config, plop });
    plop.setGenerator([
      {
        type: "input",
        name: "apple",
        message: "Api name",
      },
    ]);
    return "success status message";
  });
  plop.setGenerator("component", {
    description: "A React component written in Typescript",
    prompts: [
      {
        type: "input",
        name: "component",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: `${process.cwd()}/{{ pascalCase component }}`,
        templateFiles: "plop-templates/component",
        base: "plop-templates/component",
      },
    ],
  });
  plop.setGenerator("screen", {
    description: "A React Screen in Typescript",
    prompts: [
      {
        type: "input",
        name: "screen",
        message: "Screen name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: `${process.cwd()}/{{ screen }}`,
        templateFiles: "plop-templates/screen",
        base: "plop-templates/screen",
      },
    ],
  });
  plop.setGenerator("api", {
    description: "A React Api boilerplate in Typescript",
    prompts: [],
    actions: [
      {
        type:'addMany',
        destination: `${process.cwd()}/api`,
        templateFiles: "plop-templates/api",
        base: "plop-templates/api",
      },
    ],
  });
}
