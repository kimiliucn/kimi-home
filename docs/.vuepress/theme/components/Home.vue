<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- 头部 -->
    <header class="wrapper_box">
      <div class="logo_wrapper">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'Logo'"/>
      </div>
      <p class="introduce description" v-if="data.tagline !== null">
        {{ data.tagline || $description || "Welcome to your VuePress site" }}
      </p>
      <div class="button_wrapper">
        <app-link :to="data.actionLink" class="btn_temp home_button">{{data.actionText}}</app-link>
        <app-link to="https://github.com/Tkimiliu/kimi-home" class="btn_github home_button">GitHub</app-link>
      </div>
    </header>

    <!-- 亮点与优势 -->
    <div class="home_wrapper_box advantage_box" v-if="data.advantagesTitle !== null">
      <h3 class="title">{{data.advantagesTitle}}</h3>
      <div class="content">
        <el-row :gutter="0" class="content_row">
          <div v-for="(advantage,index) in data.advantages" :key="index">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="content_col">
              <div class="grade">
                <img :src="advantage.icon" :alt="advantage.title" draggable="false"/>
                <h3>{{advantage.title}}</h3>
                <p>{{advantage.content}}</p>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>

    <!-- 轻松掌握 -->
    <div class="home_wrapper_box survery" v-if="data.easyMastersTitle !== null">
      <h3 class="title">{{data.easyMastersTitle}}</h3>
      <div class="content">
        <el-row :gutter="30" class="content_row">
          <div v-for="(easyMaster,index) in data.easyMasters" :key="index">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="content_col">
              <div class="grade">
                <img :src="easyMaster.icon" :alt="easyMaster.title" draggable="false" />
                <h3>{{easyMaster.title}}</h3>
                <p>{{easyMaster.content}}</p>
                <app-link :to="easyMaster.link_url">{{easyMaster.link_text}}</app-link>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>

    <!-- 支持的功能 -->
    <div class="home_wrapper_box support_function_box">
      <h3 class="title">{{data.supportFunTitle}}</h3>
      <div class="content">
        <el-row :gutter="30" class="content_row">
          <div v-for="(supportFun,index) in data.supportFuns" :key="index">
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="content_col">
              <div class="grade">
                <div class="col_title">{{supportFun.title}}</div>
                <div class="grade_content" v-for="(FunContent,index) in supportFun.content" :key="index">
                  <img :src="FunContent.icon" :alt="FunContent.text" draggable="false"/>
                  <p>{{FunContent.text}}</p>
                  <span class="el-icon-check"></span>
                </div>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>

    <!-- 主要内容 -->
    <Content class="theme-default-content custom" />

    <!-- 尾部信息 -->

    <!-- 版权信息 -->
    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
    <Content v-else slot-key="footer" class="footer" />
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import AppLink from "./AppLink.vue";

