/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface SvgLoader {
    'color': string;
    'url': string;
    'width': string;
  }
  interface SvgLoaderAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'url'?: string;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SvgLoader': Components.SvgLoader;
  }

  interface StencilIntrinsicElements {
    'svg-loader': Components.SvgLoaderAttributes;
  }


  interface HTMLSvgLoaderElement extends Components.SvgLoader, HTMLStencilElement {}
  var HTMLSvgLoaderElement: {
    prototype: HTMLSvgLoaderElement;
    new (): HTMLSvgLoaderElement;
  };

  interface HTMLElementTagNameMap {
    'svg-loader': HTMLSvgLoaderElement
  }

  interface ElementTagNameMap {
    'svg-loader': HTMLSvgLoaderElement;
  }


}