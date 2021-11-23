<template>
  <v-main>
    <v-sheet height="100vh">
      <v-parallax
        :src="require('@/assets/home.jpg')"
        height="100vh"
        style="height: 100vh"
      >
        <v-container fill-height>
          <v-layout fill-height align-center>
            <v-sheet color="transparent" style="color: white">
              <h3 class="font-weight-black">MISSION</h3>
              <h1 class="font-weight-black">입시의 주체를 학생으로</h1>
              <h3 class="font-weight-black mb-3">
                입시의 주체가 학생이 되는 그날까지 플랫가든이 함께 하겠습니다.
              </h3>
              <v-btn dark outlined rounded to="/hakhak">
                <b>학학이</b>
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn dark outlined rounded to="/studiosha" class="ml-3">
                <b>스튜디오 샤</b>
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
            </v-sheet>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-sheet>

    <v-sheet class="my-16">
      <v-container>
        <v-card flat>
          <v-card-title class="display-1 font-weight-bold black--text">
            <b>
              언제나 학생의 편에 서는,
              <br />
              입시 선봉장
            </b>
          </v-card-title>
          <v-card-text style="color: #535353">
            <div class="d-flex" style="overflow-y: hidden">
              <v-col cols="11" sm="4">
                <v-card flat rounded="lg">
                  <v-img :src="require('@/assets/employ_1.png')" />
                </v-card>
              </v-col>
              <v-col cols="11" sm="4">
                <v-card flat rounded="lg">
                  <v-img :src="require('@/assets/employ_2.png')" />
                </v-card>
              </v-col>
              <v-col cols="11" sm="4">
                <v-card flat rounded="lg">
                  <v-img :src="require('@/assets/employ_3.png')" />
                </v-card>
              </v-col>
            </div>

            <div class="mt-8">
              <p>플랫가든은 10대를 위한 목소리를 냅니다.</p>
              <p>학생들이 즐길 수 있는 입시 콘텐츠를 만듭니다.</p>
              <p>
                교육 콘텐츠를 무료로, 혹은 저렴하게 공유할 수 있는 방법에 대해
                연구합니다.
              </p>
              <p>
                다양한 사람들과의 협업으로, 기술과 데이터로, 혹은 아예 새로운
                방식으로 가능하게 합니다.
              </p>
              <p>
                새로운 선생님들, 대학생들, 선배들, 그리고 무엇보다 가장
                힘들어하고 있을 학생들과 함께합니다.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet color="#f7f7f7">
      <v-container class="py-16">
        <v-card flat color="transparent">
          <v-card-subtitle class="title black--text pb-2">
            <b>KEY POINT</b>
          </v-card-subtitle>
          <v-card-text :class="$vuetify.breakpoint.xsOnly ? '' : 'd-flex'">
            <div class="display-1 font-weight-bold black--text mr-16 mb-4">
              플랫가든은
              <br />
              새로운 입시를
              <br />
              만들어나갑니다.
            </div>
            <div>
              지금까지 계속되었던 입시를 완전히 바꾸겠습니다.
              <br />
              학생들이 즐거운 입시,
              <br />
              합리적인 소비가 가능한 입시,
              <br />
              정확한 분석이 가능한 입시를 만들겠습니다.
            </div>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-card flat>
                  <v-responsive aspect-ratio="1.16" class="d-flex align-top">
                    <v-img
                      class="mx-auto"
                      width="70%"
                      contain
                      :src="require('@/assets/box_1.png')"
                    />
                  </v-responsive>
                </v-card>
                <v-card-actions>
                  <b class="mx-auto">즐거운 입시</b>
                </v-card-actions>
              </v-col>
              <v-col cols="4">
                <v-card flat>
                  <v-responsive aspect-ratio="1.16" class="d-flex align-center">
                    <v-img
                      class="mx-auto"
                      width="70%"
                      contain
                      :src="require('@/assets/box_2.png')"
                    />
                  </v-responsive>
                </v-card>
                <v-card-actions>
                  <b class="mx-auto">합리적인 입시</b>
                </v-card-actions>
              </v-col>
              <v-col cols="4">
                <v-card flat>
                  <v-responsive aspect-ratio="1.16" class="d-flex align-center">
                    <v-img
                      class="mx-auto"
                      width="60%"
                      contain
                      :src="require('@/assets/box_3.png')"
                    />
                  </v-responsive>
                </v-card>
                <v-card-actions>
                  <b class="mx-auto">정확한 입시</b>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-16">
        <v-card flat>
          <v-card-subtitle class="title black--text pb-2">
            <b>ACTION</b>
          </v-card-subtitle>
          <v-card-title class="display-1 font-weight-bold black--text pt-0">
            <b>
              학생들에게
              <br />
              먼저 다가갑니다.
            </b>
          </v-card-title>
          <v-card-text style="color: #313131" class="mt-16">
            <v-card flat min-height="150px" color="#ffd90f" to="/hakhak">
              <v-row align="center" no-gutters>
                <v-col cols="6" class="d-none d-md-flex">
                  <v-img
                    style="position: relative; top: -50px; margin-bottom: -50px"
                    class="ml-6"
                    :src="require('@/assets/hakhak_card.png')"
                  />
                </v-col>

                <v-row cols="12" md="6" class="py-6">
                  <v-col cols="1" md="2" />
                  <v-col cols="9" md="8">
                    <b style="color: #ff5c00">MOBILE SERVICE</b>
                    <br />
                    <b class="title font-weight-black">입시친구 학학이</b>
                    <br />
                    입시 정보를 가볍고 재미있게!
                  </v-col>
                  <v-col cols="2" class="my-auto">
                    <v-img
                      height="30"
                      contain
                      src="@/assets/icons/arrow-right-orange.svg"
                    />
                  </v-col>
                </v-row>
              </v-row>

              <v-col cols="12" class="d-md-none pa-0">
                <v-img
                  style="position: relative; bottom: 0px"
                  class="ml-6"
                  :src="require('@/assets/hakhak_card.png')"
                />
              </v-col>
            </v-card>
            <v-card
              flat
              min-height="150px"
              color="#CEFFF0"
              class="mt-8"
              :img="require('@/assets/studiosha_card_back.png')"
              to="/studiosha"
            >
              <v-row align="center" no-gutters class="mt-8">
                <v-col cols="6" class="d-none d-md-flex">
                  <v-img
                    style="position: relative; top: -50px; margin-bottom: -50px"
                    class="ml-6"
                    :src="require('@/assets/studiosha_card.png')"
                  />
                </v-col>

                <v-row cols="12" md="6" class="py-6">
                  <v-col cols="1" md="2" />
                  <v-col cols="9" md="8">
                    <b style="color: #0038ff">YOUTUBE CHANNEL</b>
                    <br />
                    <b class="title font-weight-black">
                      관악산 영상공방 스튜디오 샤
                    </b>
                    <br />
                    서울대 멘토들의 ‘진짜' 입시 이야기
                  </v-col>
                  <v-col cols="2" class="my-auto">
                    <v-img
                      style="fill: #7f00ff"
                      height="30"
                      contain
                      src="@/assets/icons/arrow-right-mint.svg"
                    />
                  </v-col>
                </v-row>

                <v-col cols="12" class="d-md-none">
                  <v-img
                    style="position: relative; bottom: 0px"
                    class="ml-6"
                    :src="require('@/assets/studiosha_card.png')"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet color="#f7f7f7">
      <v-container class="py-16">
        <v-card flat color="transparent">
          <v-card-subtitle class="title black--text pb-2">
            <b>HISTORY & AWARDS</b>
          </v-card-subtitle>
          <v-card-title class="display-1 font-weight-bold black--text pt-0">
            <span>
              <u class="line">발전</u>을 즐기는
              <br />
              <u class="line">성장</u>을 멈추지 않는
              <br />
              끊임없이 <u class="line">도전</u>하는
            </span>
          </v-card-title>
          <v-card-text class="pl-0">
            <v-timeline dense align-top class="pt-2">
              <v-timeline-item
                v-for="year in years"
                :key="year.year"
                color="transparant"
                icon-color="#00b9ae"
                icon="mdi-record-circle"
                class="pb-0"
                right
                small
              >
                <div class="pl-10">
                  <div
                    class="pb-2"
                    v-for="(month, i) in year.month"
                    :key="month.month"
                  >
                    <b v-if="i === 0" style="position: absolute; left: -24px">
                      {{ year.year }}
                    </b>
                    {{ month.month }}
                    <span :class="month.month[2] ? 'pl-3' : 'pl-5'">
                      {{ month.text }}
                    </span>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-16 mb-8">
        <v-card flat>
          <v-card-subtitle class="title black--text pb-2">
            <b>협력사</b>
          </v-card-subtitle>
          <v-card-text style="color: #313131" class="pt-6">
            <v-img
              :class="$vuetify.breakpoint.mdAndUp ? 'mx-16' : ''"
              contain
              :src="require('@/assets/group.png')"
            />
          </v-card-text>
        </v-card>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-parallax :src="require('@/assets/employment.png')">
        <v-container>
          <v-card-subtitle style="color: #0038ff" class="title pb-2">
            <b>RECRUITMENT</b>
          </v-card-subtitle>
          <v-card-title
            class="mt-2 display-1 font-weight-bold black--text pt-0"
          >
            <h1>We're Hiring</h1>
          </v-card-title>
          <v-card-text class="mt-2 subtitle-1 font-weight-bold black--text">
            <h2>플랫가든과 함께 입시를 바꿔봐요</h2>

            <v-btn
              depressed
              rounded
              class="mt-8"
              color="#fff"
              href="https://flatgarden.notion.site/RECRUITING-49c24e37811d4875a712176a3d6bf721"
            >
              <b>채용공고 노션으로</b>
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-container>
      </v-parallax>
    </v-sheet>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Home",

  data: () => ({
    text: "입시의 주체를\n학생으로",
    title: "",
    blink: false,
    years: [
      {
        year: "2019년",
        month: [
          {
            month: "10월",
            text: "플랫가든 설립",
          },
          {
            month: "12월",
            text: "VC 스프링캠프 엑셀레이팅 프로그램 캠프파이어 2기 선정",
          },
        ],
      },
      {
        year: "2020년",
        month: [
          {
            month: "6월",
            text: "서울대학교 SNU 해동주니어 스타트업 선정",
          },
        ],
      },
      {
        year: "2021년",
        month: [
          {
            month: "3월",
            text: "8기 기보벤처캠프 선정",
          },
          {
            month: "5월",
            text: "VC 스프링캠프 추가 투자 유치",
          },
          {
            month: "6월",
            text: "구글 창구 프로그램 3기 선정",
          },
          {
            month: "7월",
            text: "KT DIGICO 공모전 선정 및 입주",
          },
          {
            month: "8월",
            text: "서울과학기술대학교 데이터사이언스대학원과 산학협력 체결",
          },
        ],
      },
    ],
  }),

  beforeCreate() {
    document.querySelector("body")?.setAttribute("style", "background: black")
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", "black")
  },

  mounted() {
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

<style lang="scss">
.line {
  text-decoration: none;
  background: linear-gradient(to top, #7cffe0 50%, transparent 50%);
}

p {
  line-height: 100%;
}

.v-timeline-item__dot {
  background: none !important;
  box-shadow: none !important;
}

.v-timeline:before {
  left: calc(48px - 2px) !important;
  width: 4px !important;
}

.v-timeline::before {
  background: #ddd8d4 !important;
  border-radius: 2px;
}
</style>
