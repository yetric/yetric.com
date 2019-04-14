import { App } from "./app";
interface IYetricWindow extends Window {
    dataLayer: any;
    app: App
}
declare var window: IYetricWindow;
window.app = new App();
