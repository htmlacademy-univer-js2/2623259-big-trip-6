import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  constructor(container) {
    this.container = container;
    this.filtersComponent = new FiltersView();
    this.sortComponent = new SortView();
    this.createFormComponent = new CreateFormView();
  }

  init() {
    // Mock-данные для точек
    const points = [
      { date: '2024-03-18', monthDay: 'MAR 18', type: 'flight', destination: 'Geneva', startTime: '10:30', endTime: '12:30', price: '150' },
      { date: '2024-03-19', monthDay: 'MAR 19', type: 'drive', destination: 'Chamonix', startTime: '09:00', endTime: '11:00', price: '80' },
      { date: '2024-03-20', monthDay: 'MAR 20', type: 'check-in', destination: 'Hotel', startTime: '14:00', endTime: '15:00', price: '200' }
    ];

    // Рендерим фильтры
    const filtersContainer = this.container.querySelector('.trip-controls__filters');
    render(this.filtersComponent, filtersContainer);

    // Рендерим сортировку
    const eventsContainer = this.container.querySelector('.trip-events');
    render(this.sortComponent, eventsContainer);

    // Создаём список для точек
    const listContainer = document.createElement('ul');
    listContainer.className = 'trip-events__list';
    eventsContainer.appendChild(listContainer);

    // Форма редактирования первая
    const editFormComponent = new EditFormView(points[0]);
    render(editFormComponent, listContainer);

    // Остальные точки
    points.forEach((point) => {
      const pointComponent = new TripPointView(point);
      render(pointComponent, listContainer);
    });
  }
}