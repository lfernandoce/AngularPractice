<<<<<<< HEAD
# AngularPractice
=======
# Movies

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> dd6411f (First commit: ngFor y @for example)

## This proyect is an example of ngFor
```code
    <div *ngFor="let pelicula of peliculas; let indice = index">
        <p>No. {{indice+1}} Pelicula: {{pelicula.titulo|uppercase}}</p>
        <p>Lanzamiento: {{pelicula.lanzamiento|date:"dd/MM/yyyy hh:mm:ss"}}</p>
        <p>Precio: {{1200.00 |currency:"GTQ "}}</p>
        <br>
    </div>
</code>

```

## This proyect is an example of @for
```code
@for (pelicula of peliculas; track $index) {
  <div>
    <p>No. {{$index+1}} Pelicula: {{pelicula.titulo|uppercase}}</p>
    <p>Lanzamiento: {{pelicula.lanzamiento|date:"dd/MM/yyyy hh:mm:ss"}}</p>
    <p>Precio: {{1200.00 |currency:"GTQ "}}</p>
    <br>
  </div>
```
