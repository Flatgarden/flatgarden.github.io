<template>
  <v-main>
    <v-sheet>
      <v-sheet height="100vh" color="#ffd600">
        <v-parallax :src="require('@/assets/hakhak.jpg')" style="height: 100vh">
          <v-container fill-height>
            <v-layout fill-height align-center>
              <v-sheet
                color="transparent"
                :height="$vuetify.breakpoint.xsOnly ? '375' : null"
                style="color: #313131"
              >
                <h1 class="font-weight-black">
                  <span v-html="title" />
                  <span :style="blink ? 'visibility: hidden' : null">|</span>
                </h1>
              </v-sheet>
            </v-layout>
          </v-container>
        </v-parallax>
      </v-sheet>
      <v-row justify="center" no-gutters>
        <v-card
          style="top: -110px"
          :class="$vuetify.breakpoint.smAndDown ? 'ma-2' : 'my-2 mx-4'"
          width="584px"
          elevation="4"
        >
          <v-card-title class="headline">
            <b>학학이는 뭔가요?</b>
          </v-card-title>
          <v-card-text style="color: #313131">
            학학이 앱은 다양한 입시 정보를 제공하고 있습니다. 모두가 읽을 수
            있는 범용적인 콘텐츠뿐만 아니라, 질문답변 시스템을 통해 개개인에
            맞는 정보도 제공해주고 있습니다.
            <br />
            입시를 위해서는 학교생활, 성적, 생기부 등 신경 써야할 것이 정말
            많습니다. 학학이 앱에서는 시간표, 급식 등 평소 학교생활에 필요한
            정보부터 학교 성적, 생활기록부 정보까지 입시의 전 영역에 도움을 받을
            수 있습니다.
          </v-card-text>
        </v-card>
      </v-row>
    </v-sheet>
    <v-sheet class="pb-8">
      <v-container :class="$vuetify.breakpoint.xsOnly ? 'pb-8' : 'pb-8 px-16'">
        <v-row
          justify="center"
          class="text-center"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'"
        >
          <v-col
            cols="4"
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
                <v-layout
                  fill-height
                  align-center
                  justify-center
                  class="text-center"
                >
                  <h3
                    :class="
                      $vuetify.breakpoint.xsOnly
                        ? 'text-subtitle-2 font-weight-medium'
                        : $vuetify.breakpoint.mdAndDown
                        ? 'text-subtitle-1 font-weight-medium'
                        : 'text-h6 font-weight-medium'
                    "
                    style="position: absolute; top: 20%; opacity: 0.3"
                  >
                    {{ counter.name }}
                  </h3>
                  <div>
                    <h3
                      :class="
                        $vuetify.breakpoint.xsOnly
                          ? 'text-h5 font-weight-black'
                          : $vuetify.breakpoint.mdAndDown
                          ? 'text-h4 font-weight-black'
                          : 'text-h3 font-weight-black'
                      "
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
    <v-sheet class="pb-8">
      <v-container :class="$vuetify.breakpoint.xsOnly ? 'pt-8' : 'pt-8 px-16'">
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-16'">
          <v-card-title class="py-0">
            <b>학학이를 사용중인 유저들의 후기</b>
          </v-card-title>
        </v-card>
      </v-container>
      <v-card-text style="color: #313131" class="d-flex">
        <v-col
          v-for="(review, index) in reviews"
          :key="index"
          lg="3"
          md="4"
          sm="6"
          cols="8"
        >
          <v-card class="pa-4" color="#fafafa" elevation="4">
            <v-img
              :src="require('@/assets/stars.svg')"
              width="50%"
              class="mx-auto mt-4"
            />
            <v-card-subtitle class="text-center pt-1">
              <span class="text-subtitle-1 black--text font-weight-bold">
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
      </v-card-text>
    </v-sheet>
    <v-sheet>
      <v-container :class="$vuetify.breakpoint.xsOnly ? '' : 'pb-0 px-16'">
        <v-card flat :class="$vuetify.breakpoint.smAndDown ? '' : 'pb-0 mx-16'">
          <v-card-title class="pb-0">
            <b>전국 대학생들이 답해주는 입시 질문</b>
          </v-card-title>
        </v-card>
      </v-container>
      <v-img height="500px" :src="require('@/assets/hakhak_letter.png')">
        <v-container fill-height class="pl-16">
          <v-layout
            align-center
            :class="$vuetify.breakpoint.smAndDown ? '' : 'pl-16 ml-16'"
          >
            <div
              class="text-h5"
              style="color: #a26c00"
              v-html="`지금까지<br /><b>${letter}개의 답변</b>이<br />모였어요`"
            />
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>
    <v-sheet>
      <v-img :src="require('@/assets/hakhak.png')">
        <v-container
          fill-height
          :class="$vuetify.breakpoint.xsOnly ? '' : 'px-16'"
        >
          <v-layout fill-height align-center>
            <v-sheet class="my-16 py-8" color="transparent" width="100%">
              <div class="d-flex">
                <a
                  href="https://www.youtube.com/channel/UCn0MK9vcIxinP4033UEHiUw"
                  target="_blank"
                >
                  <v-img
                    :src="require('@/assets/hakhak_logo.png')"
                    width="96"
                  />
                </a>
                <div class="d-inline-block white--text ml-6 my-auto">
                  - 2020년 8월 학학이 앱 출시
                  <br />
                  - 누적 질문 수 n개, 답변 n개로 입시를 바꾸는 데이터가 꾸준히
                  쌓이는 중입니다.
                  <br />
                  - 누적 칼럼 조회수 n회로 콘텐츠의 영향력을 인정받고 있습니다.
                  <br />
                  - 학학이는 입시를 바꾸는 n명의 학생들과 n명의 멘토들이 함께
                  합니다.
                </div>
              </div>
              <v-row class="my-4">
                <v-col cols="6">
                  <v-btn
                    block
                    x-large
                    href=""
                    target="_blank"
                    @click="download"
                  >
                    <b>앱 다운로드</b>
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    block
                    x-large
                    href="https://www.instagram.com/studystudyee/"
                    target="_blank"
                  >
                    <b>학학이 인스타그램</b>
                  </v-btn>
                </v-col>
              </v-row>
              <v-img
                class="mt-8"
                :src="require('@/assets/hakhak_preview.png')"
                width="100%"
              />
            </v-sheet>
          </v-layout>
        </v-container>
      </v-img>
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "HakHak",

  data: () => ({
    text: "입시가 궁금할 땐\n학학이에게 물어봐",
    title: "",
    blink: false,
    counters: [
      { name: "구독자 수", count: "36,264명" },
      { name: "평균 평점", count: "4.8점" },
      { name: "해결한 입시 고민", count: "33,532건" },
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
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: #ffd600")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "#ffd600")
  },

  methods: {
    download() {
      const device = navigator.userAgent.toLowerCase()

      if (device.indexOf("win") > -1 || device.indexOf("android") > -1) {
        window.open(
          "https://play.google.com/store/apps/details?id=kr.flatgarden.hakhak&hl=ko",
          "_blank"
        )
      } else if (
        device.indexOf("mac") > -1 ||
        device.indexOf("iphone") > -1 ||
        device.indexOf("ipad") > -1 ||
        device.indexOf("ipod") > -1
      ) {
        window.open(
          "https://apps.apple.com/kr/app/%ED%95%99%ED%95%99%EC%9D%B4/id1509380462",
          "_blank"
        )
      }
    },
  },

  mounted() {
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
  },
})
</script>
