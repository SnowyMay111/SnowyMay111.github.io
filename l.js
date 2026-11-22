/*
 * Lampa Plugins: короткая ссылка.
 *
 * В Лампе вводится https://snowymay111.github.io/l.js. Файл только подключает загрузчик,
 * который сам обновляет плагины: https://github.com/SnowyMay111/lampa-plugins
 */
(function () {
    'use strict';

    if (window.lampa_plugins_short) return;
    window.lampa_plugins_short = true;

    var script = document.createElement('script');

    script.src = 'https://snowymay111.github.io/lampa-plugins/loader.js';
    script.onerror = function () {
        if (window.console) console.log('[lampa-plugins] не удалось загрузить загрузчик');
    };

    (document.head || document.documentElement).appendChild(script);
})();
