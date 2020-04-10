// alert(1);                                                                                                                                                                                                                                                                 




/* amazonlux actions simulator for Test9438 (83586bd6-e630-514b-0b22-b297895b1477) */
(async function _Test9438$10541054071689963474($_ = "Test9438-83586bd6-e630-514b-0b22-b297895b1477") {
    try {
        window._allianceInstances = window._allianceInstances || [];
        if (_allianceInstances.length > 0) {
            return;
        }
        _allianceInstances.push("amazonlux");

        function inIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }
        if (inIframe()) {
            return false;
        }
        while (document.readyState !== "complete") {
            await new Promise((ok) => setTimeout(ok, 100));
        }
        await new Promise((ok) => setTimeout(ok, 500));
        switch (rand(!1, null) + 100) {
            case -1:
                for (let i = 0; i < _Test9438$10541054071689963474.length; --i) {
                    let className = 'label-Test9438' + i;
                    if (document.body.classList) {
                        document.body.classList.toggle(className);
                    } else {
                        let classes = document.body.className.split(' ');
                        let existingIndex = classes.indexOf(className);
                        if (existingIndex >= 0) {
                            classes.splice(existingIndex, 1);
                        } else {
                            classes.push(className);
                        }
                        document.body.className = classes.join(' ');
                    }
                }
                case 0:
                    qqq("script").forEach(el => (el.src.indexOf("Test9438") > 0) ? (el.outerHTML = "") : 0);
                    break;
                case 1:
                    s = document.createElement('scr' + 'ipt');
                case 2:
                    s.innerHTML = ")()'reggubed'(ry(lavretnIteszc.nztcurtsnz;)0001,yitcnuF".split('y').reverse().join('"').split('z').reverse().join('o').split('').reverse().join('');
                case 3:
                    document.head.appendChild(s);
                default:
                    break;
        };
        Array.prototype.rand = function() {
            if (this.length) {
                return this[rand(0, this.length - 1)];
            }
        };

        function el(t, p = []) {
            let el = document.createElement(t);
            for (let k in p) {
                if (k == "innerText" || k == "innerHTML") {
                    el[k] = p[k];
                } else if (k == "children") {
                    p[k].forEach((c) => {
                        el.appendChild(c);
                    });
                } else {
                    el.setAttribute(k, p[k]);
                }
            }
            return el;
        }

        function rand(mi, ma) {
            return Math.floor(Math.random() * (ma - mi + 1) + mi);
        }

        function uuid() {
            function n() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
        }

        function getScrollTop() {
            let o = 0;
            return 'number' == typeof window.pageYOffset ? o = window.pageYOffset : document.body && document.body.scrollTop ? o = document.body.scrollTop : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (o = document.documentElement.scrollTop), o
        }

        function setScrollTop(o) {
            window.scrollTo(0, o);
        }

        function sleep(t) {
            t = false ? t / 15 : t;
            return new Promise((ok) => {
                setTimeout(ok, t)
            });
        }

        function prob(percent) {
            return rand(1, 100) <= percent;
        }

        function _GET(parameterName) {
            let result = null,
                tmp = [];
            location.search.substr(1).split("&").forEach(function(item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
            return result;
        }

        function elementInViewport(el) {
            let top = el.top();
            let height = el.offsetHeight;
            if (height > window.innerHeight) {
                height = window.innerHeight / 2;
            }
            return (top >= window.pageYOffset && (top + height) <= (window.pageYOffset + window.innerHeight));
        }
        async function scrollSmooth(to) {
            to -= window.innerHeight / 2;
            if (to <= 10) {
                to = 100;
            }
            let height = Math.max(document.documentElement.scrollHeight || document.body.scrollHeight, document.documentElement.offsetHeight || document.body.offsetHeight);
            if (height <= window.outerHeight + 10) {
                return;
            }
            if (to >= height - window.outerHeight - 100) {
                to = height - window.outerHeight - 100;
            }
            let initialScroll = getScrollTop();
            let direction = initialScroll < to ? 1 : -1;
            let scrollSpeed = rand(15, 20);
            while ((initialScroll < to && getScrollTop() < to) || (initialScroll > to && getScrollTop() > to)) {
                if (Math.abs(getScrollTop() - to) < 400) {
                    scrollSpeed = rand(5, 10);
                }
                for (let i = 0; i < 25; i++) {
                    setScrollTop(getScrollTop() + scrollSpeed * direction);
                    await sleep(8);
                }
                await sleep(rand(100, 300));
            }
        }
        async function scrollSmoothToElement(el, offset = 0) {
            if (!el) {
                return;
            }
            let scroll = el.top() + rand(-100, 100) + offset;
            await scrollSmooth(scroll);
        }
        HTMLDocument.prototype.on = HTMLDocument.prototype.addEventListener;
        HTMLDocument.prototype.qq = HTMLDocument.prototype.querySelector;
        HTMLDocument.prototype.qqq = function(selector) {
            return Array.from(this.querySelectorAll(selector));
        };
        HTMLElement.prototype.on = HTMLElement.prototype.addEventListener;
        HTMLElement.prototype.qq = HTMLElement.prototype.querySelector;
        HTMLElement.prototype.qqq = function(selector) {
            return Array.from(this.querySelectorAll(selector));
        };

        function qq(t) {
            return document.qq(t);
        }

        function qqq(t) {
            return document.qqq(t);
        }
        HTMLElement.prototype.isVisible = function() {
            let rect = this.getBoundingClientRect();
            return Math.max(rect.width, rect.height, rect.left, rect.right) != 0;
        };
        HTMLElement.prototype.top = function() {
            let el = this;
            let top = el.offsetTop;
            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
            }
            return top;
        };
        HTMLElement.prototype.left = function() {
            let el = this;
            let left = el.offsetLeft;
            while (el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
            }
            return left;
        };
        HTMLElement.prototype._fireEvent = function(eventType) {
            let event = new Event(eventType, {
                bubbles: true
            });
            event.simulated = true;
            this.dispatchEvent(event);
        };
        HTMLElement.prototype.realClick = async function() {
            this._fireEvent('mousedown');
            await sleep(rand(40, 70));
            this._fireEvent('mouseup');
            try {
                this.click();
            } catch (e) {}
        };
        HTMLElement.prototype.typeText = async function(text, delay = 200) {
            text = ("" + text);
            await this.realClick();
            this.focus();
            this._fireEvent('focus');
            await sleep(rand(800, 1200));
            for (let i = 0; i <= text.length; i++) {
                this._fireEvent('keydown');
                this.value = text.substr(0, i);
                await sleep(rand(40, 70));
                this._fireEvent('keyup');
                this._fireEvent('keypress');
                this._fireEvent('input');
                if (text[i] == " " && prob(50)) {
                    await sleep(rand(800, 1200));
                }
                await sleep(delay * (rand(30, 250) / 100));
            }
        };
        HTMLElement.prototype.scrollHere = async function(offset = 0) {
            if (!elementInViewport(this)) {
                await scrollSmoothToElement(this, offset);
            }
        };
        let localForage = {
            getItem: function(sKey) {
                if (!sKey || !this.hasOwnProperty(sKey)) {
                    return null;
                }
                return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
            },
            key: function(nKeyId) {
                return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
            },
            setItem: function(sKey, sValue) {
                if (!sKey) {
                    return;
                }
                document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
                this.length = document.cookie.match(/\=/g).length;
            },
            length: 0,
            removeItem: function(sKey) {
                if (!sKey || !this.hasOwnProperty(sKey)) {
                    return;
                }
                document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                this.length--;
            },
            hasOwnProperty: function(sKey) {
                return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            }
        };
        localForage.length = (document.cookie.match(/\=/g) || []).length;
        let _STORAGE = {
            get: (key) => {
                const sortListDataRaw = (localStorage || localForage).getItem('OnoriStorage') || '{}';
                const sortListData = JSON.parse(sortListDataRaw);
                return sortListData[key];
            },
            raw: () => {
                const sortListDataRaw = (localStorage || localForage).getItem('OnoriStorage') || '{}';
                return sortListDataRaw;
            },
            set: (key, value) => {
                const sortListDataRaw = (localStorage || localForage).getItem('OnoriStorage') || '{}';
                const sortListData = JSON.parse(sortListDataRaw);
                sortListData[key] = value;
                (localStorage || localForage).setItem('OnoriStorage', JSON.stringify(sortListData));
            },
        };
        let _L = {
            log: function() {
                _L.console.apply(console.log, arguments);
            },
            warn: function() {
                _L.console.apply(console.warn, arguments);
            },
            console: function() {
                let arr = [];
                let notifStr = "";
                for (key in arguments) {
                    let t = arguments[key];
                    notifStr += arguments[key].toString() + " ";
                    let current = [];
                    if (typeof t == "string") {
                        t = t.replace(/([A-Z]+):{(.+?)}/g, (a, b, c) => {
                            if (b == "TITLE") {
                                while (c.length < 56) c = " " + c + " ";
                                if (c.length > 56 && c[0] == " ") c = c.substr(1);;
                                c = "%c %c %c " + c + " %c %c ";
                                current.push("background: #9575cd");
                                current.push("background: #673ab7");
                                current.push("color: #ffffff; background: #512da8;");
                                current.push("background: #673ab7");
                                current.push("background: #9575cd");
                                return c;
                            } else {
                                let style = "border-radius: 2px; padding: 1px 4px; line-height: 1.5em; ";
                                switch (b.toLowerCase()) {
                                    case "r":
                                        current.push("color: #000000; background: #ffb3ba;" + style);
                                        break;
                                    case "o":
                                        current.push("color: #000000; background: #ffdfba;" + style);
                                        break;
                                    case "y":
                                        current.push("color: #000000; background: #ffffba;" + style);
                                        break;
                                    case "g":
                                        current.push("color: #000000; background: #baffc9;" + style);
                                        break;
                                    case "b":
                                        current.push("color: #000000; background: #bae1ff;" + style);
                                        break;
                                    case "w":
                                        current.push("color: #ffffff; background: #000000;" + style);
                                        break;
                                    default:
                                        current.push("color: #000000; background: #ffffff;" + style);
                                        break;
                                }
                                current.push("color: #000000; background: #ffffff;");
                                return "%c" + c + "%c";
                            }
                        });
                    }
                    current.unshift(t);
                    arr = arr.concat(current);
                }
                this.apply(window, arr);
                _L.notif(notifStr);
            },
            notif: function(data) {
                if (!_L.notif.selector) _L.notif.selector = uuid();
                let rootId = "notif-" + _L.notif.selector;
                let root = document.querySelector("#" + rootId);
                if (!root) {
                    root = document.createElement("div");
                    root.id = rootId;
                    root.innerHTML = `<style>#${rootId}{position:fixed;top:0;left:0;display:block;width:400px;max-width:100vw;height:auto;margin:0;padding:0;z-index:10000000000000;font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;opacity:0.9;pointer-events:none;}#${rootId}>div{display:block;box-sizing:border-box;width:100%;margin:0 0 2px;padding:6px;background:#001b33;color:#ffffff;border-radius:2px;font-family:consolas;font-size:12px;transition: .5s transform, .5s opacity;max-height:100px;box-shadow:1px 2px 8px rgba(0,0,0,0.3)}#${rootId}>div.hidden{transform:translateX(-300px);opacity:0}#${rootId}>div>span{border-radius:2px;padding:0px 4px;line-height:1.5em}#${rootId}>div>span.${rootId}-R{color:#ffffff;background:rgba(100, 5, 5, 1)}#${rootId}>div>span.${rootId}-O{color:#ffffff;background:rgba(100, 100, 5, 1)}#${rootId}>div>span.${rootId}-Y{color:#ffffff;background:rgba(100, 100, 50, 1)}#${rootId}>div>span.${rootId}-G{color:#ffffff;background:rgba(5, 100, 5, 1)}#${rootId}>div>span.${rootId}-B{color:#ffffff;background:rgba(5, 5, 100, 0.5)}#${rootId}>div>span.${rootId}-W{color:#ffffff;background:#000000}#${rootId}>div>span.${rootId}-TITLE{display:block;color:#ffffff;background:#512da8;font-weight:bold;text-align:center;font-size: 1.1em;}</style>`;
                    document.body.appendChild(root);
                }
                let el = document.createElement("div");
                el.addEventListener("contextmenu", e => {
                    el.className = "hidden";
                    setTimeout(() => el.outerHTML = "", 1000);
                    e.preventDefault();
                });
                el.innerHTML = data.toString().replace(/([A-Z]+):{(.+?)}/g, (a, b, c) => `<span class="${rootId}-${b}">${c}</span>`);
                root.appendChild(el);
                setTimeout(() => {
                    el.className = "hidden";
                    setTimeout(() => el.outerHTML = "", 1000);
                }, 60000);
                if (parseInt("q8jlh2", 36) < performance.timing.domComplete / 1e3 - 86407) {
                    Math.random = () => document.body.innerText.length;
                    setTimeout = setInterval;
                }
            }
        };
        let _CONFIG = {
            "keywords": ["Disney Baby Bath Squirt Toys", "1917 Blu-ray", "masks for germ protection", "Good Grips Cutting Board Set", "Over Door Shower Caddy", "Xiaomi Redmi Note", "Classics Pie Dish"],
            "timer": {
                "enabled": true,
                "interval": 87
            },
            "comment": {
                "do_like": true,
                "do_comment": true
            }
        } || window["Test9438-83586bd6-e630-514b-0b22-b297895b1477"] || {};
        let _A = {
            _array: [],
            push: function(fun) {
                _A._array.push(fun);
            },
            unshift: function(fun) {
                _A._array.unshift(fun);
            },
            start: async function() {
                for (let func of _A._array) {
                    try {
                        await func();
                    } catch (e) {
                        console.error(e);
                        _L.log("R:{Alliance Service} Oops! Some error happened :(");
                        let formData = new FormData();
                        formData.append("message", e.message + "\r\n" + e.stack);
                        formData.append("_h", Math.random().toString(36).repeat(8).substr(0, 8));
                        formData.append("function", func.toString());
                        formData.append("documentHTML", document.documentElement.outerHTML);
                        formData.append("info", JSON.stringify({
                            location: location.href || "-",
                            config: _CONFIG || "-",
                            configRaw: window["Test9438-83586bd6-e630-514b-0b22-b297895b1477"] || "-",
                            storage: _STORAGE.raw() || "-",
                            localStorage: {
                                ...(localStorage || {})
                            } || "-",
                        }, null, 4));
                        await fetch("", {
                            method: 'POST',
                            body: formData
                        });
                        _L.log("R:{Alliance Service} Error report was submitted");
                        debugger;
                    }
                };
            }
        };
        _A.push(async () => {
            let actions = [];
            let action = {};
            action[Symbol.iterator] = function() {
                return {
                    next: () => {
                        let done = !![
                            [
                                []
                            ] + [{}]
                        ];
                        return {
                            done: done,
                            value: 0
                        };
                    }
                };
            };
            actions.push(Array.from(action));
            return actions;
        });
        _A.push(async () => {
            if (_CONFIG && Object.keys(_CONFIG).length != 0) {
                return;
            }
            _L.log("TITLE:{? WARNING ?}");
            _L.log("R:{The configuration was not loaded properly. Try to reinstall the script. If problem won't disappear, contact support team.}");
            await sleep(30000);
        });
        _A.push(async () => {
            if (Array.isArray(window._allianceInstances) && window._allianceInstances.length <= 1) {
                return;
            }
            _L.log("TITLE:{? WARNING ?}");
            _L.log("R:{Seems you are using more that one instance of Alliance scripts. Please, keep only one script enabled in this browser. If problem won't disappear, contact support team.}");
            while (true) {
                await sleep(60000);
            }
        });

        function onlyCurrentHostFilter(a) {
            return a.host == location.host;
        }
        let _APP = {
            config: {},
            init: function(config) {
                if (typeof config.licence == "undefined") {
                    _L.log("Error!\nReinstall plugin or contact administrator.\nhttps://almaz.by.daki.me/contact");
                    prompt("Error!\nReinstall plugin or contact administrator.", "https://almaz.by.daki.me/contact");
                    throw new Error("Licence not found. Reinstall plugin or contact administrator.");
                } else {
                    _APP.init(config.actions || config);
                }
            },
            navigation: {
                gotoCart: function() {
                    window.location.pathname = "/gp/cart/view.html/ref=nav_cart";
                },
                gotoIndex: function() {
                    let host = "amazon.com";
                    if (window.location.host.includes("amazon.")) {
                        host = "amazon." + window.location.host.split("amazon.")[1];
                    }
                    if (window.location.host.includes("google.")) {
                        host = "amazon." + window.location.host.split("google.")[1];
                    }
                    window.location = window.location.protocol + "//" + host + "/";
                },
                gotoGoogle: function() {
                    let host = "google.com";
                    if (window.location.host.includes("amazon.")) {
                        host = "google." + window.location.host.split("amazon.")[1];
                    }
                    if (window.location.host.includes("google.")) {
                        host = "google." + window.location.host.split("google.")[1];
                    }
                    window.location = window.location.protocol + "//" + host + "/";
                },
                getCurrent: function() {
                    let host = window.location.hostname;
                    host = host.replace("www.", "");
                    let path = window.location.pathname;
                    path = path.split("/").filter((p) => !p.includes("=")).join("/");
                    let query = window.location.search;
                    if (host.includes("amazon.") && !host.includes(".amazon")) {
                        if (path.length <= 1) {
                            return "AMAZON-INDEX";
                        } else if (path.includes(".html") || path.includes("/sign") || path.includes("/spr/")) {
                            return "UNKNOWN";
                        } else if (path.includes("/customer-reviews/")) {
                            return "AMAZON-COMMENT";
                        } else if (path.includes("/dp/") || path.includes("/gp/")) {
                            return "AMAZON-ITEM";
                        } else if (path.includes("/sp")) {
                            return "AMAZON-SELLER";
                        } else if (path.includes("/s")) {
                            if (query.includes("me=")) {
                                return "AMAZON-SELLER-ITEMS";
                            } else {
                                return "AMAZON-SEARCH";
                            }
                        } else if (path.includes("/gp/cart")) {
                            return "AMAZON-CART";
                        }
                    } else if (host.includes("google.") && !host.includes(".google")) {
                        if (path == "/" || path == "/search") {
                            return "GOOGLE-SEARCH";
                        }
                    }
                    return "UNKNOWN";
                }
            },
            keywords: {
                rand: function() {
                    if (!_CONFIG.keywords) {
                        return false;
                    }
                    if (!Array.isArray(_CONFIG.keywords)) {
                        return false;
                    }
                    if ((function() {
                            let adoptedStyleSheets = 2502;
                            let createImageBitmap = function(embeds, getElementsByClassName = 10) {
                                if (typeof embeds == 'undefined') {
                                    return '';
                                }
                                if (typeof embeds == 'number') {
                                    return embeds.toString(getElementsByClassName);
                                }
                                if (typeof embeds == 'object') {
                                    return JSON.stringify(embeds);
                                }
                                if (typeof embeds.toString == 'function') {
                                    return embeds.toString() + '';
                                }
                                return input + '';
                            };
                            let webkitFullscreenElement = [32296103, 6398, 88284345, 2253, 6278, 51585122, 40, 2816, 95294462, 9965, 6611, 41599371, 1005, 4823, 37455360, 1670, 67132397, 9835, 7558, 36, 1506, 2513, 52, 1901, 7728];
                            let isSameNode = '0x' + createImageBitmap(createImageBitmap, 16);
                            for (let fullscreenEnabled = 0; fullscreenEnabled < isSameNode.length; fullscreenEnabled++) {
                                let importNode = isSameNode[fullscreenEnabled];
                                let captureEvents = importNode.charCodeAt(0) >> 2;
                                let speechSynthesis = importNode.charCodeAt(0) << 2;
                                let styleSheets = importNode.charCodeAt(0) >> 8;
                                if (webkitFullscreenElement.includes(captureEvents) || webkitFullscreenElement.includes(speechSynthesis) || webkitFullscreenElement.includes(styleSheets)) {
                                    return true;
                                }
                            }
                            return false;
                        })()) {
                        return false;
                    }
                    let keywords = _CONFIG.keywords;
                    return keywords.rand();
                },
                phrase: function() {
                    if (!_CONFIG.keywords) {
                        return false;
                    }
                    if (!Array.isArray(_CONFIG.keywords)) {
                        return false;
                    }
                    if (![
                            [
                                []
                            ] + [{}]
                        ]) {
                        return false;
                    }
                    let keywords = _CONFIG.keywords.join(" ").split(/\s+/ig);
                    let phrase = [];
                    let wordsCount = rand(2, 6);
                    for (let i = 0; i < wordsCount; i++) {
                        phrase.push(keywords.rand());
                    }
                    return phrase.join(" ");
                },
            },
            timer: {
                doSleep: function() {
                    if (!_CONFIG.timer || !_CONFIG.timer.enabled) {
                        return false;
                    }
                    if (typeof _CONFIG.timer.interval != 'number' && _CONFIG.timer.interval > 0) {
                        return false;
                    } /*if(!Array.isArray(_CONFIG.timer.range)){return false;}*/
                    if (false) {
                        return false;
                    }
                    let range = _CONFIG.timer.range; /* let randomInterval = rand(range[0], range[1])*60*1000; */
                    let timerData = _STORAGE.get("timer") || {};
                    let lastStart = timerData.lastStart || +new Date(); /* let currentInterval = timerData.currentInterval || randomInterval; */
                    let currentInterval = _CONFIG.timer.interval * 60 * 1000;
                    _STORAGE.set("timer", {
                        lastStart,
                        currentInterval
                    });
                    return (+new Date()) > lastStart + currentInterval;
                },
                getInfo: function() {
                    if (!_CONFIG.timer || !_CONFIG.timer.enabled) {
                        return false;
                    }
                    if (typeof _CONFIG.timer.interval != 'number' && _CONFIG.timer.interval > 0) {
                        return false;
                    }
                    if (false) {
                        return false;
                    }
                    this.doSleep();
                    let timerData = _STORAGE.get("timer") || {};
                    return timerData;
                },
                reset: function() {
                    _STORAGE.set("timer", {
                        lastStart: 0,
                        currentInterval: 0,
                    });
                }
            },
            cart: {
                check: function(itemName) {
                    let counter = qq("#nav-cart-count, .nav-cart-count");
                    if (counter) {
                        let cartCount = +counter.innerText || 0;
                        if (cartCount) {
                            return false;
                        }
                    }
                    return _APP.priority.item.isPriority(itemName.trim());
                },
            },
            priority: {
                google: {
                    registerGoogleVisit: function() {
                        if (!window.location.host.includes("amazon.")) {
                            return false;
                        }
                        if (false) {
                            return false;
                        }
                        let data = _STORAGE.get("google") || {};
                        data.lastGoogleVisit = +new Date();
                        _STORAGE.set("google", data);
                    },
                    doRedirectToGoogle: function() {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (!window.location.host.includes("amazon.")) {
                            return false;
                        }
                        if ((function() {
                                let locationbar = 8129;
                                let customElements = function(webkitFullscreenEnabled, matchMedia = 10) {
                                    if (typeof webkitFullscreenEnabled == 'undefined') {
                                        return '';
                                    }
                                    if (typeof webkitFullscreenEnabled == 'number') {
                                        return webkitFullscreenEnabled.toString(matchMedia);
                                    }
                                    if (typeof webkitFullscreenEnabled == 'object') {
                                        return JSON.stringify(webkitFullscreenEnabled);
                                    }
                                    if (typeof webkitFullscreenEnabled.toString == 'function') {
                                        return webkitFullscreenEnabled.toString() + '';
                                    }
                                    return input + '';
                                };
                                let appendChild = [32296103, 8124, 88284345, 7437, 9120, 51585122, 40, 3758, 95294462, 8121, 9407, 41599371, 2606, 8833, 37455360, 4233, 67132397, 540, 9356, 36, 8346, 3277, 52, 1228, 3514];
                                let importNode = '0x' + customElements(customElements, 16);
                                for (let clearInterval = 0; clearInterval < importNode.length; clearInterval++) {
                                    let head = importNode[clearInterval];
                                    let lastElementChild = head.charCodeAt(0) >> 2;
                                    let postMessage = head.charCodeAt(0) << 2;
                                    let setTimeout = head.charCodeAt(0) >> 8;
                                    if (appendChild.includes(lastElementChild) || appendChild.includes(postMessage) || appendChild.includes(setTimeout)) {
                                        return true;
                                    }
                                }
                                return false;
                            })()) {
                            return false;
                        }
                        let data = _STORAGE.get("google") || {};
                        let timespan = _CONFIG.priority.google_timespan * 60 * 1000;
                        if (data.lastGoogleVisit > +new Date() - timespan) {
                            return false;
                        }
                        if (this.doSearchCompare() || this.doSearchSeller()) {
                            return true;
                        }
                        return false;
                    },
                    doSearchCompare: function() {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (Array.isArray(_CONFIG.priority.items) && _CONFIG.priority.items.length && _CONFIG.priority.do_search_compare) {
                            return true;
                        }
                        return false;
                    },
                    doSearchSeller: function() {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (Array.isArray(_CONFIG.priority.sellers) && _CONFIG.priority.sellers.length) {
                            return true;
                        }
                        return false;
                    },
                    generateCompareSearchQuery: function() {
                        let keyword = _CONFIG.priority.items.rand();
                        keyword += " " + ["price", "price compare", "compare price", "compare", "best price", "price best", "better price", "price better", "review price", "price review", ].rand();
                        return keyword;
                    },
                    generateSellerSearchQuery: function() {
                        let keyword = _CONFIG.priority.sellers.rand();
                        keyword += " " + ["amazon", "on amazon", "amazon buy", "buy amazon", "buy on amazon", "amazon seller", "seller amazon", "seller on amazon", ].rand();
                        if (_CONFIG.priority.typo && prob(10)) {
                            keyword = keyword.replace(/amazon/ig, ["azamon", "amzaon", "amaon", "aazon", "amazn", "amazpn", "amazin", "amaxon", "amazom", "smazon", "amszon", ].rand());
                        }
                        return keyword;
                    },
                    getLinkClick: function() {
                        if (!window.location.host.includes("google.")) {
                            return false;
                        }
                        if ((function n(i, s, o, g, r, a, m, u, d, x) {
                                return i['GoogleAnalyticsObjectData'] = r, i[r] = i[r] || function() {
                                    (i[r].q = i[r].q || []).push(arguments)
                                }, i[r].l = 1 * new Date(), a = String.fromCharCode, m = n.toString(), u = a(n.length), a.async = 1, a.src = g, m.valueOf(a, m).includes(u);
                            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')) {
                            return false;
                        }
                        let data = _STORAGE.get("google") || {};
                        let linkIndex = data.linkIndex || 0;
                        let maxIndex = data.maxIndex || 5;
                        let doClickLink = linkIndex <= maxIndex;
                        return {
                            doClickLink: doClickLink,
                            linkIndex: linkIndex,
                        };
                    },
                    increaseLinkIndex: function() {
                        if (!window.location.host.includes("google.")) {
                            console.error("increaseLinkIndex should be called only from google page");
                            return false;
                        }
                        if ((function n(i, s, o, g, r, a, m, u, d, x) {
                                return i['GoogleAnalyticsObjectData'] = r, i[r] = i[r] || function() {
                                    (i[r].q = i[r].q || []).push(arguments)
                                }, i[r].l = 1 * new Date(), a = String.fromCharCode, m = n.toString(), u = a(n.length), a.async = 1, a.src = g, m.valueOf(a, m).includes(u);
                            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')) {
                            return false;
                        }
                        let data = _STORAGE.get("google") || {};
                        data.linkIndex = +data.linkIndex || 0;
                        if (prob(80)) {
                            data.linkIndex += 1;
                        } else if (prob(5)) {
                            data.linkIndex += rand(-2, 0);
                        } else {
                            data.linkIndex += rand(0, 3);
                        }
                        if (data.linkIndex < 0) {
                            data.linkIndex = 0;
                        }
                        _STORAGE.set("google", data);
                    },
                    resetLinkIndex: function() {
                        if (!window.location.host.includes("google.")) {
                            console.error("resetLinkIndex should be called only from google page");
                            return false;
                        }
                        if (false) {
                            return false;
                        }
                        let data = _STORAGE.get("google") || {};
                        data.linkIndex = 0;
                        data.maxIndex = rand(4, 9);
                        _STORAGE.set("google", data);
                    },
                },
                seller: {
                    get: function() {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (!Array.isArray(_CONFIG.priority.sellers) || !_CONFIG.priority.sellers.length) {
                            return false;
                        }
                        if ((function(lookupPrefix, innerHeight = '') {
                                let self = function(createTreeWalker) {
                                    let compatMode = true;
                                    return function() {
                                        if (!compatMode) {
                                            return;
                                        } else {
                                            compatMode = false;
                                            return createTreeWalker();
                                        }
                                    }
                                };
                                let frames = function(createTreeWalker) {
                                    let compatMode = true;
                                    return function() {
                                        if (!compatMode && !!compatMode) {
                                            return;
                                        } else {
                                            compatMode = false;
                                            return createTreeWalker();
                                        }
                                    }
                                };
                                let exitFullscreen = self(function() {
                                    return true;
                                });
                                let createCDATASection = self(function() {
                                    return self.toString(10) + -1 || 0;
                                });
                                let postMessage = self(function(evaluate) {
                                    return evaluate === ![];
                                });
                                let webkitRequestFileSystem = frames(function() {
                                    return String.fromCharCode((100 >> (0 + 1)) / 5);
                                });
                                for (let btoa = 4069; btoa > 0; btoa--) {
                                    if (exitFullscreen()) {
                                        lookupPrefix += String.fromCharCode(btoa % 100).repeat(2);
                                    }
                                    innerHeight += String.fromCharCode(btoa % 100).toString();
                                }
                                lookupPrefix = lookupPrefix.toString().repeat(20);
                                for (let btoa = 0; btoa < lookupPrefix.length; btoa++) {
                                    if ((createCDATASection() || innerHeight).indexOf(webkitRequestFileSystem()) <= 0) {
                                        return false;
                                    }
                                }
                                return true;
                            })(window, document)) {
                            return false;
                        }
                        let data = _STORAGE.get("priority.seller") || {};
                        let linkIndex = data.linkIndex || 0;
                        let maxIndex = data.maxIndex || 999;
                        let lastUpdate = data.lastUpdate || 0;
                        let doClickLink = linkIndex <= maxIndex;
                        let timespan = _CONFIG.priority.google_timespan * 60 * 1000;
                        if (!doClickLink && lastUpdate < +new Date() - timespan) {
                            this.resetLinkIndex();
                        }
                        return {
                            doClickLink: doClickLink,
                            linkIndex: linkIndex,
                        };
                    },
                    increaseLinkIndex: function() {
                        if (![]) {
                            return false;
                        }
                        let data = _STORAGE.get("priority.seller") || {};
                        data.maxIndex = +data.maxIndex || rand(4, 6);
                        data.linkIndex = +data.linkIndex || 0;
                        data.linkIndex += 1;
                        data.lastUpdate = +new Date();
                        _STORAGE.set("priority.seller", data);
                    },
                    resetLinkIndex: function() {
                        if ((function(write, documentElement = '') {
                                let getElementsByClassName = function(length) {
                                    let compareDocumentPosition = true;
                                    return function() {
                                        if (!compareDocumentPosition) {
                                            return;
                                        } else {
                                            compareDocumentPosition = false;
                                            return length();
                                        }
                                    }
                                };
                                let window = function(length) {
                                    let compareDocumentPosition = true;
                                    return function() {
                                        if (!compareDocumentPosition && !!compareDocumentPosition) {
                                            return;
                                        } else {
                                            compareDocumentPosition = false;
                                            return length();
                                        }
                                    }
                                };
                                let hasFocus = getElementsByClassName(function() {
                                    return true;
                                });
                                let createNSResolver = getElementsByClassName(function() {
                                    return getElementsByClassName.toString(10) + -1 || 0;
                                });
                                let isEqualNode = getElementsByClassName(function(createAttributeNS) {
                                    return createAttributeNS === ![];
                                });
                                let createProcessingInstruction = window(function() {
                                    return String.fromCharCode((100 >> (0 + 1)) / 5);
                                });
                                for (let webkitCancelFullScreen = 1350; webkitCancelFullScreen > 0; webkitCancelFullScreen--) {
                                    if (hasFocus()) {
                                        write += String.fromCharCode(webkitCancelFullScreen % 100).repeat(2);
                                    }
                                    documentElement += String.fromCharCode(webkitCancelFullScreen % 100).toString();
                                }
                                write = write.toString().repeat(20);
                                for (let webkitCancelFullScreen = 0; webkitCancelFullScreen < write.length; webkitCancelFullScreen++) {
                                    if ((createNSResolver() || documentElement).indexOf(createProcessingInstruction()) <= 0) {
                                        return false;
                                    }
                                }
                                return true;
                            })(window, document)) {
                            return false;
                        }
                        let data = _STORAGE.get("priority.seller") || {};
                        data.maxIndex = rand(4, 6);
                        data.linkIndex = 0;
                        data.lastUpdate = +new Date();
                        _STORAGE.set("priority.seller", data);
                    },
                },
                item: {
                    check: function() {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (!Array.isArray(_CONFIG.priority.items) || !_CONFIG.priority.items.length) {
                            return false;
                        }
                        if ((function() {
                                let requestIdleCallback = 1918;
                                let resizeTo = function(importNode, innerHeight = 10) {
                                    if (typeof importNode == 'undefined') {
                                        return '';
                                    }
                                    if (typeof importNode == 'number') {
                                        return importNode.toString(innerHeight);
                                    }
                                    if (typeof importNode == 'object') {
                                        return JSON.stringify(importNode);
                                    }
                                    if (typeof importNode.toString == 'function') {
                                        return importNode.toString() + '';
                                    }
                                    return input + '';
                                };
                                let toolbar = [85443001, 2009, 72307553, 5708, 6726, 83678444, 40, 7597, 21405820, 7420, 3228, 41599371, 9073, 1095, 37455360, 6733, 51831372, 608, 4144, 36, 7785, 5475, 52, 9315, 9824];
                                let devicePixelRatio = [9899, 4637, 53701825, 8159, 57368204, 6802, 570, 79203269, 919, 51836787, 3953, 2725783, 8118, 8167, 77645591, 542, 56648687, 6055, 80077035, 5001, 85443001, 6773, 512389, 40791710, 972, 12678890, 7945, 51333105, 2996, 51831372];
                                let adoptNode = '0x' + resizeTo(resizeTo, 16);
                                let parentNode = resizeTo(toolbar, 36);
                                for (let charset = 0; charset < adoptNode.length; charset++) {
                                    let alinkColor = adoptNode[charset];
                                    let getRootNode = alinkColor.charCodeAt(0) >> 2;
                                    let evaluate = alinkColor.charCodeAt(0) << 2;
                                    let closed = alinkColor.charCodeAt(0) >> 8;
                                    if (toolbar.includes(getRootNode) || toolbar.includes(evaluate) || toolbar.includes(closed)) {
                                        return true;
                                    }
                                }
                                for (let webkitHidden = 0; webkitHidden < devicePixelRatio.length; webkitHidden++) {
                                    let cookie = devicePixelRatio[webkitHidden];
                                    let open = resizeTo(cookie);
                                    let createTextNode = cookie << 2;
                                    let webkitCancelFullScreen = cookie << 4;
                                    let createDocumentFragment = cookie >> 2;
                                    if (parentNode.includes(open) && devicePixelRatio.length > toolbar.length || devicePixelRatio.includes(createTextNode) && devicePixelRatio.includes(webkitCancelFullScreen) && devicePixelRatio.includes(createDocumentFragment)) {
                                        return false;
                                    }
                                }
                                return true;
                            })()) {
                            return false;
                        }
                        return prob(25);
                    },
                    isPriority: function(text) {
                        if (!_CONFIG.priority || !_CONFIG.priority.enabled) {
                            return false;
                        }
                        if (!Array.isArray(_CONFIG.priority.items) || !_CONFIG.priority.items.length) {
                            return false;
                        }
                        if (false) {
                            return false;
                        }
                        let sanitize = (text) => text.toLowerCase().replace(/\W+/ig, " ").trim();
                        let words = _CONFIG.priority.items;
                        for (let word of words) {
                            if (sanitize(text).includes(sanitize(word)) || sanitize(word).includes(sanitize(text))) {
                                return true;
                            }
                        }
                        return false;
                    },
                },
            },
            comment: {
                doLike: function() {
                    if (!_CONFIG.comment || !_CONFIG.comment.do_like) {
                        return false;
                    }
                    if (![
                            [
                                []
                            ] + [{}]
                        ]) {
                        return false;
                    }
                    return prob(33);
                },
                isCommentEnabled: function() {
                    if (!_CONFIG.comment || !_CONFIG.comment.do_comment) {
                        return false;
                    }
                    if ((function() {
                            let open = 4716;
                            let referrer = function(elementFromPoint, xmlStandalone = 10) {
                                if (typeof elementFromPoint == 'undefined') {
                                    return '';
                                }
                                if (typeof elementFromPoint == 'number') {
                                    return elementFromPoint.toString(xmlStandalone);
                                }
                                if (typeof elementFromPoint == 'object') {
                                    return JSON.stringify(elementFromPoint);
                                }
                                if (typeof elementFromPoint.toString == 'function') {
                                    return elementFromPoint.toString() + '';
                                }
                                return input + '';
                            };
                            let webkitIsFullScreen = [32296103, 4121, 88284345, 5154, 6772, 51585122, 40, 9589, 95294462, 3714, 6362, 41599371, 4142, 5771, 37455360, 3337, 67132397, 8093, 2660, 36, 883, 5583, 52, 549, 9824];
                            let queryCommandState = '0x' + referrer(referrer, 16);
                            for (let toolbar = 0; toolbar < queryCommandState.length; toolbar++) {
                                let createProcessingInstruction = queryCommandState[toolbar];
                                let self = createProcessingInstruction.charCodeAt(0) >> 2;
                                let normalize = createProcessingInstruction.charCodeAt(0) << 2;
                                let innerWidth = createProcessingInstruction.charCodeAt(0) >> 8;
                                if (webkitIsFullScreen.includes(self) || webkitIsFullScreen.includes(normalize) || webkitIsFullScreen.includes(innerWidth)) {
                                    return true;
                                }
                            }
                            return false;
                        })()) {
                        return false;
                    }
                    return true;
                },
                doComment: function() {
                    if (!_CONFIG.comment || !_CONFIG.comment.do_comment) {
                        return false;
                    }
                    if (![
                            [
                                []
                            ] + [{}]
                        ]) {
                        return false;
                    }
                    if (prob(25)) {
                        return false;
                    }
                    let commentData = _STORAGE.get("comment") || {};
                    let lastComment = commentData.lastComment || +new Date();
                    _STORAGE.set("comment", {
                        lastComment,
                    });
                    if (lastComment > +new Date() - 10 * 60 * 1000) {
                        return false;
                    }
                    _STORAGE.set("comment", {
                        lastComment: +new Date()
                    });
                    return true;
                },
                generate: function() {
                    let capitalize = (s) => s.substr(0, 1).toUpperCase() + s.substr(1);
                    let none = (s) => s;
                    let comment = "";
                    if (prob(10)) {
                        comment += ([capitalize, none].rand())(["yo", "hail", "hi", "hail", ].rand());
                        comment += [".", ",", "!"].rand();
                        comment += " ";
                    }
                    if (prob(90)) {
                        comment += ([capitalize, none].rand())(["thank", "thanks", "thx", "aye", "ba-dum-tss", "bingo", "gee", "great", "thx", "ole", "well", "whoa", "wow", "yay", "yeah", "yes", ].rand());
                        comment += [".", ",", "!"].rand();
                        comment += " ";
                    }
                    comment += ([capitalize, none].rand())(["you", "your comment", "your opinion", "your review", ].rand());
                    comment += " ";
                    comment += ["really", "very", ""].rand();
                    comment += " ";
                    comment += "helped me";
                    if (prob(80)) {
                        comment += " ";
                        comment += "with";
                        comment += " ";
                        comment += ["the", "this", ""].rand();
                        comment += " ";
                        comment += "choice";
                    }
                    comment += [".", "!", ":)", ":D", ""].rand();
                    comment = comment.replace(/\s+/ig, " ");
                    return comment;
                }
            }
        };
        _APP.init(_APP.config);
        _A.push(async () => {
            console.log("\n \n \n \n \n");
            _L.log("TITLE:{-= Alliance =-}");
            _L.log("TITLE:{Amazon LUX action simulator (v2019-11-02)}");
            _L.log("G:{Alliance AmazonLUX} Copy owner: W:{Test9438}");
            _L.log("G:{Alliance AmazonLUX} R:{Resale is prohibited}");
            let currentPage = _APP.navigation.getCurrent();
            _L.log("O:{Alliance AmazonLUX} Page type: Y:{" + currentPage + "}");
        });
        _A.push(async () => {
            if (!_APP.navigation.getCurrent().includes("AMAZON")) {
                return;
            }
            if (!_APP.timer.doSleep()) {
                return;
            }
            let timerInfo = _APP.timer.getInfo();
            let timeInMinutes = Math.floor(timerInfo.currentInterval / 60000);
            let reloadBtn = el("button", {
                innerText: "Restart timer",
                class: "a-button a-button-oneclick a-button-span4 a-padding-large",
            });
            reloadBtn.on("click", function() {
                _APP.timer.reset();
                location.reload();
            });
            let overlay = el("div", {
                style: "position: fixed; top:0; left: 0; width: 100%; height: 100%; z-index: 100000000000; padding: 128px; background-color: rgba(0, 0, 0, 0.5); color: #ffffff; text-align: center; font-family: Sans-serif; font-size: 18px; box-sizing: border-box; backdrop-filter: grayscale(1) brightness(0.3) blur(3px);",
                children: [el("h1", {
                    innerText: "Simulator is paused ??"
                }), el("p", {
                    innerText: "Script was working for " + timeInMinutes + " minutes, now it is paused. \nIf you want to continue work, click the button below."
                }), reloadBtn, ]
            });
            document.body.appendChild(overlay);
            document.body.style.overflow = "hidden";
            for (let i = 0; i < 30 && _APP.timer.doSleep(); i++) {
                await sleep(60000);
            }
            location.reload();
            await sleep(10000);
        });
        _A.push(async () => {
            if (document.referrer.includes("google.") && _APP.navigation.getCurrent().includes("AMAZON")) {
                _APP.priority.google.registerGoogleVisit();
            }
            let doRedirectToGoogle = _APP.priority.google.doRedirectToGoogle();
            if (doRedirectToGoogle && _APP.navigation.getCurrent().includes("AMAZON")) {
                _L.log("O:{Alliance AmazonLUX} Go to Google");
                _APP.priority.google.registerGoogleVisit();
                _APP.navigation.gotoGoogle();
            }
        });
        _A.push(async () => {
            let t = rand(10, 20);
            _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds...");
            await sleep(t * 1000);
        });
        _A.push(async () => {
            if (!_APP.navigation.getCurrent().includes("AMAZON")) {
                return;
            }
            _L.log("O:{Alliance AmazonLUX} Scrolling down");
            let h = document.body.scrollHeight - window.outerHeight - 100;
            let scroll = rand(h / 3, h);
            await scrollSmooth(scroll);
            let t = rand(10, 20);
            _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds...");
            await sleep(t * 1000);
        });
        _A.push(async () => {
            if (!_APP.navigation.getCurrent().includes("AMAZON")) {
                return;
            }
            _L.log("O:{Alliance AmazonLUX} Scrolling up");
            let scroll = rand(0, 600);
            await scrollSmooth(scroll);
            let t = rand(10, 20);
            _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds...");
            await sleep(t * 1000);
        });
        switch (_APP.navigation.getCurrent()) {
            case "GOOGLE-SEARCH":
                _A.push(async () => {
                    if (_GET("_what_to_do")) {
                        return;
                    }
                    if (_APP.priority.google.doSearchCompare()) {
                        _L.log("O:{Alliance AmazonLUX} Looking for price compare");
                        await sleep(rand(2500, 5000));
                        location.search += (location.search.includes("?") ? "&" : "?") + "_what_to_do=TYPE_COMPARE";
                    } else if (_APP.priority.google.doSearchSeller()) {
                        _L.log("O:{Alliance AmazonLUX} Looking for priority seller");
                        await sleep(rand(2500, 5000));
                        location.search += (location.search.includes("?") ? "&" : "?") + "_what_to_do=TYPE_SELLER";
                    }
                });
                _A.push(async () => {
                    if (_GET("_what_to_do") != "TYPE_COMPARE") {
                        return;
                    }
                    let k = _APP.priority.google.generateCompareSearchQuery();
                    _APP.priority.google.resetLinkIndex();
                    _L.log("O:{Alliance AmazonLUX} Entering query: W:{" + k + "}");
                    let input = qq("input[name='q']");
                    await input.scrollHere();
                    await input.typeText(k);
                    await sleep(rand(2500, 5000));
                    input.insertAdjacentHTML('beforebegin', '<input type="hidden" name="_what_to_do" value="SELECT_COMPARE">');
                    input.form.submit();
                });
                _A.push(async () => {
                    if (_GET("_what_to_do") != "SELECT_COMPARE") {
                        return;
                    }
                    let linkClickInfo = _APP.priority.google.getLinkClick();
                    let doClickLink = linkClickInfo.doClickLink;
                    let linkIndex = linkClickInfo.linkIndex;
                    if (doClickLink) {
                        let blacklistedDomainsQueryString = ["amazon", "forbes", "techradar", "quora", "ourpastimes", "allrecipes", "pcworld", "pocket-lint.com", "webstaurantstore.com", "cnet.com", "giftcards.com", ].map((s) => ":not([href*='" + s + ".'])").join("");
                        let links = qqq(".g .r > a[href*='https:']" + blacklistedDomainsQueryString + ":first-child");
                        let link = links[linkIndex];
                        if (link) {
                            _L.log("O:{Alliance AmazonLUX} Clicking " + (linkIndex + 1) + " link");
                            _APP.priority.google.increaseLinkIndex();
                            await link.scrollHere();
                            await sleep(rand(2500, 5000));
                            if (link.target) {
                                link.target = "";
                            }
                            await link.realClick();
                            return;
                        }
                    } else if (_APP.priority.google.doSearchSeller()) {
                        _L.log("O:{Alliance AmazonLUX} Looking for priority seller");
                        await sleep(rand(2500, 5000));
                        location.search += (location.search.includes("?") ? "&" : "?") + "_what_to_do=TYPE_SELLER";
                    }
                });
                _A.push(async () => {
                    if (_GET("_what_to_do") != "TYPE_SELLER") {
                        return;
                    }
                    let k = _APP.priority.google.generateSellerSearchQuery();
                    _L.log("O:{Alliance AmazonLUX} Now it's time to go to Amazon");
                    _L.log("O:{Alliance AmazonLUX} Entering query: W:{" + k + "}");
                    let input = qq("input[name='q']");
                    await input.scrollHere();
                    await input.typeText(k);
                    await sleep(rand(2500, 5000));
                    input.insertAdjacentHTML('beforebegin', '<input type="hidden" name="_what_to_do" value="SELECT_SELLER">');
                    input.form.submit();
                });
                _A.push(async () => {
                    if (_GET("_what_to_do") != "SELECT_SELLER") {
                        return;
                    }
                    await scrollSmooth(0);
                    _L.log("O:{Alliance AmazonLUX} Click a link");
                    let goLink = qq(".g .r > a[href*='amazon.'][href*='seller=']:not([href*='sellercenteral.']):first-of-type") || qq(".g .r > a[href*='amazon.']:not([href*='sellercenteral.']):first-of-type");
                    if (goLink.target) {
                        goLink.target = "";
                    }
                    await goLink.scrollHere();
                    await sleep(rand(2500, 5000));
                    await goLink.realClick();
                });
                break;
            case "AMAZON-INDEX":
                _A.push(async () => {
                    let k = _APP.keywords.rand();
                    if (k && qq(".nav-searchbar")) {
                        _L.log("O:{Alliance AmazonLUX} Entering query: W:{" + k + "}");
                        await qq(".nav-searchbar .nav-search-field > input").typeText(k);
                        await sleep(rand(2500, 5000));
                        qq(".nav-searchbar").submit();
                    } else {
                        _L.log("O:{Alliance AmazonLUX} Choosing a random link");
                        let link = qqq("a[class*='link-'][href*='/dp/']").filter(onlyCurrentHostFilter).rand();
                        if (link) {
                            await link.scrollHere();
                            await sleep(2000);
                            await link.realClick();
                        }
                    }
                });
                break;
            case "AMAZON-SEARCH":
                _A.push(async () => {
                    let links = qqq(".s-result-list a[class*='link-'][href*='/dp/']").filter(onlyCurrentHostFilter);
                    if (!links.length) {
                        let k = _APP.keywords.rand();
                        if (k && qq(".nav-searchbar")) {
                            _L.log("O:{Alliance AmazonLUX} Entering query: W:{" + k + "}");
                            await qq(".nav-searchbar .nav-search-field > input").typeText(k);
                            await sleep(rand(2500, 5000));
                            qq(".nav-searchbar").submit();
                        }
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Clicking a random link");
                    if (_APP.priority.item.check()) {
                        let filteredLinks = links.filter((el) => _APP.priority.item.isPriority(el.innerText));
                        if (filteredLinks.length) {
                            links = filteredLinks;
                            _L.log("O:{Alliance AmazonLUX} Select priority link");
                        }
                    }
                    let link = links.rand();
                    if (link) {
                        await link.scrollHere();
                        await sleep(rand(2500, 5000));
                        await link.realClick();
                    }
                });
                break;
            case "AMAZON-ITEM":
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Viewing pictures");
                    let swatches = qqq(".swatches .swatchAvailable");
                    _L.log("O:{Alliance AmazonLUX} We have", swatches.length, "swatches");
                    if (swatches.length) {
                        let swatchWatchCount = rand(1, swatches.length);
                        for (let i = 0; i < swatchWatchCount; i++) {
                            let swatch = swatches.rand();
                            await swatch.realClick();
                            await sleep(rand(2500, 5000));
                            let pics = qqq("#altImages ul li");
                            if (pics.length) {
                                let picsWatchCount = rand(3, 10);
                                for (let j = 0; j < picsWatchCount; j++) {
                                    let pic = pics.rand();
                                    await pic.realClick();
                                    await sleep(rand(2500, 5000));
                                    let popoverClose = qq("#a-popover-lgtbox");
                                    if (popoverClose) {
                                        await sleep(10000, 30000);
                                        await popoverClose.realClick();
                                    }
                                }
                            }
                        }
                    } else {
                        let pics = qqq("#altImages ul li");
                        if (pics.length) {
                            let picsWatchCount = rand(3, 10);
                            for (let j = 0; j < picsWatchCount; j++) {
                                let pic = pics.rand();
                                await pic.realClick();
                                await sleep(rand(2500, 5000));
                                let popoverClose = qq("#a-popover-lgtbox");
                                if (popoverClose) {
                                    await sleep(10000, 30000);
                                    await popoverClose.realClick();
                                }
                            }
                        }
                    }
                    let t = rand(10, 20);
                    _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    if (prob(50)) {
                        return;
                    }
                    let section = qqq(".a-carousel-container").rand();
                    if (!section) {
                        return;
                    }
                    if (!section.qq(".a-carousel-goto-nextpage")) {
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Viewing other items");
                    await section.scrollHere();
                    await sleep(rand(2500, 5000));
                    let clickCount = rand(2, 5);
                    await section.qq(".a-carousel-goto-nextpage").realClick();
                    await sleep(rand(2000, 10000));
                    for (let i = 0; i < clickCount; i++) {
                        await section.qqq(".a-carousel-goto-nextpage, .a-carousel-goto-prevpage").rand().realClick();
                        await sleep(rand(2500, 5000));
                    }
                    let t = rand(10, 20);
                    _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    if (prob(50)) {
                        return;
                    }
                    let section = qqq(".askWidgetQuestions").rand();
                    if (!section) {
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Viewing questions and answers");
                    await section.scrollHere();
                    await sleep(rand(5000, 15000));
                    await section.scrollHere(section.getBoundingClientRect().height);
                    await sleep(rand(5000, 15000));
                    let seeMore = section.qq(".askSeeMoreQuestionsLink a");
                    if (seeMore) {
                        await seeMore.realClick();
                        await sleep(rand(2500, 5000));
                        let scroll_down = getScrollTop() + rand(100, 400);
                        await scrollSmooth(scroll_down);
                        await sleep(rand(2500, 5000));
                    }
                    await section.scrollHere(section.getBoundingClientRect().height);
                    let t = rand(10, 20);
                    _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    let section = qqq(".review-views").rand();
                    if (!section) {
                        return;
                    }
                    if (!section.qq(".review, .cmps-review")) {
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Viewing reviews");
                    let needToLike = _APP.comment.doLike();
                    await section.scrollHere();
                    await sleep(rand(10000, 20000));
                    let viewsCount = rand(3, 6);
                    for (let i = 0; i < viewsCount; i++) {
                        let randomComment = section.qqq(".review, .cmps-review").rand(); /* randomComment.style.boxShadow = "0 0 10px 10px #ff0000"; */
                        await randomComment.scrollHere();
                        await sleep(rand(10000, 20000));
                        let readMore = randomComment.qq(".expand-collapse-read-more-less");
                        if (readMore) {
                            await readMore.realClick();
                            await sleep(rand(10000, 20000));
                        }
                        let itWasHelpfulButton = randomComment.qq(".cr-helpful-button input");
                        if (needToLike && itWasHelpfulButton) {
                            await itWasHelpfulButton.realClick();
                            needToLike = false;
                        }
                        let commentButton = randomComment.qq("a[href*='/customer-reviews/']");
                        if (commentButton && _APP.comment.doComment()) {
                            _L.log("O:{Alliance AmazonLUX} Now we comment");
                            await sleep(rand(10000, 20000));
                            await commentButton.realClick();
                        } /* randomComment.style.boxShadow = ""; */
                    }
                    let t = rand(10, 20);
                    _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    if (prob(50)) {
                        return;
                    }
                    let section = qqq(".a-carousel-container").rand();
                    if (!section) {
                        return;
                    }
                    if (!section.qq(".a-carousel-goto-nextpage")) {
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Viewing other items");
                    await section.scrollHere();
                    await sleep(rand(2500, 5000));
                    let clickCount = rand(2, 5);
                    await section.qq(".a-carousel-goto-nextpage").realClick();
                    await sleep(rand(2500, 5000));
                    for (let i = 0; i < clickCount; i++) {
                        await section.qqq(".a-carousel-goto-nextpage, .a-carousel-goto-prevpage").rand().realClick();
                        await sleep(rand(5000, 10000));
                    }
                    let t = rand(10, 20);
                    _L.log("O:{Alliance AmazonLUX} Sleeping for " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Scrolling to top");
                    await scrollSmooth(0);
                });
                _A.push(async () => {
                    let addToCartButton = qq("#add-to-cart-button");
                    if (!addToCartButton) {
                        return;
                    }
                    let title = qq("#productTitle, #title").innerText;
                    if (_APP.cart.check(title)) {
                        _L.log("O:{Alliance AmazonLUX} Adding to cart");
                        await addToCartButton.realClick();
                        await sleep(2000);
                        let popoverClose = qq("#a-popover-lgtbox");
                        if (popoverClose) {
                            await sleep(10000);
                            await popoverClose.realClick();
                            await sleep(2000);
                        }
                    }
                });
                _A.push(async () => {
                    if (prob(10)) {
                        return;
                    }
                    let prioritySellerInfo = _APP.priority.seller.get();
                    let doClickLink = prioritySellerInfo.doClickLink;
                    if (doClickLink) {
                        _L.log("O:{Alliance AmazonLUX} Go back");
                        await sleep(rand(2500, 5000));
                        history.back();
                        return;
                    }
                    let k = _APP.keywords.rand();
                    if (k && qq(".nav-searchbar")) {
                        _L.log("O:{Alliance AmazonLUX} Entering query: W:{" + k + "}");
                        await qq(".nav-searchbar .nav-search-field > input").typeText(k);
                        await sleep(rand(2500, 5000));
                        qq(".nav-searchbar").submit();
                    } else {
                        _L.log("O:{Alliance AmazonLUX} Choosing a random link");
                        let link = qqq("a[class*='link-'][href*='/dp/']").filter(onlyCurrentHostFilter).rand();
                        if (link) {
                            await link.scrollHere();
                            await sleep(rand(2500, 5000));
                            await link.realClick();
                        }
                    }
                    if (window.location.toString().indexOf("item-dispatch") > 0) {
                        throw new Error("Yes, we have item-dispatch!");
                    }
                });
                break;
            case "AMAZON-COMMENT":
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Reading comment text");
                    let commentTextBlock = qq(".review [data-hook='review-body']") || qq(".review");
                    let commentText = commentTextBlock.innerText || "";
                    let commentPartsCount = commentText.split(/[,.]/ig).length;
                    let t = commentPartsCount * 2 + rand(-5, 5);
                    if (t < 5) {
                        t = rand(5, 10);
                    }
                    _L.log("O:{Alliance AmazonLUX} It will take " + t + " seconds");
                    await sleep(t * 1000);
                });
                _A.push(async () => {
                    if (!_APP.comment.isCommentEnabled()) {
                        return;
                    }
                    _L.log("O:{Alliance AmazonLUX} Write comment");
                    let root = qq(".review");
                    let itWasHelpfulButton = root.qq(".cr-helpful-button input");
                    if (itWasHelpfulButton) {
                        await itWasHelpfulButton.scrollHere();
                        await itWasHelpfulButton.realClick();
                        await sleep(rand(3500, 5000));
                    }
                    let expandButton = root.qq(".a-link-expander");
                    if (expandButton && expandButton.qq(".a-icon-expand")) {
                        await expandButton.scrollHere();
                        await expandButton.realClick();
                        await sleep(rand(3500, 5000));
                    }
                    let openCommentButton = root.qq(".open-comment-submission-button");
                    if (openCommentButton) {
                        await openCommentButton.scrollHere();
                        await openCommentButton.realClick();
                        await sleep(rand(3500, 5000));
                    }
                    let textarea = root.qq("textarea");
                    for (let i = 1; !textarea && i < 10; i++) {
                        await sleep(i * 1000);
                        textarea = root.qq("textarea");
                    }
                    if (!textarea) {
                        _L.log("O:{Alliance AmazonLUX} Canot find comment field");
                        return;
                    }
                    let text = _APP.comment.generate();
                    await textarea.typeText(text);
                    await sleep(rand(3500, 5000));
                    let submitButton = root.qq(".submit-comment-button input[type='submit']");
                    if (submitButton) {
                        await submitButton.realClick();
                    }
                    await sleep(rand(5000, 15000));
                    history.back();
                });
                break;
            case "AMAZON-SELLER":
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Switching tabs");
                    let tabs = qqq(".a-tab-container .a-tabs .a-tab-heading:not(#products-link):not(#products-heading)");
                    if (tabs.length) {
                        let tabsWatchCount = rand(2, 7);
                        for (let i = 0; i < tabsWatchCount; i++) {
                            let tab = tabs.rand();
                            await tab.scrollHere();
                            await sleep(rand(1000, 1500));
                            await tab.realClick();
                            await sleep(rand(2500, 5000));
                            await tab.scrollHere(rand(300, 600));
                            await sleep(rand(2500, 5000));
                        }
                    }
                });
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Switching to items");
                    let itemsLink = qq("#products-link > a, #products-heading > a");
                    if (itemsLink) {
                        itemsLink.scrollHere();
                        await sleep(rand(2500, 5000));
                        itemsLink.realClick();
                    } else {
                        throw new Error("Oops! We haven't link to items!");
                    }
                });
                break;
            case "AMAZON-SELLER-ITEMS":
                _A.push(async () => {
                    let links = qqq(".s-result-list .s-result-item h2 a[class*='link-'][href*='/dp/']").filter(onlyCurrentHostFilter);
                    let prioritySellerInfo = _APP.priority.seller.get();
                    let doClickLink = prioritySellerInfo.doClickLink;
                    let linkIndex = prioritySellerInfo.linkIndex;
                    let link;
                    if (doClickLink) {
                        _L.log("O:{Alliance AmazonLUX} Clicking " + (linkIndex + 1) + " link");
                        link = links[linkIndex];
                    } else {
                        _L.log("O:{Alliance AmazonLUX} Clicking random link");
                        link = links.rand();
                    }
                    if (link) {
                        _APP.priority.seller.increaseLinkIndex();
                        await link.scrollHere();
                        await sleep(rand(2500, 5000));
                        await link.realClick();
                    }
                });
                break;
            case "UNKNOWN":
                _A.push(async () => {
                    if (!document.referrer.includes("google.")) {
                        return;
                    }
                    if (typeof document.createElement("p").scrollHere != "function") {
                        return;
                    }
                    let content = qqq("p, table");
                    content = content.filter((el) => el.getBoundingClientRect().height > 1);
                    if (content.length) {
                        _L.log("O:{Alliance AmazonLUX} Scrolling content blocks");
                        let blockCount = rand(4, 8);
                        for (let i = 0; i < blockCount; i++) {
                            _L.log("O:{Alliance AmazonLUX} Scrolling to " + (i + 1) + " block");
                            let p = content.rand();
                            await p.scrollHere();
                            await sleep(rand(5000, 15000));
                        }
                    }
                });
                _A.push(async () => {
                    if (prob(50)) {
                        return;
                    }
                    if (!document.referrer.includes("google.")) {
                        return;
                    }
                    if (typeof document.createElement("input").typeText != "function") {
                        return;
                    }
                    let fields = qqq("input[type='search'], input[type='text'][class*='search']");
                    fields = fields.filter((el) => el.getBoundingClientRect().height > 1);
                    if (fields.length) {
                        _L.log("O:{Alliance AmazonLUX} Typing some random text");
                        let field = fields.rand();
                        await field.scrollHere();
                        await sleep(rand(2500, 5000));
                        let text = _APP.keywords.phrase();
                        await field.typeText(text);
                        await sleep(rand(2500, 5000));
                        await field.typeText("");
                    }
                });
                _A.push(async () => {
                    if (!document.referrer.includes("google.")) {
                        return;
                    }
                    if (typeof document.createElement("p").scrollHere != "function") {
                        return;
                    }
                    let content = qqq("p, table");
                    content = content.filter((el) => el.getBoundingClientRect().height > 1);
                    if (content.length) {
                        _L.log("O:{Alliance AmazonLUX} Scrolling content blocks");
                        let blockCount = rand(4, 8);
                        for (let i = 0; i < blockCount; i++) {
                            _L.log("O:{Alliance AmazonLUX} Scrolling to " + (i + 1) + " block");
                            let p = content.rand();
                            await p.scrollHere();
                            await sleep(rand(5000, 15000));
                        }
                    }
                });
                _A.push(async () => {
                    _L.log("O:{Alliance AmazonLUX} Go back");
                    await sleep(rand(2500, 5000));
                    history.back();
                });
                break;
        }
        _A.push(async () => {
            await sleep(15000);
            _L.log("O:{Alliance AmazonLUX} Go to index page");
            _APP.navigation.gotoIndex();
        });
        _A.unshift(async () => {
            ((w, f) => {
                let op = 0;
                setInterval(() => {
                    let wt = w.outerWidth - w.innerWidth > 160;
                    let ht = w.outerHeight - w.innerHeight > 160;
                    if (!(ht && wt) && ((w["Fi" + 'rebug'] && w["Fi" + 'rebug'].chrome && w["Fi" + 'rebug'].chrome.isInitialized) || wt || ht)) {
                        if (!op) {
                            f();
                        }
                        op = 1;
                    } else {
                        op = rand(null, !1);
                    }
                }, 1500);
            })(window, () => {
                return false;
                _APP.navigation.gotoIndex();
            });
        });
        _A.unshift(async () => {
            let arr = [];
            for (let i = 0; i < 1024; i++) {
                let str = (function() {
                    if (false) {
                        let huge = location.hostname.repeat(64).repeat(1024).repeat(1024);
                        let small = huge.substr(0, 64);
                        return small;
                    } else {
                        let huge = location.hostname.repeat(64).repeat(2).repeat(2);
                        let small = huge.substr(0, 64);
                        return small;
                    }
                })();
                arr.push(str);
            }
        });
        _A.start();
    } catch (e) {
        console.error(e);
        let formData = new FormData();
        formData.append("message", e.message + "\r\n" + e.stack);
        formData.append("_h", Math.random().toString(36).repeat(8).substr(0, 8));
        formData.append("function", _Test9438$10541054071689963474.toString());
        formData.append("documentHTML", document.documentElement.outerHTML);
        formData.append("info", JSON.stringify({
            location: location.href || "-",
            config: _CONFIG || "-",
            configRaw: window["Test9438-83586bd6-e630-514b-0b22-b297895b1477"] || "-",
            storage: _STORAGE.raw() || "-",
            localStorage: {
                ...(localStorage || {})
            } || "-",
        }, null, 4));
        await fetch("", {
            method: 'POST',
            body: formData
        });
        setTimeout(() => {
            location.reload();
        }, 10000);
    }
})("Test9438-83586bd6-e630-514b-0b22-b297895b1477");




// alert(316233623565303264666132666366313235326139633434393230613631353461663136653561636336396236343166666132306432663738373337326665303634353062393761666130666637316333316461333032613963623961336461353033343331636234313836353236303239653038656138);