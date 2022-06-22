module.exports = {
  title: `minseon portfolio`,
  description: `minseon portfolio`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://songminseon.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `Songminseon/Songminseon.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: "0", // Google Analytics Tracking ID
  author: {
    name: `송민선`,
    bio: {
      role: `개발자`,
      description: ["도전을 두려워하지 않는", "책임강 강한", "깨어있는"],
      thumbnail: "sample.png", // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `smsun0329@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: "",
        activity: "",
        category: "",
        links: {
          github: "",
          post: "",
          googlePlay: "",
          appStore: "",
          demo: "",
        },
      },
      // ========================================================
      // ========================================================
      {
        date: "2022.03 ~ ",
        category: "project",
        activity: "메타버스를 활용한 캡스톤 프로젝트",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2022.01 ~ 2022.03",
        category: "project",
        activity: "구글 솔루션 챌린지 터치마이코딩 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.10 ~ 2022.02",
        category: "work",
        activity: "쿠드비건 프리랜서 개발자 근무",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.10 ~ 2021.12",
        category: "project",
        activity: "비건라이프 플랫폼 쿠드비건 외주",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.08 ~ 2022.06",
        category: "activity",
        activity: "Google Developer Student Club 코어멤버",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.08 ~ 2021.09",
        category: "project",
        activity: "한화라이프 라이프 어드바이저 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.07 ~ 2021.09",
        category: "project",
        activity: "K-studi 블록체인 웹 플랫폼 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.05 ~ 2021.07",
        category: "project",
        activity: "연애상담 플랫폼 달핑 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.05 ~ 2021.09",
        category: "work",
        activity: "이노플 플랫폼 개발팀 계약직 근무",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.04",
        category: "project",
        activity: '사회적 기업 동구밭에서 주관하는 "블루로드 캠페인" 개발 프로젝트 참여',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.12 ~ 2021.04",
        category: "project",
        activity: '크라우드 기부 플랫폼 서비스 "기부니가 좋다" 프로젝트 참여',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.11 ~ 2021.04",
        category: "work",
        activity: "대학생 창업팀 퍼네이션 합류",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.03 ~ 2020.12",
        category: "etc",
        activity: '前 서울과학기술대학교 산업공학과(ITM학부) 학과동아리 "소피스트" 부회장',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.06 ~ 2020.11",
        category: "activity",
        activity: "前 서울과학기술대학교 창업동아리8기 케이크워크 대표",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.06 ~ 2020.11",
        category: "project",
        activity: '커스텀케이크 중개플랫폼 서비스 "케이크워크" 프로젝트 참여',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.02 ~ 2020.12",
        category: "activity",
        activity: '前 "멋쟁이 사자처럼" 8기 운영진',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.06",
        category: "project",
        activity: '문화예술주최 팀 "역잘알" 프로젝트 참여',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.02",
        category: "etc",
        activity: "영국 Northumbria University(NewCastle) 단기연수",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2020.02",
        category: "prize",
        activity: "서울과학기술대학교 동계프로그래밍 경진대회 공모전 대상 수상",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2019",
        category: "prize",
        activity: "서울과학기술대학교 산업공학과(ITM학부)주최 교내 Global Challenge 금상 수상",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2017.05 ~ 2019.02",
        category: "etc",
        activity: "육군 특수전사령부 제1공수여단 전역",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2016",
        category: "activity",
        activity: '대학생 자원봉사 플랫폼 "서울동행" 봉사 참여',
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2016",
        category: "etc",
        activity: "서울과학기술대학교 산업공학과(ITM학부) 입학 (23.02 졸업예정)",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: "",
        description: "",
        techStack: ["", ""],
        thumbnailUrl: "",
        links: {
          post: "",
          github: "",
          googlePlay: "",
          appStore: "",
          demo: "",
        },
      },
      // ========================================================
      // ========================================================
      {
        title: "개발 블로그 테마 개발",
        description:
          "개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.",
        techStack: ["gatsby", "react"],
        thumbnailUrl: "blog.png",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
    ],
  },
};
