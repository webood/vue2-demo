import Vue from 'vue';
import { Button, Select, Message, ColorPicker } from 'element-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(ColorPicker);

Vue.prototype.$message = Message;
