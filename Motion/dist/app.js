import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { InputDialog } from './components/dialog/dialog.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
class App {
    constructor(appRoot, dialogeRoot) {
        this.dialogeRoot = dialogeRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('#new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogeRoot);
            dialog.setOncloseListner(() => {
                dialog.removeFrom(this.dialogeRoot);
            });
            dialog.setOnSubmitListner(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogeRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
//# sourceMappingURL=app.js.map