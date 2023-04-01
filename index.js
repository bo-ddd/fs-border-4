import BorderBoxFour from './src/component/BorderBoxFour.vue'
export const BorderBoxFourPlugin = {
    install: function (app) {
        app.component(BorderBoxFour.name, BorderBoxFour)
    }
}
