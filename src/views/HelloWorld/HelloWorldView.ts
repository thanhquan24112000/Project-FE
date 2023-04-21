import { defineComponent } from 'vue';
import ExampleComponent from '@/components/Example';

export default defineComponent({
    components: {
        ExampleComponent
    },
    name: 'HelloWorld',
    data() {
        return {
            message: 'Hello, World!'
        };
    },
    created() {

    },
    methods: {
    }
});