<template>
    <div class='side-nav d-inline-flex h-100'>
        <div class='d-inline-flex flex-column justify-content-between h-100 icon-bar'>
            <b-list-group>
                <b-list-group-item @click="toggle(false)" to="/knowledge" class='rounded-0' :class="classutils.center" tag="button">
                    <fa-icon icon='brain'></fa-icon>
                </b-list-group-item>
            </b-list-group>

            <b-list-group>
                <b-list-group-item @click="toggle(false)" to="/settings" class='rounded-0' :class="classutils.center" tag="button">
                    <fa-icon icon='cog'></fa-icon>
                </b-list-group-item>
                <b-list-group-item @click="toggle(true)" class='rounded-0' :class="classutils.center" tag="button">
                    <fa-icon :flip="iconDirection" icon='angle-double-right'></fa-icon>
                </b-list-group-item>
            </b-list-group>
        </div>
        
        <section class='side-container' :class='sidebarWidth' v-if="!collapsed">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
export default {
    name: 'side-navbar',
    data() {
        return {
            collapsed: true,
            classutils: {
              center: 'd-flex justify-content-center align-items-center'  
            }
        }
    },
    computed: {
        /**
         * Determine the direction of the arrow icon
         */
        iconDirection: function() {
            return this.collapsed ? 'horizontal' : null;
        },
        sidebarWidth: function() {
            return {
                expanded: !this.collapsed,
                '' : this.collapsed 
            }
        }
    },
    methods: {
        /**
         * Toggle the navigation pane.
         * @param isCollapseButton {Boolean} - Whether the button clicked was the collapse button.
         */
        toggle(isCollapseButton) {
            if (isCollapseButton) {
                this.collapsed = !this.collapsed;
            } else if (this.collapsed) {
                this.collapsed = false;
            }
            
        }
    }

}
</script>

<style lang='scss'>

.side-container {
    display: inline-block;
    width: 300px;
}

.icon-bar {
    width: 50px;
    background-color: #ececec;
    border-left: 2px solid black;
    border-right: 2px solid black;
}
</style>
