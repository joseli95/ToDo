# UI5 Web Components
Para utilizar los componentes hay que realizar lo siguiente:

1. En el archivo [app.module.ts](src/app/app.module.ts) se incluye el modulo de los componentes
importando la clase **Ui5WebcomponentsModule** del paquete **@ui5/webcomponents-ngx**: `import {Ui5WebcomponentsModule} from "@ui5/webcomponents-ngx"` [linea 6](src/app/app.module.ts#L6).
2. La clase **Ui5WebcomponentsModule** se agrega al arreglo de imports, [linea 15](src/app/app.module.ts#L15).
3. En el componente de Angular en el que se quieran usar los componentes, se deben importar las clases
del componente a utilizar (boton, label, input, etc.) en el archivo .ts
4. Ver el ejemplo en el archivo [app.component.ts](src/app/app.component.ts). Se estan importando tres componentes:
- [Input](src/app/app.component.ts#L3)
- [Button](src/app/app.component.ts#L4)
- [Label](src/app/app.component.ts#L5)
5. En el arhivo html del [componente](src/app/app.component.html) de Angular, se mandan llamar los componentes que se importaron.

Cada que se necesite usar un componente, este se debe de importar. En la documentación
pueden ver que es lo que se necesita importar, ya que algunos necesitan varios componentes 
para que funcionen correctamente.
