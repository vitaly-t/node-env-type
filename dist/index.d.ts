declare function refresh(): void;
export declare const env: {
    refresh: typeof refresh;
    isProd: boolean;
    isDev: boolean;
    isUAT: boolean;
    isSIT: boolean;
    isCI: boolean;
    isTest: boolean;
};
export {};
