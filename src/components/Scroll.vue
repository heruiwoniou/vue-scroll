<template>
    <div class="scroll" :style="styleObject">
        <slot></slot>
        <div class="scroll-bar-y"></div>
    </div>
</template>
<script>
    export default {
        name:'vue-scroll',
        data(){
            return {
                distance: 20,
                scroll:0
            }
        },
        computed:{
            styleObject(){
                return {
                    'margin-top': -1 * this.scroll + 'px'
                }
            }
        },
        mounted:function(){
            this.$el.parentNode.style.position="relative";
            this.$el.addEventListener('mousewheel',this.mousewheel.bind(this),false)
        },
        methods:{
            mousewheel:function(e){
                var d = (e.deltaY > 0 ? this.distance : -1 * this.distance);
                if(d < 0 && this.scroll + d > 0 || d > 0 && this.scroll + d + this.$el.parentNode.offsetHeight < this.$el.offsetHeight) 
                    this.scroll += d; 
            }
        }
    }
</script>
<style lang="stylus">
    @import '../styles/components/scroll';
</style>