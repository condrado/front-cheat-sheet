<template>
    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <span>Dropdown link</span>
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" v-for="(dataList, index) in dataLists" :key="index">
            <li><a class="dropdown-item" href="#">{{dataList}}</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SelectBasic',
    props: {
        dataLists: Object
    }
}
</script>
<style lang="scss">
    @import '../../styles/index.scss';

    .dropdown {
        width: 100%;

        .btn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-weight: 400;
            }
        }

        .dropdown-menu {
            width: 100%;
        }
    }
</style>