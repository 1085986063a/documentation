import {sidebar} from 'vuepress-theme-hope';

export const de = sidebar({
	'/de/': [
		{
			text: 'Fully Tablet Control',
			icon: 'read',
			collapsable: true,
			prefix: 'fully-tablet-control/',
			link: 'fully-tablet-control/',
			children: [
				// {
				// 	text: 'App',
				// 	icon: 'android',
				// 	collapsable: true,
				// 	prefix: 'app/',
				// 	children: [''],
				// },
				{
					text: 'Adapter',
					icon: 'setting',
					collapsable: true,
					children: [
						'description',
						'login',
						'charger',
						'brightness',
						'screensaver',
						'telegram',
						'motion-detection',
						'object-tree',
						'camera',
						'vis-view',
						'CHANGELOG',
					],
				},
			],
		},
		{
			text: 'Wallpanel',
			icon: 'read',
			collapsable: true,
			prefix: 'wallpanel/',
			children: [
				{
					text: 'App',
					icon: 'android',
					collapsable: true,
					prefix: 'app/',
					children: ['app-description','app-http-settings', 'app-mqtt-settings', 'app-mqtt-sensor-settings', 'app-mqtt-camera-settings'],
				},
				{
					text: 'Adapter',
					icon: 'setting',
					collapsable: true,
					children: ['admin-gui', 'object-tree', 'sentry', 'changelog'],
				},
			],
		},
	],
});