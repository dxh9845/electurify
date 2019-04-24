<template>
    <nav id='sidebar' class='h-100'>
        <div id='icon-bar' class='d-inline-flex flex-column justify-content-between h-100' :class="[backgroundColor]" >
            <b-list-group>
                <b-list-group-item
                    :variant='themeColor'
                    @click="toggle(false)"
                    role='button' title='Knowledge panel'
                    v-b-tooltip.hover.left="'Knowledge panel'"
                    to="knowledge" class='rounded-0'
                    append
                    :class="[classutils.center]" tag="button"
                    aria-label='Activate knowledge panel'>
                    <fa-icon icon='brain'></fa-icon>
                </b-list-group-item>
            </b-list-group>

            <b-list-group>
                <b-list-group-item
                    :variant='themeColor'
                    @click="toggle(false)"
                    to="settings" class='rounded-0'
                    append
                    role='button' title='Settings panel'
                    v-b-tooltip.hover.left="'Settings panel'"
                    :class="[classutils.center]" tag="button"
                    aria-label='Activate settings panel'>
                    <fa-icon icon='cog'></fa-icon>
                </b-list-group-item>
                <b-list-group-item
                  :variant='themeColor'
                    @click="toggle(true)" class='rounded-0'
                    role='button' title='Collapse sidebar'
                    :class="[classutils.center]" tag="button"
                    aria-label='Collapse sidebar'>
                    <fa-icon :flip="iconDirection" icon='angle-double-right'></fa-icon>
                </b-list-group-item>
            </b-list-group>
        </div>

        <section id='side-container' class='scroll-container' v-if="!collapsed">
            <router-view></router-view>
        </section>
    </nav>
</template>

<script>
export default {
  name: 'side-navbar',
  data() {
    return {
      collapsed: true,
      classutils: {
        center: 'd-flex justify-content-center align-items-center',
      },
    };
  },
  computed: {
    /**
     * Determine the direction of the arrow icon
     */
    iconDirection() {
      return this.collapsed ? 'horizontal' : null;
    },
    sidebarWidth() {
      return {
        expanded: !this.collapsed,
        '': this.collapsed,
      };
    },
  },
  methods: {
    /**
     * Toggle the navigation pane.
     * @param isCollapseButton {Boolean} - Whether the button clicked was the collapse button.
     */
    toggle(isCollapseButton) {
      // If the button is the "collapse button", invert whatever value it has
      if (isCollapseButton) {
        this.collapsed = !this.collapsed;
      }
      // If this button is collapsed, expand it
      else if (this.collapsed) {
        this.collapsed = false;
      }
    },
  },

};
</script>

<style lang='scss'>

#sidebar {
    display: flex;
    flex-shrink: 0;
}

#side-container {
    display: inline-block;
    width: 300px;
}

#icon-bar {
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    width: 50px;
}
</style>
