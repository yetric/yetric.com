import { loadScript } from "./utils";

import "../scss/app.scss";

export interface IAppSettings {
    ga: string;
}

export class App {
    private settings: IAppSettings;
    constructor(props: any = {}) {
        const defaultProps = {
            ga: "UA-103000963-1"
        };
        this.settings = { ...defaultProps, ...props };
        App.loadGA();
    }

    private static loadGA() {
        loadScript(
            "https://www.googletagmanager.com/gtag/js?id=UA-103000963-1"
        );
    }
}
