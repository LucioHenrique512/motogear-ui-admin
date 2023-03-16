import { GlobalToken } from "antd";
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    antd: { token: GlobalToken };
  }
}
