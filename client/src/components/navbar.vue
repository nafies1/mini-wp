<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="info">
            <b-navbar-brand href="#" @click.prevent="changePart('article')">Mini WP</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#" @click.prevent="changePart('addArticle')">Add Article</b-nav-item>
                    </b-navbar-nav>

                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                        <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Change Password</b-dropdown-item>
                        <b-dropdown-item href="#" @click.prevent="logout('login')">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        logout(page){
            console.log('dari navbar');            
            this.$emit('log-out', page)
        },
        changePart(part){
            console.log('dari navbar');            
            this.$emit('change-part', part)
        }
    },
}
</script>

<style>

</style>