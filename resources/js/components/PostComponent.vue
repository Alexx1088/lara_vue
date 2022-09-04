<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Возраст</th>
                <th scope="col">профессия</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in personsAgeMoreTwenty">
                <th scope="row">{{ person.id}}</th>
                <td>{{ person.name}}</td>
                <td>{{ person.age}}</td>
                <td>{{ person.job}}</td>
            </tr>
            <div>personAgeLessTwenty</div>
            <tr v-for="person in personAgeLessTwenty">
                <th scope="row">{{ person.id}}</th>
                <td>{{ person.name}}</td>
                <td>{{ person.age}}</td>
                <td>{{ person.job}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SinglePostComponent from "./SinglePostComponent";

    export default {
        name: "PostComponent",

              data() {
            return {
                persons: [{
                    id: 1,
                    name: 'Vasya',
                    age: 21,
                    job: 'coach'
                },
                    {
                        id: 2,
                        name: 'Elena',
                        age: 16,
                        job: 'rest'
                    },
                    {
                        id: 3,
                        name: 'Petr',
                        age: 34,
                        job: 'seller'
                    },
                    {
                        id: 4,
                        name: 'Ksenia',
                        age: 21,
                        job: 'traveller'
                    },
                    {
                        id: 5,
                        name: 'Olga',
                        age: 25,
                        job: 'teacher'
                    },
                ]
            }
        },
        methods: {
            sayHello() {
                console.log('hello!')
            },
            sayHi() {
                console.log('hi!')
            }
        },

        computed: {
            personsAgeMoreTwenty() {
                return this.persons.filter(function (person) {
                    return person.age > 20
                })
            },

       personAgeLessTwenty() {
                return this.persons.filter(function (persons) {
                     return persons.age< 20
                })
       }

        },
        components: {
            SinglePostComponent
        },
    }
</script>

<style scoped>

</style>
