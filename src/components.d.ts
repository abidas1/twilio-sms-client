/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface AppTwilioSms {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTwilioSmsElement extends Components.AppTwilioSms, HTMLStencilElement {
    }
    var HTMLAppTwilioSmsElement: {
        prototype: HTMLAppTwilioSmsElement;
        new (): HTMLAppTwilioSmsElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "app-twilio-sms": HTMLAppTwilioSmsElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface AppTwilioSms {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "app-twilio-sms": AppTwilioSms;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-twilio-sms": LocalJSX.AppTwilioSms & JSXBase.HTMLAttributes<HTMLAppTwilioSmsElement>;
        }
    }
}