<script>
// @ is an alias to /src
import CommentItem from "@/components/CommentItem.vue";
import axios from "axios";

export default {
  components: {
    CommentItem
  },
  data() {
    return {
      persons: []
    };
  },
  methods: {
    getInitialUsers() {
      for (let i = 0; i < 5; i++) {
        axios
          .get(`https://randomuser.me/api/`)
          .then(response => {
            this.persons.push(response.data.results[0]);
          })
          .catch(error => console.log(error));
      }
      // console.log(this.persons);
    },
    addUsers() {
      this.getInitialUsers();
    },
    scroll(persons) {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.getInitialUsers(persons);
        }
      };
    }
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.scroll(this.persons);
    // this.getInitialUsers();
  }
};
</script>
<template>
  <div class="about">
    <div class="user-reviews">
      <div class="container">
        <div class="user-content">
          <div class="main-block">
            <div class="header-text">
              <div class="left-items">
                <ul>
                  <li>
                    <a href="#">Комментарии</a>
                  </li>
                </ul>
              </div>
              <!-- /.left-items -->
              <div class="right-items">
                <img src="@/assets/img/svg/comments.svg" width="21" height="17" alt />
                <div class="number">172</div>
              </div>
              <!-- /.right-items -->
            </div>
            <!-- /.header-text -->

            <CommentItem
              v-for="person in persons"
              :key="person.index"
              :img="person.picture.large"
              :first_name="person.name.first"
              :last_name="person.name.last"
            />
          </div>
        </div>
        <!-- /.user-content -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.user-reviews -->
  </div>
</template>

<style lang="less" scoped>
@import "../assets/less/style.less";
p {
  font-size: 20px;
}
.user-reviews {
  font-size: 0;

  .user-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 20px;
    .main-block {
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0px 1px 6px 0 rgba(0, 0, 0, 0.15);
      padding-bottom: 22px;
      .header-text {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 27px;
        padding-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
        .left-items {
          display: flex;
          flex-direction: row;
          ul li {
            display: inline-flex;
            flex-direction: row;
            font-size: 18px;
            margin-right: 54px;
            a {
              text-decoration: none;
              .semibold;
              color: @bg-text3;
            }
            a:hover {
              color: @bg-header;
            }
          }
          ul {
            .active {
              a {
                color: @pinkish-grey;
              }
            }
          }
        }
        .right-items {
          display: flex;
          flex-direction: row;
          .number {
            font-size: 12px;
            .light;
            color: @pinkish-grey;
            -ms-align-self: flex-end;
            align-self: flex-end;
            margin-left: 3px;
          }
        }
      }
      #load-more_user-review > .comment-block_user-review:nth-child(n + 5) {
        display: none;
      }
    }
  }
  .reload {
    max-width: 100%;
    min-height: 72px;
    background-color: #fff;
    box-shadow: 0px 1px 6px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    .text {
      font-size: 17px;
      .bold;
      color: @bg-text3;
      margin-left: 12px;
      cursor: pointer;
    }
    .text:hover {
      color: @bg-header1;
    }
  }
}
@media (max-width: 1180px) {
  .user-reviews {
    .user-header {
      .header-content {
        max-width: 100%;
        padding-left: 14px;
        padding-right: 14px;
      }
    }
    .user-content {
      flex-direction: column;
      margin-top: 0px;
      .main-block {
        width: 100%;
        max-width: 100%;
        .header-text {
          padding: 10px 14px 14px;
        }
      }
      .right-block_desktop {
        display: none;
      }
      .right-block_mobile {
        order: -1;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        margin-bottom: 40px;
        margin-top: 40px;
        display: flex;
        .vote {
          top: 20px;
          left: 270px;
        }
        .border {
          display: block;
          width: 100%;
          margin-top: 11px;
        }
        .contacts {
          margin-top: 10px;
        }
      }
    }
    .reload {
      max-width: 100%;
      margin-bottom: 40px;
    }
  }
}
@media (max-width: 360px) {
  .user-reviews .user-content .main-block .header-text .right-items {
    display: none;
  }
}
</style>
