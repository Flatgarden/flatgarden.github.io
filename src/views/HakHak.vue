<template>
  <v-main>
    <v-sheet color="#f9f9f9">
      <v-sheet height="100vh" color="#ffd600">
        <v-parallax style="height: 100vh" src>
          <v-container fill-height>
            <v-layout fill-height align-center>
              <v-sheet
                color="transparent"
                style="color: #313131; z-index: 1 !important"
              >
                <h3 class="font-weight-black mt-16" style="color: #ff5c00">
                  MOBILE SERVICE
                </h3>
                <h1 class="font-weight-black">입시친구 학학이</h1>
                <h3 class="font-weight-black mb-3">
                  입시 정보를 가볍고 재미있게.
                </h3>
              </v-sheet>
            </v-layout>
            <img
              class="hidden-xs-only"
              height="70%"
              style="position: absolute; bottom: 0; right: -50px"
              :src="require('@/assets/hakhak.png')"
            />
          </v-container>
        </v-parallax>
      </v-sheet>
      <div
        class="d-flex"
        style="position: relative; top: -75px; overflow-y: auto"
      >
        <v-col
          v-for="(review, index) in reviews"
          :key="index"
          lg="2"
          md="2"
          sm="3"
          cols="9"
        >
          <v-card color="#fafafa" elevation="4">
            <v-card-subtitle>
              <v-img :src="require('@/assets/stars.svg')" width="80%" />
              <span class="mt-2 text-subtitle-1 black--text font-weight-bold">
                {{ review.title }}
              </span>
              <br />
              {{ review.name }}
            </v-card-subtitle>
            <v-card-text
              class="text-caption black--text font-weight-bold mb-4"
              style="height: 100px; overflow: hidden"
            >
              {{ review.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </div>
    </v-sheet>

    <v-sheet color="#f9f9f9">
      <v-container fill-height>
        <v-layout row fill-height align-center>
          <v-col cols="12" sm="6">
            <h2>260만<br />중고등학생의<br />입시 고민 해결사</h2>

            <h2>성공적인 입시를</h2>

            <p class="mt-2">
              입시가 매년 반복됨에도 불구하고<br />
              쌓이는 정보들은 한정적입니다.<br />
              숨겨져 있거나 누군가가 독점하고 있는 ‘입시정보',<br />
              학학이가 싹싹 긁어 모아<br />
              모든 학생들에게 전부 보여주겠습니다.
            </p>
          </v-col>

          <v-col cols="12" sm="6">
            <v-col>
              <v-card height="100px" color="#f3f3f3" flat>
                <v-layout fill-height align-center class="ml-8">
                  <div class="caption" style="line-height: 110%">
                    지금까지<br /><span
                      class="headline"
                      style="line-height: 110%"
                      ><b>3,028개의 질문을</b><br />처리했어요</span
                    >
                  </div>
                </v-layout>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                height="100px"
                :img="require('@/assets/hakhak_letter.jpg')"
                flat
              >
                <v-layout fill-height align-center class="ml-8">
                  <div class="caption" style="line-height: 110%">
                    지금까지<br /><span
                      class="headline"
                      style="line-height: 110%"
                      ><b>2,195개의 답변이</b><br />모였어요</span
                    >
                  </div>
                </v-layout>
              </v-card>
            </v-col>
            <v-col>
              <v-card height="100px" color="#f3f3f3" flat>
                <v-layout fill-height align-center class="ml-8">
                  <div class="caption" style="line-height: 110%">
                    지금까지<br />
                    <span class="headline" style="line-height: 110%">
                      <b>575,873번 칼럼을</b><br />전달했어요</span
                    >
                  </div>
                </v-layout>
              </v-card>
            </v-col>
          </v-col>
        </v-layout>
      </v-container>

      <v-img :src="require('@/assets/hakhak_books.png')" />
    </v-sheet>

    <v-sheet color="#ffd700">
      <v-container
        :class="`${$vuetify.breakpoint.xsOnly ? 'py-8' : 'py-8 d-flex'}`"
        align-center
      >
        <h2>
          <b>
            <span style="color: #fca033">지금 학학이에서</span>
            <br />무료로 입시 상담하세요
          </b>
        </h2>

        <v-spacer />

        <div class="mt-1">
          <v-btn @click="download" outlined rounded>
            <b>앱스토어 ></b>
          </v-btn>

          <v-btn class="ml-4" @click="download" outlined rounded>
            <b>구글플레이 ></b>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet color="#f3f3f3">
      <v-parallax src>
        <v-container class="py-16 black--text">
          <v-slide-group v-model="slide" mandatory>
            <v-slide-item
              v-for="n in 4"
              :key="n"
              v-slot="{ active, toggle }"
              class="mr-2"
            >
              <v-sheet
                rounded="lg"
                :color="active ? '#FFCB11' : '#C4C4C4'"
                :width="active ? 80 : 10"
                height="10"
                @click="toggle"
              />
            </v-slide-item>
          </v-slide-group>

          <h2 class="mt-3">
            <span style="color: #c0c0c0">{{ card[slide].top }}</span>
            <br />
            {{ card[slide].bottom }}
          </h2>

          <h4 class="mt-5" style="color: #ff7a00">
            {{ card[slide].sub }}
          </h4>

          <p class="mt-2" v-html="card[slide].text" />

          <div
            class="d-flex"
            style="position: absolute; bottom: -50px; left: 50%"
          >
            <img class="hidden-xs-only" height="460px" :src="frame[slide]" />
            <img
              style="opacity: 0.2"
              class="hidden-xs-only"
              height="460px"
              :src="frame[(slide + 1) % 4]"
            />
            <img
              style="opacity: 0.2"
              class="hidden-xs-only"
              height="460px"
              :src="frame[(slide + 2) % 4]"
            />
            <img
              style="opacity: 0.2"
              class="hidden-xs-only"
              height="460px"
              :src="frame[(slide + 3) % 4]"
            />
          </div>
        </v-container>
      </v-parallax>
    </v-sheet>

    <v-sheet class="py-16">
      <v-container class="text-center">
        <h2>학학이는 학생들을 신경쓰는<br />대학생들이 직접 만들어나갑니다.</h2>
        <v-btn
          outlined
          rounded
          class="my-6"
          href="https://hana.icu/ko"
          target="_blank"
          >대학생 멘토 신청하기 ></v-btn
        >
        <v-row
          justify="center"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'"
        >
          <v-col
            cols="6"
            sm="4"
            xl="3"
            v-for="counter in counters"
            :key="counter.name"
          >
            <v-sheet
              rounded="circle"
              style="
                background: linear-gradient(#fff, rgba(196, 196, 196, 0.2));
              "
            >
              <v-responsive aspect-ratio="1">
                <v-layout fill-height justify-center align-center>
                  <div>
                    <h3
                      :class="`${
                        $vuetify.breakpoint.xsOnly
                          ? 'text-subtitle-2'
                          : $vuetify.breakpoint.mdAndDown
                          ? 'text-subtitle-1'
                          : 'text-h6'
                      } font-weight-medium`"
                    >
                      {{ counter.name }}
                    </h3>

                    <h3
                      :class="`${
                        $vuetify.breakpoint.xsOnly
                          ? 'text-h5'
                          : $vuetify.breakpoint.mdAndDown
                          ? 'text-h4'
                          : 'text-h3'
                      } font-weight-black`"
                      v-html="counter.count"
                    >
                      {{ counter.count }}
                    </h3>
                  </div>
                </v-layout>
              </v-responsive>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet dark>
      <v-img :src="require('@/assets/hakhak_block.png')">
        <v-container fill-height>
          <v-layout fill-height align-center>
            <v-sheet class="my-16" color="transparent" width="100%">
              <h2 style="color: #ffffff88">학학이와 함께</h2>

              <h2>성공적인 입시를</h2>

              <div
                :class="`${$vuetify.breakpoint.xsOnly ? '' : 'd-flex'} mt-16`"
              >
                <div class="d-flex mb-4">
                  <v-card flat>
                    <v-img :src="require('@/assets/hakhak.webp')" width="52" />
                  </v-card>

                  <div>
                    <v-card-title class="pt-0 pb-3">
                      <b>학학이 - 입시고민 해결사</b>
                    </v-card-title>

                    <v-card-subtitle class="pb-0">
                      입시가 고민될 땐 학학이를 찾아와
                    </v-card-subtitle>
                  </div>
                </div>

                <v-spacer />

                <div class="d-flex mb-4">
                  <v-btn @click="download" outlined rounded>
                    <b>앱스토어 ></b>
                  </v-btn>

                  <v-btn class="ml-4" @click="download" outlined rounded>
                    <b>구글플레이 ></b>
                  </v-btn>
                </div>
              </div>

              <div
                :class="`${$vuetify.breakpoint.xsOnly ? 'row' : 'row'}`"
                style="overflow-y: auto"
              >
                <v-col cols="12" sm="4" v-for="n in 3" :key="n">
                  <v-card flat rounded="lg">
                    <v-img
                      contain
                      :src="require(`@/assets/hakhak_app_${n}.png`)"
                    />
                  </v-card>
                </v-col>
              </div>
            </v-sheet>
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>

    <v-bottom-sheet v-model="bottomSheet" hide-overlay persistent>
      <v-sheet height="200px">
        <v-container>
          <v-row no-gutters style="flex-wrap: nowrap">
            <v-card width="80px" flat>
              <v-img
                height="80px"
                aspect-ratio="1"
                :src="require('@/assets/hakhak.webp')"
              />
            </v-card>
            <div style="overflow: hidden; white-space: nowrap">
              <v-card-title class="pt-0">학학이 - 입시고민 해결사</v-card-title>
              <v-card-subtitle class="pb-0">
                입시가 고민될 땐 학학이를 찾아와
              </v-card-subtitle>
              <v-card-subtitle class="pt-0">
                <v-rating
                  class="d-inline"
                  length="5"
                  size="10"
                  :value="5"
                  readonly
                  dense
                  color="orange"
                />
                <span class="ml-2 caption">4.8 • 910개의 평가</span>
              </v-card-subtitle>
            </div>
          </v-row>

          <v-btn outlined block large @click="download" class="mt-4">
            <v-icon left small>mdi-download</v-icon>
            설치하기
          </v-btn>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue"
import axios from "axios"

export default Vue.extend({
  name: "HakHak",

  data: () => ({
    dialog: false,
    text: "입시가 궁금할 땐\n학학이에게 물어봐",
    title: "",
    blink: false,
    frame: [
      require("@/assets/frame_1.png"),
      require("@/assets/frame_2.png"),
      require("@/assets/frame_3.png"),
      require("@/assets/frame_4.png"),
    ],
    counters: [
      { name: "입시를 바꾸는 학생들", count: "43,144명" },
      { name: "입시를 바꾸는 멘토들", count: "30명" },
    ],
    reviews: [
      {
        title: "생애 첫 리뷰...❤️",
        name: "믐밈밈",
        text: "저는 카톡 플친 이런것도 아녔고 광고로 다운받아 봤는데 속는 셈치고 들어가보지 뭐 라는 생각을 단반에 바꾸게 만든 학학이 !! 정말 도움 많이 받는 중이에요 이런 앱 만들어주셔서 감사합니당... ㅎㅎ 질문도 보내봤는데 답장도 빨리 오고 너무 자세하게? 친절하게 보내주셔서 감동 대빵 많이 받았구요 칼럼들도 도움이 많이 되더라구요 입시 끝날때까지 학학이의 도움을 받아서 힘내겠습니다 !! 감사해요 !!",
      },
      {
        title: "학학이 최고에요",
        name: "라첼킴",
        text: "전 처음에 몇개 질문만 무료겠지ㅜㅜ 했는데 그런것도 아니였고 하나한 정성스럽게 답해주시고 따로 공부법이랑 그 외 입시 또는 공부 관련 글 올려주신 거 보고 너무 감동 먹었잖아요...🥺 너무 도움 되고 글 올라올때마다 설레면서 읽어요 너무 유익하고 대학생분들이니 바쁘실텐데 이렇게 도움이 필요한 학생들을 봐주시는 것 너무 감사드려요 제 진짜 인생앱이에요 추천추천😭",
      },
      {
        title: "학학이짱❗️",
        name: "교댕두",
        text: "입시 상담은 보통 돈도 들 것 같고 뭔가 하기 어려운 이미지라고 생각하고 있었는데😿 학학이를 알게 되면서 진짜 유용한 앱으로 잘 이용하고 있어요👍🏻 직접 멘토분들이 고민에 답변해주셔서 진짜 큰 도움 돼요 없어서는 안될 어플 꼭 사용하시길😄♥️",
      },
      {
        title: "👑 첫 리뷰 : 매우 좋은 앱입니다 :)",
        name: "달한줌",
        text: "앱 디자인부터 마음에 듭니다, 카톡 프로필에서 학업 관련많은 도움 받아왔어요! 이 앱에서도 많이 질문할 예정입니다! 여러분 질문도 [ 무료 ] 이고, 답변도 상세하게 옵니다! 최고의 멘토분들이 일일이 확인하고, 답변해주시는거에요!! [ 칼럼 ] 에도 좋은 정보가 많이 있으니 한 번씩 읽어보셨으면 좋겠어요! 정말 입시준비하는 모든 학생분들이 사용해보셨음 해요 ❤️ 학학이 최고!",
      },
      {
        title: "최고 ㅠㅠ❤️",
        name: "유아라유",
        text: "고민도 많고 결정도 확실히 못내리는 성격인데 이 앱을 통해서 제가 답답했던 부분들을 해결해주고 일단 앱이 너무 최고입니다 ㅠ 이런 앱이 나오길 항상 기다렸었어요 ㅠ 곧 수험생인데 제가 원했던 앱이 나와서 행복하네요 ! 짱 좋음",
      },
      {
        title: "정말 추천드러요",
        name: "혜정보리",
        text: "코로나로 인해서 생기부도 모르겠고, 내신 방법도 찾지 못한 고1입니다 모든 멘토분들이 정말 자세하고 친절하게 알러주세요 그리고 편지칸에서 멘토분들의 이야기나 꿀팁까지 알 수 있어요 저같이 길을 못잡으신 분들 꼭 추천드립니다😊😊",
      },
      {
        title: "완전 좋아요",
        name: "먀ㅓㄴㅁ밈",
        text: "주변에 입시 잘 아는 사람이 없어서 답답했는데 좋은 정보도 많고 동기부여도 많이 받고 갑니당 처음엔 광고 보고 에이 이것도 다른것처럼 광고만 많고 이러지 않을까 좋아봤자 얼마나 좋겠어 이런 맘으로 깔아봤는데 완전 좋네요... ㅎㅎㅎ 좋은 앱 만들어주셔서 감사합니다 ❤️❤️",
      },
      {
        title: "엄청 도움되요",
        name: "뿌뿌양",
        text: "중3이고 이제 고등학교도 가야하고 입시나 수능 이런거에 대해 궁금증이 많았는데 여기서 다 자세히 알려주고실제로 우리가 원하는 꿈에그리던 그런 대학교에 입학한 사람들의 공부 꿀팁이라거나 이야기들도 있으니깐 보면서 도움도 많이 되었어요ㅠㅠ 공부법도 있고 인강, 멘탈 잡는법 여러가지 자기관리?에 대한 내용들도 있어요 이건 학생들이 아니라 재수하시는분들이나 그냥 시험준비하시는분들이 사용하셔도 되는 앱인것 같아요! 전 정말 도움되었어요 고등학교 생활할때도 많이 도움받을것같아요ㅠ감사합니덧!",
      },
    ],
    letter: 0,
    userCount: 0,
    questionCount: 0,
    coreReplyCount: 0,
    bottomSheet: false,
    slide: 0,
    card: [
      {
        top: "고민이 너무 많아",
        bottom: "끙끙 앓고있는 학생들",
        sub: "학학이에선 아무리 많이 물어봐도 전부 무료",
        text: "어디에서 물어보긴 부끄럽고,<br />혼자서 해결은 안 되고...<br />그 어떤 질문이라도<br />학학이에서는 무료로 해결할 수 있어요",
      },
      {
        top: "어떻게 질문해야할지",
        bottom: "시작부터 막히는 학생",
        sub: "모든 질문들을 먼저 제시해주니까",
        text: "가볍게 태그로 선택해서<br />내가 진짜 궁금한 것만<br />콕 찝어서<br />물어볼 수 있어요",
      },
      {
        top: "어렵고 복잡한 입시",
        bottom: "머리만 아픈 학생",
        sub: "선배들이 친절하게 알려주니까",
        text: "입시를 직접 겪어본 선배들이<br />어렵기만한 입시를<br />쉽게 우리들의 말로<br />풀어서 설명해줘요",
      },
      {
        top: "외로운 학교생활",
        bottom: "기댈 곳이 필요한 학생",
        sub: "입시뿐만 아니라 학교생활도 챙겨주니까",
        text: "오늘의 급식, 시간표 등<br />필수적으로 필요한 정보들을<br />누구보다 빠르게<br />먼저 알려줘요",
      },
    ],
  }),

  beforeMount() {
    document.querySelector("body")?.setAttribute("style", "background: #ffd600")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#ffd600")

    const userAgent = navigator.userAgent

    if (/Android|iPhone|iPad|iPod/i.test(userAgent)) this.bottomSheet = true
  },

  methods: {
    download() {
      const userAgent = navigator.userAgent

      const isAndroid = /Win|Android/i.test(userAgent)
      const isIos = /Mac|iPhone|iPad|iPod/i.test(userAgent)

      if (isAndroid) {
        location.href =
          "intent://www.hakhak.io/#Intent;scheme=hakhak;package=kr.flatgarden.hakhak;end"
        location.href = "market://details?id=kr.flatgarden.hakhak"
      } else if (isIos) {
        location.href =
          "https://apps.apple.com/kr/app/%ED%95%99%ED%95%99%EC%9D%B4/id1509380462"
      }
    },
  },

  mounted() {
    setInterval(() => {
      this.slide += 1
      if (this.slide > 3) this.slide = 0
    }, 7000)

    this.reviews.sort(() => Math.random() - 0.5)

    this.$store.state.dialog = this.$route.params.dialog

    window.scrollTo(0, 0)

    let index = 0
    const interval = setInterval(() => {
      let char = this.text[index++]
      this.title += char === "\n" ? "<br/>" : char

      if (index >= this.text.length) {
        clearInterval(interval)

        setInterval(() => {
          this.blink = !this.blink
        }, 500)
      }
    }, Math.floor(Math.random() * 100) + 100)

    const getUserCountQuery = `query getUserCount {
      getUserCount
    }`

    const questionCountInitQuery = `query questionCountInit {
      questionCountInit {
        questionCount
        coreReplyCount
      }
    }`

    axios
      .post("https://api.hakhak.io/graphql", { query: getUserCountQuery })
      .then((res) => {
        this.counters[0].count =
          res.data.data.getUserCount.toLocaleString("ko-KR") + "명"
      })

    axios
      .post("https://api.hakhak.io/graphql", { query: questionCountInitQuery })
      .then((res) => {
        const result = res.data.data.questionCountInit
        // this.counters[2].count =
        //   result.questionCount.toLocaleString("ko-KR") + "건"
        this.coreReplyCount = result.coreReplyCount
      })
  },
})
</script>
