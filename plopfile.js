export default function (plop) {
  plop.setActionType("custom", function (answers, config, plop) {
    console.log({answers,config,plop})
    plop.addPrompt([
        {
            type: "input",
            name: "apple",
            message: "Api name",
          },
    ])
    // do something
    // doSomething(config.configProp);
    // if something went wrong
    // throw "error message";
    // otherwise
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
    prompts: [
      {
        type: "input",
        name: "api",
        message: "Api name",
      },
    ],
    actions: [
      {
        data: { apple: "mango" },
        type: "custom",
        destination: `${process.cwd()}/api`,
        transform: (transform) => transform,
        templateFiles: "plop-templates/api",
        base: "plop-templates/api",
        skip: (data) => console.log("apple", data),
      },
    ],
  });
}
