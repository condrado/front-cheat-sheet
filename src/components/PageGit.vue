<template>
    <div class="page-container">
        <div class="container">
            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
            <div class="row">
                <div class="col-md-8">
                    <h2 class="mt-0 mb-4 text-start">{{ $t('nav.git') }}</h2>
                </div>
                <div class="col-6 col-md-4">
                    <SelectBasic :dataLists="selectList"
                    ></SelectBasic>
                </div>
            </div>

            <div class="row position-relative">
                <input class="search-text" type="search" v-model="searchGit" :placeholder="$t('git.placehlder')" @keyup.enter="search" @search="clearSearch">
                <perfect-scrollbar>
                    <template v-for="gitDataList in gitDataLists" :key="gitDataList.title">
                        <div class="col-md-12 text-start">
                            <template v-for="section in gitDataList.sections" :key="section.title">
                                <h3 class="subtitle mt-3 mb-4">{{section.title}}</h3>
                                <template v-for="(content, index) in section.contents" :key="index">
                                    <div class="case pb-4">
                                        <template v-if="content.code">
                                            <input type="hidden" :value="content.code">
                                            <p class="case__code" :id="'code-' + index">
                                                <span @click.stop.prevent="copy">{{$t(content.code)}}</span>
                                                <!-- <span class="material-symbols-outlined" @click.stop.prevent="copy">content_copy</span> -->
                                            </p>
                                        </template>
                                        <template v-if="content.description">
                                            <p class="case__description" v-html="$t(content.description)"></p>
                                        </template>
                                        <template v-if="content.example">
                                            <input type="hidden" :value="content.example">
                                            <p class="case__example">
                                                <span @click.stop.prevent="copy">{{content.example}}</span>
                                            </p>
                                        </template>
                                    </div>
                                </template>
                            </template>
                        </div>
                    </template>
                </perfect-scrollbar>
            </div>
        </div>
    </div>
</template>
<script>
import SelectBasic from "./modules/SelectBasic.vue"

export default {
    name: 'PageGit',    
    components: { SelectBasic },
    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false
            },
            gitDataLists : this.$store.state.git,
            selectList: [],
            searchGit: '',
            searchList: []
        }
    },
    mounted() {
        for (let index = 0; index < this.gitDataLists.length; index++) {
            const gitDataList = this.gitDataLists[index];
            this.selectList.push(gitDataList.title)
        }

        this.searchList = document.querySelectorAll('.case__code');
    },
    methods: {
        copy(e) {
            const btn = e.target;

            let testingCodeToCopy = btn.parentElement.previousElementSibling
            testingCodeToCopy.setAttribute('type', 'text')
            testingCodeToCopy.select()

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Testing code was copied ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }

            /* unselect the range */
            testingCodeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },
        search() {
            for (let j = 0; j < this.searchList.length; j++) {
                const code = this.searchList[j];
                // const scrollDiv = document.querySelector('.page-container .ps')

                code.parentElement.classList.add('d-none');

                if(code.textContent.includes(this.searchGit)) {
                    // scrollDiv.scrollTop = code.offsetParent.offsetTop
                    code.parentElement.classList.remove('d-none');
                }
            }
        },
        clearSearch() {
            for (let j = 0; j < this.searchList.length; j++) {
                const code = this.searchList[j];
                
                if(this.searchGit === '') {
                    code.parentElement.classList.remove('d-none');
                }
            }

        }
    }
}
</script>
<style scoped lang="scss">
    @import '../styles/index.scss';

    .page-container {
        height: 100%;

        > .container {
            height: 100%;

            .row {
                &:last-child {
                    height: calc(100% - 62px);
                    position: relative;

                    &::before {
                        content: "";
                        border-top: 1px dashed rgba(255, 255, 255, 0.5);
                        position: absolute;
                        width: calc(100% - 24px);
                        margin-left: 12px;
                    }
                    .ps {
                        height: 100%;
                    }
                }
            }
        }

        .search-text {
            position: absolute;
            right: 0.75rem;
            top: 1rem;
            width: 33%;
            z-index: 1;
            padding: 8px 8px;
            background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: #ffffff;
            font-weight: 400;

            &::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 10px;
                width: 10px;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAAkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUkJKUK/f64gAAABl0Uk5TAECf7/8wED8gf29Qz9+/gLBg8KDgcMDQkMifD6oAAAKZSURBVHicxdvrUuMwDAVgpw0Fdgs0ddnd93/SNaWFXGzrco4G/5VH3zjpuI6UpPQ9ht1+3O8eUtQ4PD41Y8/j5/gVQ/8+ltwvjeS78T52EfY9/euha4fo3+mPW31uB+jz9Bt9adP1ZfqVvrbJ+jr9Qt/aVH2bfqbXbKJeS/+l122aXk9/098aNklvLe2qD02borfsstuU6KmD43rbHscppX0PR/WePR5T6tqg3rXHMaVznC7YBc/CDL8u2ZeUniTcq0v2+FYmTTG6aJ+v20yILtu341qArrYDdINN1002WTfaVN1sE3WHTdNdNkl32hTdbRN0wIZ1yAZ10IZ02AZ0gu3WKbZTJ9kunWY7dKJt1qm2USfbJp1uG/QAW62H2Eo9yFbpYbZGj7NxHbFRHbMxHbURHbf9OsP26hzbp7Nsj86z7TrTtupc26azbYvOt/V6hK3VY2ydHmWn9P6D9uEor3z6QTtK19kxutaO0PU2X7fYbN1mc3WrzdTtNk/32CzdZ3N0r83Q/TauIzaqYzamozai47ZfV9iT2AB36hpb0X536To7RtfaEbreDtDF+to8oXyeN+kmu/eGk0M32tQrb7aJusOm6S6bpDttiu62CTpgwzpkgzpoQzpsAzrB1lROqkkotvNfhmS7dJrt0Im2+VdHtY062TbpdNugB9hqnXz80+sfZVrxkOx83BIXlcsJPciW9X3/5XrIlq+8uHKouCDoZcYlzBb0U+rfGrig1NOHjwl/4uyenq/xw984u63nW7yhk8qndT1/xas6rXBc0/MsXtGJJfOtnhfxjU5tFqyf3/MqvtLJbZKpa690eoNo6toLPaA1NnXtot++oTqHNAXv+r/mhLL4S25/NguN4XQu+/kQk9wx/gPAUH4c0KKO8gAAAABJRU5ErkJggg==);
                background-size: 10px 10px;
            }
        }

        .subtitle {
            width: 65%;
            padding-right: rem(16);
        }

        .case {
            position: relative;

            &::after {
                content: "";
                border-top: 1px solid rgba(255, 255, 255, 0.5);
                position: absolute;
                width: 50px;
                margin-left: calc(50% - 25px);
                margin-top: rem(8);
            }

            &__code {
                display: flex;

                span {
                    font-weight: 400;
                    cursor: pointer;
                }
            }

            &__description {

            }

            &__example {
                padding: 1rem;
                background-color: #909294;
                color: #212529;
                font-weight: 400;
                text-shadow: none;
                border-radius: rem(4);

                span {
                    font-weight: 400;
                    cursor: pointer;
                }
            }
        }
    }
</style>