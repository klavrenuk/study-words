import { Component } from "@angular/core";

export interface IRoute {
  path: string,
  title?: string,
  component: any,
  isShowNav?: true
}
