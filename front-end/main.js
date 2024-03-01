const {createApp} = Vue; 

const app = createApp({
    data() {
        return {
            title: 'ToDo List JSON',

            taskList: [],
        };
    },

    methods: {
        // funzione che recupera la taskList
        getTaskLisk() {
            axios.get('../back-end/api/get-tasklist.php').then((res) => {
                this.taskList = res.data;
            });
        },
    },

    mounted() {
        this.getTaskLisk();
    }
});

app.mount('#app');