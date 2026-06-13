declare module 'ext.themes.jsapi' {
	type ThemeKind = 'dark' | 'light' | 'unknown';

	interface Theme {
		id: string;
		kind: ThemeKind;
		userGroups?: string[];
	}

	interface SwitcherConfig {
		defaultTheme: string;
		skinSupportScript: string;
		supportsAuto: boolean;
		themePreferenceKey: string;
		themes: Theme[];
	}

	interface JSApi {
		readonly CONFIG: SwitcherConfig;
		readonly LOCAL_FEATURES_PREF_NAME: string;
		readonly LOCAL_PREF_NAME: string;
		readonly REMOTE_PREF_NAME: string;

		/**
		 * Changes a feature's enablement state. This function allows more fine-grained control
		 * than setUserPreference.
		 *
		 * @param featureId Target feature identifier.
		 * @param value New enablement status. 'True' enables.
		 * @param fireHooks Whether hooks should be fired.
		 * @param remember Whether to remember the change.
		 * @param broadcast Whether to propagate the change to other tabs.
		 */
		changeFeatureState(
			featureId: string,
			value: boolean,
			fireHooks?: boolean,
			remember?: boolean,
			broadcast?: boolean
		): void;

		/**
		 * Changes current theme. This function allows more fine-grained control than
		 * setUserPreference.
		 *
		 * @param value Target theme identifier.
		 * @param fireHooks Whether hooks should be fired.
		 * @param remember Whether to remember the change.
		 * @param broadcast Whether to propagate the change to other tabs.
		 */
		changeTheme(
			value: string,
			fireHooks?: boolean,
			remember?: boolean,
			broadcast?: boolean
		): void;

		getAvailableThemeIds(): string[];

		getAvailableThemes(): string[];

		getAvailableThemesEx(): Theme[];

		getSwitcherMountPoint(): HTMLElement;

		getSwitcherPortlet(): HTMLElement;

		prepare(): void;

		runSwitcherInitialiser( fn: () => void ): void;

		/**
		 * Changes feature state, remembers it, and broadcasts the change. Switchers should invoke
		 * this function when the feature is set because of a user interaction.
		 *
		 * @param featureId Target feature identifier.
		 * @param value New enablement status. 'True' enables.
		 */
		setFeatureUserPreference( featureId: string, value: boolean ): void;

		/**
		 * Changes current theme, remembers it, and broadcasts the change. Switchers should invoke
		 * this function when the theme is set because of a user interaction.
		 *
		 * @param value Target theme identifier.
		 */
		setUserPreference( value: string ): void;

		/**
		 * Checks whether local preference points to a valid theme, and if not, erases it and
		 * requests the default theme to be set.
		 */
		trySanitisePreference(): void;

		trySyncNewAccount(): void;

		whenCoreLoaded<T = undefined>( callback: ( this: T ) => void, context?: T ): void;
	}

	export = JSApi;
}
