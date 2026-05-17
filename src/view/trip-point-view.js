import AbstractView from './abstract-view.js';

export default class TripPointView extends AbstractView {
  constructor(pointData) {
    super();
    this.pointData = pointData;
  }

  getTemplate() {
    return `
      <li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime="${this.pointData.date}">${this.pointData.monthDay}</time>
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${this.pointData.type}.png" alt="Event type icon">
          </div>
          <div class="event__title">
            <h3 class="event__title">${this.pointData.type} to ${this.pointData.destination}</h3>
          </div>
          <div class="event__schedule">
            <p class="event__time">${this.pointData.startTime} &mdash; ${this.pointData.endTime}</p>
          </div>
          <p class="event__price">€ ${this.pointData.price}</p>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>
    `;
  }
}