<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    openUser() {
      this.$emit("open");
    }
  }
};
</script>
<template>
  <div id="load-more_user-review" class>
    <div class="comment-block_user-review">
      <div class="top-items">
        <div class="left-items">
          <div class="data-name" @click="openUser">
            <div class="img">
              <img src="https://via.placeholder.com/50x50" />
            </div>
            <div class="name">{{ name }}, "{{ nickname }}"</div>
          </div>
          <div class="review">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>

        <div class="vote">
          <div class="arrow-up">
            <img src="@/assets/img/up-arrow.png" width="13" height="9" alt />
          </div>
          <div class="vote-number">+12</div>
          <div class="arrow-up">
            <img src="@/assets/img/down-arrow.png" width="13" height="9" alt />
          </div>
        </div>
      </div>
      <!-- /.top-items -->
      <div class="bottom-item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sed
        rem, soluta saepe impedit, necessitatibus ea et, architecto iusto minus
        alias. Molestias temporibus excepturi voluptatem hic vero maxime fugiat
        consequatur.
      </div>
      <!-- /.bottom-item -->
      <div class="border-bottom"></div>
      <!-- /.border-bottom -->
    </div>
    <!-- /.comment-block -->
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./../assets/less/style.less";
.comment-block_user-review {
  margin-top: 13px;
  .top-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 24px;
    padding-right: 24px;
    .left-items {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      flex-wrap: wrap;
      .data-name {
        display: flex;
        flex-direction: column;
        margin-right: 19px;
        .img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          font-size: 16px;
          .regular;
          color: @bg-text3;
          cursor: pointer;
        }
        .name:hover {
          color: @bg-header1;
        }
        .data {
          font-size: 14px;
          .light;
          color: @pinkish-grey-two;
          .rating-count {
            display: flex;
            width: 110px;
          }
          .rating-count input {
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
          }
          .rating-count input + label {
            font-size: 0;
            display: flex;
            width: 19px;
            height: 18px;
            margin-right: 5px;
            cursor: pointer;
            background: url("/assets/img/small-rating-star_fill.svg");
          }
          .rating-count label:hover ~ label,
          .rating-count:not(:hover) input:invalid + label,
          .rating-count:not(:hover) input:checked + label ~ label {
            background: url("/assets/img/small-rating-star.svg") no-repeat
                center / contain,
              url("/assets/img/small-rating-star_fill.svg") no-repeat center / 0
                0,
              url("/assets/img/small-rating-star_focus.svg") no-repeat center /
                0 0;
          }
          .rating-count input + label:hover,
          .rating-count:not(:hover) input:focus + label {
            background: url("/assets/img/small-rating-star_focus.svg");
          }
        }
      }
      .review {
        max-width: 457px;
        font-size: 14px;
        text-align: left;
        .light;
        color: @bg-text3;
        cursor: pointer;
      }
      .review:hover {
        color: @bg-header1;
      }
    }
    .vote {
      display: flex;
      flex-direction: row;
      align-items: center;
      .vote-number {
        font-size: 12px;
        .regular;
        color: @grassy-green;
        margin-right: 7px;
        margin-left: 7px;
      }
      .arrow-up {
        cursor: pointer;
      }
    }
  }
  .bottom-item {
    max-width: 610px;
    font-size: 14px;
    text-align: left;
    .light;
    color: @black-three;
    margin-top: 22px;
    padding-left: 24px;
  }
  .border-bottom {
    width: 100%;
    height: 1px;
    background: @white-two;
    margin-top: 24px;
  }
}

@media (max-width: 1180px) {
  .comment-block_user-review {
    .top-items {
      padding-left: 14px;
      padding-right: 14px;
      .left-items {
        flex-direction: column;
        .data-name {
          margin-right: 0px;
          .data {
            margin-top: 4px;
            padding-bottom: 8px;
          }
        }
      }
    }
    .bottom-item {
      margin-top: 10px;
      padding-left: 14px;
    }
    .border-bottom {
      margin-top: 10px;
    }
  }
}

@media (max-width: @mobile) {
  .comment-block_user-review {
    .top-items {
      padding-left: 9px;
      padding-right: 9px;
      .left-items {
        flex-direction: column;
        .data-name {
          margin-right: 0px;
          .data {
            margin-top: 4px;
            padding-bottom: 8px;
          }
        }
      }
    }
    .bottom-item {
      margin-top: 10px;
      padding-left: 9px;
    }
    .border-bottom {
      margin-top: 10px;
    }
  }
}
</style>
