import AbstractView from './abstract-view.js';

export default class EditFormView extends AbstractView {
  constructor(pointData) {
    super();
    this.pointData = pointData;
  }

  getTemplate() {
    return `
      <li class="trip-events__item">
        <form class="event event--edit" action="#" method="post">
          <header class="event__header">
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-1">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/${this.pointData.type}.png" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            </div>
            <div class="event__field-group  event__field-group--destination">
              <label class="event__label  event__type-output" for="event-destination-1">${this.pointData.type}</label>
              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${this.pointData.destination}" list="destination-list-1">
            </div>
            <div class="event__field-group  event__field-group--time">
              <label class="visually-hidden">Time</label>
              <input class="event__input  event__input--time" type="text" name="event-start-time" value="${this.pointData.startTime}">
              &mdash;
              <input class="event__input  event__input--time" type="text" name="event-end-time" value="${this.pointData.endTime}">
            </div>
            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                €
              </label>
              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${this.pointData.price}">
            </div>
            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </header>
        </form>
      </li>
    `;
  }
}