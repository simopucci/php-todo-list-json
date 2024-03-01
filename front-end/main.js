const {createApp} = Vue; 

const app = createApp({
    data() {
        return {
            title: 'ToDo List JSON',
            taskList: [],

            newTask: {
                text: '',
                done: false,
            },
        };
    },

    methods: {
        // metodo che recupera la taskList
        getTaskLisk() {
            axios.get('../back-end/api/get-tasklist.php').then((res) => {
                this.taskList = res.data;
            });
        },

        // metodo che invia una nuova task e riceve lista aggiornata
        addTask() {
            const data = {
                text: this.newTask.text,
                done: false,
            };

            const params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios.post('../back-end/api/add-task.php', data, params).then((res) => {
                this.taskList = res.data;
            });
        },

        // metodo che modifica lo status della task
        updateStatusTask(task, index) {
            const newStatus = !task.done;

            const data = {
                index,
                text: task.text,
                done: newStatus,
            };

            const params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            axios.post('../back-end/api/update-task.php', data, params).then((res) => {
                this.taskList = res.data;
            });
        },

         // metodo che elimina la task
        deleteTask(index) {
            const data = { index };

            const params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            axios.post('../back-end/api/delete-task.php', data, params).then((res) => {
                this.taskList = res.data;
            });
        }
    },

    mounted() {
        this.getTaskLisk();
    },

});

app.mount('#app');