import template from '../utils/template.js';

const notificationMessage = 'notification-message';

export default class Notifications {
    /**
     * @param {HTMLElement} domElem
     */
    constructor(domElem) {
        this.domElem = domElem;

        this.domElem.addEventListener('click', e => this.hideNotification(e.target));
        this.domElem.addEventListener('transitionend', e => this.hideNotification(e.target));
    }

    /**
     * @param {String} message
     * @returns {Node}
     */
    showNotification(message) {
        const notification = template({
            tag: 'div',
            classNames: [ notificationMessage ],
            content: [ message ]
        });

        this.domElem.appendChild(notification);

        if (notification instanceof HTMLElement) {
            requestAnimationFrame(() => notification.classList.add('hidden'));
        }

        return notification;
    }

    /**
     * @param {EventTarget} elem
     */
    hideNotification(elem) {
        if (elem instanceof HTMLElement && elem.classList.contains(notificationMessage)) {
            elem.parentNode.removeChild(elem);
        }
    }
}
