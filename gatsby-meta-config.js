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
        activity: "메타버스를 활용한 캡스톤 프로젝트",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2022.01 ~2022.03",
        activity: "구글 솔루션 챌린지 터치마이코딩 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2022.01 ~ 2021.02",
        activity: "쿠드비건 프리랜서 개발자 근무",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.10 ~ 2021.12",
        activity: "비건라이프 플랫폼 쿠드비건 외주",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.08 ~ 2021.06",
        activity: "Google Developer Student Club 코어멤버",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.08 ~ 2021.09",
        activity: "한화라이프 라이프 어드바이저 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.07 ~ 2021.09",
        activity: "블록체인 웹 플랫폼 프로젝트 참여",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
      {
        date: "2021.05 ~ 2021.07",
        activity: "연애상담 플랫폼 달핑",
        links: {
          post: "/gatsby-starter-zoomkoding-introduction",
          github: "https://github.com/zoomkoding/zoomkoding-gatsby-blog",
          demo: "https://www.zoomkoding.com",
        },
      },
    ],
  },
};
