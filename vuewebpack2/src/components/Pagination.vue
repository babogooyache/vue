<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{'disabled': !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{'active': pages.current_page == page}">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled': !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  name: 'pagination',
  // props: ['pages'],
  props: {                  // 從 products 傳進來的物件
    pages: {
      type: Object,
    }
  },
  methods: {
    //使用 emit 向外傳遞目前的事件
    //uploadPages 事件名
    updatePage(page) {
      this.$emit('uploadPages', page);
    },
  },
};
</script>