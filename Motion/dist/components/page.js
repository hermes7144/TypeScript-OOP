import { BaseComponent } from '../component.js';
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`
    <li class="page-item">
  <section class="page-item__body"></section>
  <div class="page-item controls">
    <button class="close">&times;</button>
  </div>
</li>`);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page">This is PageComponent!</ul>');
    }
}
//# sourceMappingURL=page.js.map