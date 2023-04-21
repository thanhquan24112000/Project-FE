import Base from '@/components';
import { defineComponent } from 'vue';
import UserRepository from '@/repositories/UserRepository';

export default defineComponent({
    extends: Base,
    data() {
        return {
            userRepository: new UserRepository(),
        };
    },
    created() {
        this.userRepository.getListOfUser();
    }
});