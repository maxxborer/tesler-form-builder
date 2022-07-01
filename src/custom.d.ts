/// <reference types="typescript" />

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "tesler-form-builder" {
  function TeslerFormBuilder(): void; 
  namespace TeslerFormBuilder { }
  export = TeslerFormBuilder;
}
