declare module 'ext.themes.apply' {
	export {};
}

declare interface MwSkinTheme {
	readonly LOCAL_FEATURE_PREFERENCE_KEY: string;
	readonly LOCAL_THEME_PREFERENCE_KEY: string;
	getCurrent(): string;
	set( target: string ): void;
	setFeature( id: string, value: boolean ): void;
}

declare const MwSkinTheme: MwSkinTheme;
