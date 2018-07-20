export default class {
  constructor(app) {
    this.app = app;
  }

  addController(controller) {
    const prototype = Reflect.getPrototypeOf(controller),
          methodNames = Reflect.ownKeys(prototype);

    methodNames.forEach(name => {
      if (name === 'constructor') return;

      const action = Reflect.getOwnPropertyDescriptor(prototype, name).value;
      const path = `/${controller.route ? `${controller.route}/` : ''}${name === 'index' ? '' : name}`;
      console.log(`GET ${path}`);

      this.app.get(path, async (req, res) => res.send(action({ ...req.params, ...req.query })));
    });

    return this;
  }
}