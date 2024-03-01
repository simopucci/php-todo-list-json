const {createApp} = Vue; 

const app = createApp({
    data() {
        return {
            title: 'ToDo List JSON',

            taskList: [
                // {
                //     text: 'Task 1',
                //     done: true,
                // },
                // {
                //     text: 'Task 2',
                //     done: false,
                // },
                // {
                //     text: 'Task 3',
                //     done: false,
                // },
                // {
                //     text: 'Task 4',
                //     done: true,
                // },
            ],
        };
    },

    methods: {
        // funzione che recupera la taskList
        getTaskLisk() {
            
        }
    },

    mounted() {
        this.getTaskLisk();
    }
});

app.mount('#app');