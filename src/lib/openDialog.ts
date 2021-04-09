import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, confirm, cancel,moveDialog } = options;
  const div = document.createElement("div");
  const root = document.querySelector('#app');
  root.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          confirm, cancel,moveDialog
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
