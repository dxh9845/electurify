<template>
    <div>
        <section v-if="role === 'teacher'"> 
            <section-icon icon='microphone' :variant='themeColor'></section-icon>
            <h4>Improve voice recognition </h4>
            <p>
                Help improve voice recognition by adding words and phrases that will be discussed!
                <router-link to="context">Click here.</router-link>
            </p>
        </section>

        <section>
            <section-icon icon='palette' :variant='themeColor'></section-icon>
            <h4>Change theme</h4>
            <p>Customize electurify to your liking! Choose your favorite color below.</p>
            <small>Theme:</small>
            <theme-picker></theme-picker>
            <small>Color:</small>
            <color-picker></color-picker>
            <small>Font:</small>
            <font-picker></font-picker>
        </section>

        <section>
            <section-icon icon='info' :variant='themeColor'> </section-icon>
            <h4>About</h4>
            <p> <em>electurify: The Accessible Lecture Tool</em> was written by Daniel Herzig and Regina Wang, © 2019.</p>
        </section>
    </div>
</template>

<script>
import SectionIcon from '@/components/Common/SectionIcon.vue';
import ThemePicker from '@/components/Common/ThemePicker.vue';
import ColorPicker from '@/components/Common/ColorPicker.vue';
import FontPicker from '@/components/Common/FontPicker.vue';

export default {
  name: 'settings-panel',
  components: {
    SectionIcon,
    ColorPicker,
    ThemePicker,
    FontPicker
  },
};
</script>