export default {
  name: "Home",
  components: { 
    NavLink,
    AppLink
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.home {
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  // 头部
  .wrapper_box {
    width: 100%;
    height: 420px;
    background: #fff;
    padding: 5.6rem 0 0;
    .logo_wrapper {
      width: 160px;
      height: 160px;
      margin: auto;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .introduce {
      font-size: 16px;
      line-height: 32px;
      font-weight: 400;
      max-width: 557px;
      margin: 25px auto 25px;
      text-align: center;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:4;
    }
    .button_wrapper {
      max-width: 557px;
      margin: 25px auto 64px;
      text-align: center;
      box-sizing: border-box;
      .home_button {
        min-width: 136px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        display: inline-block;
        font-size: 16px;
        box-sizing: content-box;
        box-shadow: 0 0 0 transparent;
        position: relative;
        bottom: 0;
        transition:bottom 0.2s;
        &:hover{
          bottom:3px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
      }
      .btn_temp {
        color: #fff;
        background: $accentColor;
        border: 2px solid $accentColor;
      }
      .btn_github {
        border: 2px solid $accentColor;
        color: $accentColor;
        margin-left: 10px;
      }
    }
  }

  .home_wrapper_box {
    width: 100%;
    height: auto;
    padding: 30px 0;
  }
  // 优势介绍
  .advantage_box {
    background: #F8F8F8;
    .title {
      font-size: 30px;
      font-weight: 550;
      color: #262626;
      text-align: center;
      margin: 0;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:1;
    }
    .content {
      padding: 0 15%;
      .content_row {
        .content_col {
          .grade {
            margin: 25px 30px;
            text-align: center;
            img {
              width: 60px;
              height: 60px;
              -webkit-user-drag: none;
            }
            h3 {
              font-size: 20px;
              margin: 10px 0;
              color: rgba(0, 0, 0, 0.85);
              font-weight: 500;
              box-sizing: border-box;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
            }
            p {
              color: #697b8c;
              font-size: 14px;
              line-height: 20px;
              margin-top: 0;
              margin-bottom: 1em;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
            }
          }
        }
      }
    }
  }

  // 轻松掌握
  .survery {
    .title {
      font-size: 30px;
      font-weight: 550;
      text-align: center;
      color: #262626;
      margin-top:30px;
      overflow:hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:1;
    }
    .content {
      padding: 0 20%;
      .content_row {
        margin-bottom: 40px;
        .content_col {
          .grade {
            height: 430px;
            width: 100%;
            background: #fff;
            border: 1px solid #eaeefb;
            border-radius: 5px;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            transition: bottom 0.3s;
            position: relative;
            bottom: 0;
            margin-top: 15px;
            &:hover {
              bottom: 6px;
              box-shadow: 0 6px 18px 0 rgba(232, 237, 250, 0.5);
            }
            &:hover img{
              transform:rotate(360deg);
            }
            img {
              width: 30%;
              margin: 66px auto 60px;
              transition: transform 0.4s;
            }
            h3 {
              margin: 0;
              font-size: 18px;
              color: #1f2f3d;
              font-weight: 400;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
            }
            p {
              font-size: 14px;
              color: #99a9bf;
              padding: 0 25px;
              line-height: 20px;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:4;
            }
            a {
              height: 53px;
              line-height: 52px;
              font-size: 14px;
              color: #409eff;
              text-align: center;
              border: 0;
              border-top: 1px solid #eaeefb;
              padding: 0;
              cursor: pointer;
              width: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              background-color: #fff;
              border-radius: 0 0 5px 5px;
              text-decoration: none;
              display: block;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
              transition: all 0.5s;
              &:hover {
                color: #fff;
                background: #409eff;
              }
            }
          }
        }
      }
    }
  }

  // 支持的功能
  .support_function_box {
    background: #F8F8F8;
    .title {
      font-size: 30px;
      font-weight: 550;
      color: #262626;
      text-align: center;
      margin-top:30px;
    }
    .content {
      padding: 0 20%;
      .content_row {
        margin-bottom: 40px;
        .content_col {
          .grade {
            padding: 30px;
            margin-top: 20px;
            text-align: center;
            background: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 0 4rem rgba(0, 0, 0, 0.05);
            min-height: 184.8px;
            .col_title {
              margin-bottom: 1.5rem;
              font-size: 1.5rem;
              font-weight: 700;
              color: #212e33;
              text-align: left;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
            }
            .grade_content {
              display: flex;
              align-items: center;
              margin-bottom:5px;
              img {
                flex-shrink: 0;
                width: 20px;
                height: 20px;
                margin-right: 0.6rem;
              }
              p {
                margin-top: 0;
                margin-bottom: 0;
                line-height: 1.7;
                box-sizing: border-box;
                color: #4a555b;
                font-size: 16px;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:1;
              }
              span {
                flex-shrink: 0;
                width: 18px;
                height: 18px;
                margin-left: auto;
                background: #0abd8d;
                border-radius: 100%;
                color: #ffffff;
                box-sizing: border-box;
                line-height: 18px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

  .hero {
    text-align: center;
    border: 1px solid red;
    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }
    h1 {
      font-size: 3rem;
    }
    h1, .description, .action {
      margin: 1.8rem auto;
    }
    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }
    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }
    p {
      color: lighten($textColor, 25%);
    }
  }

  // 版权信息 
  .footer {
    padding: 6px 0 6px;
    text-align: center;
    color: #838383;
    background: #F8F8F8;
    font-size:14px;
    border-top:1px solid #E5E5E5;
  }

  @media (max-width: $MQMobile) {
    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }
      h1 {
        font-size: 2rem;
      }
      h1, .description, .action {
        margin: 1.2rem auto;
      }
      .description {
        font-size: 1.2rem;
      }
      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
