<template>
    <b-container fluid class='scroll-container'>
        <b-row>
            <b-col>
                <h1 class='display-4 text-center' :class='[textColor]'>I am a: </h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card
                    header='Teacher' 
                    style='border-width: 3px;'
                    header-class="font-weight-bold text-center"
                    :img-src='TeacherImage'
                    :body-class="['p-0', backgroundColor]"
                    img-alt="A picture of a musical teacher talking to her class."
                    img-fluid>
                    <b-button block :variant='themeColor' :to="{ name: 'roles', params: { roleProp: 'teacher' }}" class='rounded-0'>Click here to start.</b-button>
                </b-card>
            </b-col>
            <b-col>
                <b-card 
                    header='Student' 
                    style='border-width: 3px;'
                    header-class="font-weight-bold text-center"
                    :body-class="['p-0', backgroundColor]"
                    img-alt="A picture of a young, humble student studying."
                    :img-src='StudentImage' img-fluid>
                    <b-button block :variant='themeColor' :to="{ name: 'roles', params: { roleProp: 'student' }}" class='rounded-0'>Click here to join.</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TeacherImage from '@/assets/teacher2.jpg';
import StudentImage from '@/assets/student2.jpg';
export default {
    name: 'roles',
    data() {
        return {
            TeacherImage: TeacherImage,
            StudentImage: StudentImage
        }
    }
}
</script>

<style>

</style>
