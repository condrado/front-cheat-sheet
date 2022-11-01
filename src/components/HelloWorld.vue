<template>
    <div class="cover-container d-flex w-100 h-100 p-3 pb-0 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h1 class="float-md-start mb-0 mt-0">{{ $t('title_page') }}</h1>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="#">{{ $t('nav.git') }}</a>
            <a class="nav-link" href="#">{{ $t('nav.css') }}</a>
            <a class="nav-link" href="#">{{ $t('nav.html') }}</a>
            <div class="nav-select">
              <LocaleSwitcher></LocaleSwitcher>
            </div>
            
          </nav>
        </div>
      </header>

      <main class="main-container">
        <PageGit></PageGit>
      </main>

      <footer class="mt-auto text-white-50">
        <p>By Condrado.</p>
      </footer>
    </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";
import PageGit from './PageGit.vue';

export default {
  name: 'HelloWorld',
  components: {
    LocaleSwitcher,
    PageGit
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/index.scss';


  .cover-container {
    max-width: 42em;
  }

  /*
  * Header
  */

  .nav-masthead {
    .nav-link,
    .nav-select {
      padding: .25rem 0;
      font-weight: 700;
      color: rgba(255, 255, 255, .5);
      background-color: transparent;
      border-bottom: .25rem solid transparent;
    }
    .nav-link {
      &:hover, 
      &:focus {
        border-bottom-color: rgba(255, 255, 255, .25);
      }

      + .nav-link,
      + .nav-select {
        margin-left: 1rem;

        select {
          margin-left: 1rem;
        }
      }
    }
    .active {
      color: #fff;
      border-bottom-color: #fff;
    }
    .nav-select {
      position: relative;
      margin-left: 1rem;

      &::before {
        content: "";
        border-left: 1px solid rgba(255, 255, 255, .5);
        position: absolute;
        height: 1rem;
        top: 0.55rem;
      }

      select {
        font-weight: 700;
        color: rgba(255, 255, 255, .5);
        text-transform: uppercase;
      }
    }
  }


  .main-container {
    border: 1px dashed rgba(255, 255, 255, .5);
    border-radius: .5rem;
    height: calc(100vh - (32px + 36px + 40px + 32px));
    box-shadow: 0 0 5rem rgba(0, 0, 0, .4);
    padding: rem(24) rem(12);
  }
</style>
